import React, { Component } from 'react'
// import moment from 'moment';


class ChatUserList extends Component {

    constructor(props) {
        super(props)
        this.currentUserId = parseInt(this.props.userDetails['id'])
        // this.currentUserName = this.props.userDetails['name']
        // this.currentUserImage = this.props.userDetails['photoUrl']


    }
    onUserItemClick(data) {

        this.props.setCurrentChatRecieverUser(data);
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
    checkDate(date) {
        const fullDate = new Date(parseInt(`${date}`));
        let dateStr;
        if (fullDate.getDate() == new Date().getDate()) {
            dateStr = this.formatAMPM(fullDate)
        } else {
            dateStr = `${fullDate.getDate()}/${fullDate.getMonth() + 1}/${fullDate.getFullYear()}`
        }
        return dateStr;
    }

    renderUsersList = () => {


        if (this.props.usersList.length > 0) {
            let viewUsersList = []
            this.props.usersList.forEach((item, index) => {

                if (item.id != this.currentUserId) {
                    viewUsersList.push(

                        <li key={index} className="chat-list-items d-flex align-center"
                            onClick={() => {
                                this.onUserItemClick(item)
                            }}
                        >
                            <div className="chat-profile">
                                <img alt="profile" src={item.isSeller == true ? item.sellerImage : item.photoUrl} />
                            </div>
                            <div className="chat-name-msg">
                                <div className="name-time d-flex align-center justfy-space-btw">
                                    <div className="chat-name">{item.isSeller == true ? item.sellerName : item.name}</div>
                                    {item.unseenMessages > 0 ?
                                        <div className="last-msg-time unread">{this.checkDate(item.timestamp)}</div>

                                        :
                                        <div className="last-msg text-ellipse">{this.checkDate(item.timestamp)}</div>
                                        // <div className="last-msg-time unread">{this.formatAMPM(new Date(parseInt(`${item.timestamp}`)))}</div>
                                    }

                                </div>
                                <div className="msg-count d-flex align-center justfy-space-btw">

                                    {item.unseenMessages > 0 ?
                                        (
                                            <>
                                                <div className="last-msg-time unread">{item.lastMessageText}</div>
                                                <div className="unread-msg">{item.unseenMessages}</div>
                                            </>
                                        )
                                        :
                                        <div className="last-msg text-ellipse">{item.lastMessageText}</div>
                                    }
                                </div>
                            </div>
                        </li>
                    )
                }
            })
            return viewUsersList
        } else {
            return null
        }
    }

    render() {
        return (

            // <div className="viewListUser">
            <ul className="chat-list">
                {this.renderUsersList()}
            </ul>
        )
    }

}
export default ChatUserList;




