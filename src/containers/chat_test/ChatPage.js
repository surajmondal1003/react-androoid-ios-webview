import React, { Component } from 'react'
import { Paper, IconButton, InputBase, Icon, TextField } from '@material-ui/core';
import { myFirebase, myFirestore, myStorage } from '../../firebase';
// import moment from 'moment'
import ChatList from './ChatList';
import { uploadToS3 } from '../../utils/miscellaneous/awsLib';
import queryString from 'query-string'
import { history } from '../../utils/config/app_config';


class ChatPage extends Component {

    constructor(props) {
        super(props)
        window.chatDetailsComponent = this
        this.state = {
            inputValue: '',
            receiverTyping: false,
            messagesList: [],
            typingTimeout: 0
        }
        this.store_seller_id = null
        this.isSeller = null
        this.currentUserId = null
        this.currentUserName = null
        this.currentUserImage = null
        this.currentUserSellerName = null
        this.currentUserSellerImage = null

        this.currentChatRecieverUser = {}
        console.log(this.props.location.state)
        if (this.props.location.state) {
            this.store_seller_id = parseInt(this.props.location.state.seller_id)
            if (this.props.location.state.isSeller == true) {
                this.isSeller = true
                this.currentUserId = parseInt(this.props.location.state.seller_id)
                this.currentUserName = this.props.location.state.sellerInfo.user_name
                this.currentUserImage = this.props.location.state.sellerInfo.user_logo_url
                this.currentUserSellerName = this.props.location.state.sellerInfo.store_name
                this.currentUserSellerImage = this.props.location.state.sellerInfo.store_logo_url

                this.currentChatRecieverUser = {}
                this.currentChatRecieverUser.name = this.props.location.state.customerInfo.name
                this.currentChatRecieverUser.id = parseInt(this.props.location.state.user_id)
                this.currentChatRecieverUser.photoUrl = this.props.location.state.customerInfo.avatar
                this.currentChatRecieverUser.sellerName = this.props.location.state.customerInfo.store_name
                this.currentChatRecieverUser.sellerImage = this.props.location.state.customerInfo.store_logo_url

            } else {
                this.isSeller = false
                this.currentUserId = parseInt(this.props.location.state.user_id)
                this.currentUserName = this.props.location.state.customerInfo.name
                this.currentUserImage = this.props.location.state.customerInfo.avatar
                this.currentUserSellerName = this.props.location.state.customerInfo.store_name
                this.currentUserSellerImage = this.props.location.state.customerInfo.store_logo_url

                this.currentChatRecieverUser = {}
                this.currentChatRecieverUser.name = this.props.location.state.sellerInfo.user_name
                this.currentChatRecieverUser.id = parseInt(this.props.location.state.seller_id)
                this.currentChatRecieverUser.photoUrl = this.props.location.state.sellerInfo.user_logo_url
                this.currentChatRecieverUser.sellerName = this.props.location.state.sellerInfo.store_name
                this.currentChatRecieverUser.sellerImage = this.props.location.state.sellerInfo.store_logo_url
            }

        }

        this.groupChatId = null
        this.removeListener = null
        this.currentPhotoFile = null
        this.messagesList = []
        this.user1Exists = false;
        this.user2Exists = false;
        this.types = {
            text: 'text',
            photo: 'photo',
            sticker: 'sticker',
        }
    }

    componentDidMount() {

        if (this.currentUserId && this.currentChatRecieverUser) {
            console.log(this.props.location.state)
            this.getChatListHistory();
            this.checkUserExists();
            this.markMessagesAsSeen();
            this.checkIsTyping();
            this.scrollToBottom();

            console.log(this.currentChatRecieverUser)
            console.log(this.currentUserId)
            console.log(this.currentUserName)
            console.log(this.currentUserImage)
        }


    }


    componentDidUpdate() {
        this.scrollToBottom();
    }

    componentWillUnmount() {
        if (this.removeListener) {
            this.removeListener()
        }
    }

