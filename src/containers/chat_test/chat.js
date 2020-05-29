import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import ChatRoom from '../../components/chat_room';
import { Paper, IconButton, InputBase, Icon } from '@material-ui/core';
import { myFirebase, myFirestore } from '../../firebase';
import ChatUserList from './chatUserList';
import ChatPage from './ChatPage';
import _ from 'lodash';
import queryString from 'query-string'
import { history } from '../../utils/config/app_config';
// import { store } from "../../utils/config/app_config";
// import { updateFullScreenLoaderState } from "../../containers/full-page-loader/state/actions";
import Typography from '@material-ui/core/Typography';
import { Toolbar} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';


export default class Chat extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // currentChatRecieverUser: null,
      usersList: [],
      loading: false
    }
    this.userDetails = null
    window.chatComponent = this;
  }

  componentDidMount() {
    console.log('called did mount')
    console.log(this.props)
    if (!this.props.chatUserList) {
      if (this.props.location.state) {
        console.log('api called')
        this.userDetails = this.props.location.state.userDetails
        this.getRecentChats();
      }
    } else {
      this.userDetails = this.props.location.state.userDetails
      this.setState({ usersList: this.props.chatUserList })
    }

  }

  componentWillUnmount() {
    console.log('unmounted', this.props.location)
  }


  getUserDetailsfromMobile(user_id) {
    // document.getElementById("mytext").innerHTML = user_id;
    this.userDetails = {
      id: parseInt(user_id)
    }
    this.getRecentChats();
  }

  getUserList = async () => {

    const users = await myFirestore.collection('users').get();
    if (users.docs.length) {
      this.setState({ usersList: [...users.docs] });
    }
  }


  getRecentChats = async () => {
    if (this.userDetails) {
      this.props.updateFullScreenLoaderState(true)
      this.setState({ usersList: [], loading: true });
      const currentUserId = this.userDetails['id']
      const users1 = await myFirestore.collection("messages")
        .where("user1_id", "==", parseInt(currentUserId))
        .get()
      const users2 = await myFirestore.collection("messages")
        .where("user2_id", "==", parseInt(currentUserId))
        .get()

      const [usersSnapShotList1, usersSnapShotList2] = await Promise.all([
        users1,
        users2
      ]);

      const usersList1Array = usersSnapShotList1.docs;
      const usersList2Array = usersSnapShotList2.docs;
      const usersArray = _.orderBy(usersList1Array.concat(usersList2Array), _.isEqual);

      let recentChatusers = [];
      if (usersArray.length > 0) {
        usersArray.forEach(async (element, i) => {
          let sender = null;
          let receiver = null;
          const elemenData = element.data();
          if (elemenData.user1_id != currentUserId) {
            sender = elemenData.user2_id;
            receiver = elemenData.user1_id;
          }
          else {
            sender = elemenData.user1_id;
            receiver = elemenData.user2_id;
          }

          let tempUsers = await myFirestore.collection('users').doc(`${receiver}`).get()

          let unseenMessages = await myFirestore.collection('messages').doc(elemenData.groupChatId).collection(elemenData.groupChatId)
            .where('isSeen', '==', false).where('idTo', '==', sender).get();

          const [tempUsersPromise, unseenMessagesPromise] = await Promise.all([
            tempUsers,
            unseenMessages
          ]);

          if (tempUsersPromise.exists) {

            recentChatusers.push({
              id: tempUsersPromise.data().id,
              name: tempUsersPromise.data().name,
              photoUrl: tempUsersPromise.data().photoUrl,
              sellerName: tempUsersPromise.data().sellerName,
              sellerImage: tempUsersPromise.data().sellerImage,
              lastMessageText: elemenData.lastMessageText,
              unseenMessages: unseenMessagesPromise.docs.length,
              timestamp: elemenData.updated_at,
              isSeller: tempUsersPromise.data().id == elemenData.store_seller_id ? true : false,
            })
            this.setState({ usersList: [...recentChatusers] });
            this.props.storeChatUserList(this.state.usersList)

          }
          if (usersArray.length - 1 == i) {
            this.props.updateFullScreenLoaderState(false)
            this.setState({ loading: false });
          }

        })
      } else {
        this.props.updateFullScreenLoaderState(false)
        this.setState({ loading: false });

      }
    }

  }

  setCurrentChatRecieverUser(data) {
    console.log(data)
    let groupChatId = null
    if (this.userDetails['id'] >= data.id) {
      groupChatId = `_${this.userDetails['id']}_${data.id}_`
    } else {
      groupChatId = `_${data.id}_${this.userDetails['id']}_`
    }
    console.log(groupChatId)

    myFirestore.collection('users').doc(`${this.userDetails['id']}`).get().then(user => {
      myFirestore.collection('messages').doc(groupChatId).get().then((groupchat) => {
        console.log(groupchat.data().store_seller_id)
        const isSeller = this.userDetails['id'] == groupchat.data().store_seller_id ? true : false;
        if (user.exists) {
          let sellerInfo = {};
          let customerInfo = {}

          if (isSeller == false) {
            sellerInfo.store_name = data.sellerName
            sellerInfo.store_logo_url = data.sellerImage
            sellerInfo.user_name = data.name
            sellerInfo.user_logo_url = data.photoUrl

            customerInfo.name = user.data().name
            customerInfo.avatar = user.data().photoUrl
            customerInfo.store_name = user.data().sellerName
            customerInfo.store_logo_url = user.data().sellerImage
          } else {
            sellerInfo.store_name = user.data().sellerName
            sellerInfo.store_logo_url = user.data().sellerImage
            sellerInfo.user_name = user.data().name
            sellerInfo.user_logo_url = user.data().photoUrl

            customerInfo.name = data.name
            customerInfo.avatar = data.photoUrl
            customerInfo.store_name = data.sellerName
            customerInfo.store_logo_url = data.sellerImage
          }

          history.push({
            pathname: `/chat-with-user`,
            state: {
              isSeller: isSeller,
              user_id: isSeller == false ? this.userDetails['id'] : data.id,
              customerInfo: customerInfo,
              sellerInfo: sellerInfo,
              seller_id: isSeller == false ? data.id : this.userDetails['id']
            }
          })

        }
      })

    });

  }
  goBack=()=>{
    console.log('go back')
    if (window.TestAndroid) {
      window.TestAndroid.goBackToApa(true)
    }
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.goBackToApa) {
      window.webkit.messageHandlers.goBackToApa.postMessage(true);
    }
  }

  render() {

    // this.userDetails = this.props.userDetails ? this.props.userDetails.toJS() : null;
    console.log(this.state.usersList)
    console.log(this.userDetails)
    return (

      <>
        {/* <div className="search-near-store">
          <Paper>
            <IconButton disabled aria-label="menu">
              <Icon>search</Icon>
            </IconButton>
            <InputBase
              placeholder="Search Name"
            />
          </Paper>
        </div> */}
        <AppBar position="static" className="seller-order-tab">
              <Toolbar>
              <IconButton edge="start" aria-label="menu" onClick={() => this.goBack()}>
                <Icon>arrow_back</Icon>
              </IconButton>
              <Typography className="app-toolbar-header" variant="h6" style={{color:'#3e4152'}}>
                MY CHATS
            </Typography>
              </Toolbar>
              </AppBar>
          
        {
          this.userDetails && this.state.usersList.length > 0 && this.state.loading == false ?
          <div className="margint3">
            <ChatUserList  usersList={this.state.usersList}
              setCurrentChatRecieverUser={(data) => this.setCurrentChatRecieverUser(data)}
              userDetails={this.userDetails}
            /> </div>: null
        }
        {
          this.userDetails && this.state.usersList.length == 0 && this.state.loading == false ?
            <h2>No chats</h2>: null
        }

      </>
    )
  }
}
