// import moment from 'moment'
import React, { Component } from 'react'
import _ from 'lodash';
import { IconButton, Icon } from '@material-ui/core'
import { history } from '../../utils/config/app_config';

class ChatList extends Component {
    constructor(props) {
        super(props)
        this.currentUserId = parseInt(this.props.currentUserId)
        // this.currentUserImage = localStorage.getItem('photoUrl')
        this.currentChatRecieverUser = this.props.currentChatRecieverUser
        this.isSeller = this.props.isSeller
        this.types = {
            text: 'text',
            photo: 'photo',
            sticker: 'sticker',
        }
    }

    formatGroupDate(date) {
        const fullDate = new Date(parseInt(`${date}`));

        return fullDate.toDateString()
    }
    renderListMessage = () => {

        if (this.props.messagesList.length > 0) {
            const groupByMessages = _.groupBy(this.props.messagesList, function (item) {
                const date = new Date(parseInt(`${item.timestamp}`)).getDate()
                return date
            });
            console.log(groupByMessages);
            let viewListMessage = []

            Object.keys(groupByMessages).forEach((groupitem) => {
                viewListMessage.push(
                    <div className="chat-time" key={this.formatGroupDate(groupByMessages[groupitem][0]['timestamp'])}>{this.formatGroupDate(groupByMessages[groupitem][0]['timestamp'])}</div>
                )
                groupByMessages[groupitem].forEach((item) => {
                    if (item.idFrom == this.currentUserId) {

                        // Item right (my message)
                        if (item.content.type === this.types.text) {
                            viewListMessage.push(

                                <div className="send-chat" key={item.timestamp}>


                                    <div className="chat-text">
                                        {item.content.text}
                                        <span className="chat-time-tick">
                                            <span className="send-time">{this.formatAMPM(new Date(parseInt(`${item.timestamp}`)))}</span>
                                            {item.isSeen == true ? <span className="material-icons seen">done_all</span> : <span className="material-icons">done</span>}
                                        </span>
                                    </div>

                                </div>
                            )
                        }
                        else if (item.content.type === this.types.photo) {
                            viewListMessage.push(

                                <div className="send-chat" key={item.timestamp}>

                                    <div className="chat-text chat-img">
                                        <img alt="img" src={item.content.files[0]['url']} />
                                        <span className="chat-time-tick">
                                            <span className="send-time">{this.formatAMPM(new Date(parseInt(`${item.timestamp}`)))}</span>
                                            {item.isSeen == true ? <span className="material-icons seen">done_all</span> : <span className="material-icons">done</span>}
                                            {/* <div className="not-sent">Not sent. Tap to try again.</div> */}
                                        </span>
                                    </div>

                                </div>
                            )
                        }

                    } else {
                        // Item left (peer message)
                        if (item.content.type === this.types.text) {
                            viewListMessage.push(


                                <div className="received-chat" key={item.timestamp}>
                                    <div className="chat-text">
                                        {item.content.text}
                                        <span className="chat-time-tick">
                                            <span className="send-time">{this.formatAMPM(new Date(parseInt(`${item.timestamp}`)))}</span>
                                        </span>
                                    </div>
                                </div>


                            )
                        }

                        else if (item.content.type === this.types.photo) {
                            viewListMessage.push(
                                <div className="received-chat" key={item.timestamp}>
                                    <div className="chat-text chat-img">
                                        <img alt="img" src={item.content.files[0]['url']} />
                                        <span className="chat-time-tick">
                                            <span className="send-time">{this.formatAMPM(new Date(parseInt(`${item.timestamp}`)))}</span>
                                        </span>
                                    </div>
                                </div>
                            )
                        }


                    }
                })

            })
            return viewListMessage
        } else {
            return (
                <div>
                    {/* <span>Say hi to new friend</span> */}

                </div>
            )
        }
    }


    formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    render() {
        return (
            <>

                <div className="chat-profile-header d-flex align-center">
                    <div className="back-chat">
                        <IconButton onClick={() => history.push({
                            pathname: `/chat`, state: {
                                userDetails: {
                                    id: this.currentUserId
                                }
                            }
                        })}>
                            <Icon>arrow_back</Icon>
                        </IconButton>
                    </div>
                    <div className="info-chat">
                        <div className="chat-profile-img">
                            <img alt="profile" src={this.isSeller != true ?
                                this.currentChatRecieverUser.sellerImage : this.currentChatRecieverUser.photoUrl} />
                        </div>
                        <p>{
                            this.isSeller != true ?
                                this.currentChatRecieverUser.sellerName : this.currentChatRecieverUser.name}</p>
                        {this.props.receiverTyping == true ?
                            <span>typing..</span>
                            : null
                        }
                    </div>
                </div>
                {this.renderListMessage()}

            </>
        );
    }


}

export default ChatList;