    getChatDetailsfromMobile(isSeller, user_id, customerInfo, sellerInfo, seller_id) {
        this.store_seller_id = parseInt(seller_id)
        if (isSeller == true) {
            this.isSeller = true
            this.currentUserId = parseInt(seller_id)
            this.currentUserName = sellerInfo.user_name
            this.currentUserImage = sellerInfo.user_logo_url
            this.currentUserSellerName = sellerInfo.store_name
            this.currentUserSellerImage = sellerInfo.store_logo_url

            this.currentChatRecieverUser = {}
            this.currentChatRecieverUser.name = customerInfo.name
            this.currentChatRecieverUser.id = parseInt(user_id)
            this.currentChatRecieverUser.photoUrl = customerInfo.avatar
            this.currentChatRecieverUser.sellerName = customerInfo.store_name
            this.currentChatRecieverUser.sellerImage = customerInfo.store_logo_url
        } else {
            this.isSeller = false
            this.currentUserId = parseInt(user_id)
            this.currentUserName = customerInfo.name
            this.currentUserImage = customerInfo.avatar
            this.currentUserSellerName = customerInfo.store_name
            this.currentUserSellerImage = customerInfo.store_logo_url

            this.currentChatRecieverUser = {}
            this.currentChatRecieverUser.name = sellerInfo.user_name
            this.currentChatRecieverUser.id = parseInt(seller_id)
            this.currentChatRecieverUser.photoUrl = sellerInfo.user_logo_url
            this.currentChatRecieverUser.sellerName = sellerInfo.store_name
            this.currentChatRecieverUser.sellerImage = sellerInfo.store_logo_url
        }
        this.getChatListHistory();
        this.checkUserExists();
        this.markMessagesAsSeen();
        this.checkIsTyping();
        this.forceUpdate()
        console.log(this.currentUserId, this.currentChatRecieverUser)

    }


    checkUserExists = async () => {

        const user1 = await myFirestore.collection('users').doc(`${this.currentUserId}`).get()
        const user2 = await myFirestore.collection('users').doc(`${this.currentChatRecieverUser.id}`).get()

        if (user1.exists) {
            this.user1Exists = true;
        }
        if (user2.exists) {
            this.user2Exists = true;
        }
        console.log(this.user1Exists, this.user2Exists)
    }
    getChatListHistory = () => {

        if (this.removeListener) {
            this.removeListener()
        }
        this.messagesList.length = 0
        if (this.currentUserId >= this.currentChatRecieverUser.id) {
            this.groupChatId = `_${this.currentUserId}_${this.currentChatRecieverUser.id}_`
        } else {
            this.groupChatId = `_${this.currentChatRecieverUser.id}_${this.currentUserId}_`
        }

        // Get history and listen new data added
        this.removeListener = myFirestore
            .collection('messages')
            .doc(this.groupChatId)
            .collection(this.groupChatId)
            .onSnapshot(
                snapshot => {
                    snapshot.docChanges().forEach(change => {
                        if (change.type === 'added') {
                            this.messagesList.push(change.doc.data())
                            this.setState({
                                messagesList: this.messagesList
                            })
                            this.markMessagesAsSeen()
                        }
                        if (change.type === 'modified') {
                            console.log(change.type, change.doc.data())
                            this.messagesList.map((element, i) => {
                                if (element.timestamp == change.doc.data().timestamp) {
                                    this.messagesList[i] = element = change.doc.data();
                                }
                            })
                            this.setState({
                                messagesList: this.messagesList
                            })
                        }
                    })

                },
                err => {

                }
            )
    }


    checkIsTyping = () => {
        myFirestore
            .collection('messages')
            .where('groupChatId', '==', this.groupChatId)
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if (change.type == 'modified') {
                        let data = change.doc.data();
                        if (data.user1_id == this.currentUserId && data.user2Typing == true) {
                            this.setState({ receiverTyping: true })
                        }
                        else if (data.user2_id == this.currentUserId && data.user1Typing == true) {
                            this.setState({ receiverTyping: true })
                        }
                        else {
                            this.setState({ receiverTyping: false })
                        }
                    }
                })
            })
    }


    showTyping = (event) => {
        const self = this;
        this.setState({ inputValue: event.target.value });
        this.setTypingStatus(true);

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }
        this.setState({
            typingTimeout: setTimeout(function () {
                self.setTypingStatus(false)
            }, 3000)
        });

    }

    setTypingStatus = (value) => {

        myFirestore.collection('messages').doc(this.groupChatId).get().then((doc) => {
            if (doc.exists) {
                const user = doc.data();
                if (user.user1_id == this.currentUserId) {
                    myFirestore
                        .collection('messages')
                        .doc(this.groupChatId)
                        .update({
                            user1Typing: value
                        })
                        .then(() => {
                        })
                        .catch(err => {
                        })
                } else {
                    myFirestore
                        .collection('messages')
                        .doc(this.groupChatId)
                        .update({
                            user2Typing: value
                        })
                        .then(() => {
                        })
                        .catch(err => {
                        })
                }

            }
        });



    }

    onKeyboardPress = event => {
        if (event.key === 'Enter') {
            event.preventDefault()
            this.onSendMessage(this.state.inputValue, this.types.text);
        }
    }

    createUser = (content, type, imageUrl = '') => {

        if (this.user1Exists == false && this.user2Exists == true) {
            myFirestore.collection('users').doc(`${this.currentUserId}`).set({
                id: this.currentUserId,
                name: this.currentUserName?this.currentUserName:'',
                photoUrl: this.currentUserImage?this.currentUserImage:'',
                sellerName: this.currentUserSellerName?this.currentUserSellerName:'',
                sellerImage: this.currentUserSellerImage?this.currentUserSellerImage:'',
            }).then(data => {
                this.onSendMessage(content, type, imageUrl)
                this.user1Exists = true;
            });
        }
        else if (this.user2Exists == false && this.user1Exists == true) {
            myFirestore.collection('users').doc(`${this.currentChatRecieverUser.id}`).set({
                id: this.currentChatRecieverUser.id,
                name: this.currentChatRecieverUser.name?this.currentChatRecieverUser.name:'',
                photoUrl: this.currentChatRecieverUser.photoUrl?this.currentChatRecieverUser.photoUrl:'',
                sellerName: this.currentChatRecieverUser.sellerName?this.currentChatRecieverUser.sellerName:'',
                sellerImage: this.currentChatRecieverUser.sellerImage?this.currentChatRecieverUser.sellerImage:'',
            }).then(data => {
                this.onSendMessage(content, type, imageUrl)
                this.user2Exists = true;

            });
        }
        else if (this.user2Exists == false && this.user1Exists == false) {
            myFirestore.collection('users').doc(`${this.currentChatRecieverUser.id}`).set({
                id: this.currentChatRecieverUser.id,
                name: this.currentChatRecieverUser.name?this.currentChatRecieverUser.name:'',
                photoUrl: this.currentChatRecieverUser.photoUrl?this.currentChatRecieverUser.photoUrl:'',
                sellerName: this.currentChatRecieverUser.sellerName?this.currentChatRecieverUser.sellerName:'',
                sellerImage: this.currentChatRecieverUser.sellerImage?this.currentChatRecieverUser.sellerImage:'',
            }).then(data => {
                myFirestore.collection('users').doc(`${this.currentUserId}`).set({
                    id: this.currentUserId,
                    name: this.currentUserName?this.currentUserName:'',
                    photoUrl: this.currentUserImage?this.currentUserImage:'',
                    sellerName: this.currentUserSellerName?this.currentUserSellerName:'',
                    sellerImage: this.currentUserSellerImage?this.currentUserSellerImage:'',
                }).then(data => {
                    this.onSendMessage(content, type, imageUrl)
                    this.user2Exists = true;
                    this.user2Exists = true;

                });

            });
        }
        else if (this.user2Exists == true && this.user1Exists == true) {
            this.onSendMessage(content, type, imageUrl)
        }

    }

    onSendMessage = (content, type, imageUrl = '') => {
        if (content.trim() === '' && type == this.types.text) {
            return
        }
        const timestamp = Date.now().toString()
        let itemMessage;
        if (type == this.types.photo) {
            const file_type = imageUrl.split('.').pop();
            const file_name = imageUrl.split('/').pop();
            itemMessage = {
                idFrom: this.currentUserId,
                idTo: this.currentChatRecieverUser.id,
                timestamp: timestamp,
                isSeen: false,
                content: {
                    text: content.trim(),
                    type: type,
                    files: [
                        {
                            url: imageUrl,
                            file_type: file_type,
                            file_name: file_name
                        },
                    ]
                },
            }
        } else if (type == this.types.text) {
            itemMessage = {
                idFrom: this.currentUserId,
                idTo: this.currentChatRecieverUser.id,
                timestamp: timestamp,
                isSeen: false,
                content: {
                    text: content.trim(),
                    type: type,
                    files: []
                },
            }
        }


        const docCollectionMessage = {
            groupChatId: this.groupChatId,
            user1_id: this.currentUserId,
            user2_id: this.currentChatRecieverUser.id,
            updated_at: timestamp,
            user1Typing: false,
            user2Typing: false,
            store_seller_id: this.store_seller_id,
            lastMessageText: type == this.types.text ? content : 'Attachment'
        }

        myFirestore
            .collection('messages')
            .doc(this.groupChatId)
            .set(docCollectionMessage)
            .then(() => {
                myFirestore
                    .collection('messages')
                    .doc(this.groupChatId)
                    .collection(this.groupChatId)
                    .doc(timestamp)
                    .set(itemMessage)
                    .then(() => {
                        this.setState({ inputValue: '' })
                    })
                    .catch(err => {

                    })
            })
            .catch(err => {

            })


    }


    onChoosePhoto = event => {
        if (event.target.files && event.target.files[0]) {
            this.setState({ isLoading: true })
            this.currentPhotoFile = event.target.files[0]
            const prefixFiletype = event.target.files[0].type.toString()
            if (prefixFiletype.indexOf('image/') === 0) {
                this.uploadPhoto()
            } else {
                console.log('error')
            }
        }
    }


    uploadPhoto = async () => {
        if (this.currentPhotoFile) {
            const downloadURL = await uploadToS3(this.currentPhotoFile, this.currentPhotoFile.name);
            console.log(downloadURL)
            this.createUser('', this.types.photo, downloadURL)

        }
    }

    markMessagesAsSeen = async () => {
        let unseenMessages = await myFirestore.collection('messages').doc(this.groupChatId).collection(this.groupChatId)
            .where('isSeen', '==', false).where('idTo', '==', this.currentUserId).get();

        if (unseenMessages.docs.length > 0) {
            unseenMessages.docs.forEach(element => {
                myFirestore.collection('messages').doc(this.groupChatId).collection(this.groupChatId)
                    .doc(element.data().timestamp).update({
                        isSeen: true
                    }).then(() => {

                    })
                    .catch(err => {
                    })
            })
        }
    }



    scrollToBottom = async () => {
        if (this.messagesEnd) {
            this.messagesEnd.scrollIntoView({})
        }
    }

    render() {
        console.log(this.currentUserId, this.currentChatRecieverUser)
        return (
            <>
                {this.currentUserId && this.currentChatRecieverUser ?
                    <>
                        <div className="chat-details">
                            {this.currentChatRecieverUser ? (
                                <>
                                    <ChatList messagesList={this.state.messagesList}
                                        currentChatRecieverUser={this.currentChatRecieverUser}
                                        currentUserId={this.currentUserId}
                                        receiverTyping={this.state.receiverTyping}
                                        isSeller={this.isSeller}
                                    />
                                    <div
                                        ref={el => {
                                            this.messagesEnd = el
                                        }}
                                    />
                                </>
                            ) : null}
                        </div>
                        <div className="chat-type">
                            <Paper component="form">
                                <IconButton onClick={() => this.refInput.click()}>
                                    <Icon >add</Icon>
                                </IconButton>
                                <input
                                    ref={el => {
                                        this.refInput = el
                                    }}
                                    accept="image/*"
                                    type="file"
                                    className="viewInputGallery"
                                    onChange={this.onChoosePhoto}
                                />
                                <TextField
                                    multiline
                                    fullWidth
                                    type="text"
                                    placeholder="Type a message"
                                    value={this.state.inputValue}
                                    onChange={event => this.showTyping(event)}
                                    onKeyPress={this.onKeyboardPress}
                                />

                                <button type="button" className="chat-send-btn" onClick={() => this.createUser(this.state.inputValue, this.types.text)}>
                                    <Icon>send</Icon>
                                </button>
                            </Paper>
                        </div>
                    </>
                    : null
                }

            </>
        )
    }
}

export default ChatPage;