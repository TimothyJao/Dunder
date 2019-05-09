import React from "react";
import MessageFormContainer from "./messageFormContainer";

class ChatRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages:[]};
        this.bottom = React.createRef();
        this.render = this.render.bind(this)
        this.createSocket = this.createSocket.bind(this)
    }

    createSocket(){
        this.server = App.cable.subscriptions.create(
            {
                channel: "ChatChannel",
                parent_id: this.props.parentId,
                sender_id: this.props.senderId
            },
            {
                received: data => {
                    switch (data.type) {
                        case "message":
                            let temp = this.state.messages
                            temp.push(data);
                            this.setState({messages: temp})
                            break;
                        case "messages":
                            this.setState({ messages: data.messages });
                            break;
                    }
                },
                speak: function (data) {
                    return this.perform("speak", data);
                },
                load: function () {
                    return this.perform("load") 
                }
            }
        );
    }

    componentDidMount() {
        this.createSocket();
        this.props.fetchMessages(this.props.parentId)
    }

    componentDidUpdate(prevProps) {
        if (!this.bottom.current) return null;
        this.bottom.current.scrollIntoView();
        if (prevProps.parentId != this.props.parentId) {
            this.messageList = [];
            this.setState({messages:[]})
            this.props.fetchMessages(this.props.parentId)
            App.cable.subscriptions.remove(this.server);
            this.createSocket();
        }
    }

    componentWillUnmount(){
        if (App.server) {
            App.cable.subscriptions.remove(App.server);
        }
        this.messageList = [];
        this.setState({ messages: [] })
    }

    render(){
        this.messageList = [];
        this.messageList = this.state.messages.map(function(data) {
            return (
                <li key={data.message.id} className="chat-message">
                    <hr className="message-divider" width="100%"></hr>
                    <p className="username">{data.user.username}</p>
                    <p className="message">{data.message.message}</p>
                    <div ref={this.bottom} />
                </li>
            );
        }, this);
        
        let oldMessageList = [];

        if (Object.values(this.props.messages).length != 0){
            oldMessageList = this.props.messages.map(data =>{
                return (
                    <li key={data.message.id} className="chat-message">
                        <hr className="message-divider" width="100%"></hr>
                        <p className="username">{data.user.username}</p>
                        <p className="message">{data.message.message}</p>
                        <div ref={this.bottom} />
                    </li>
                )
            })
        }

        this.messageList = oldMessageList.concat(this.messageList, [<br/>]);

        return(
            <div className="chatroom-container">               
                <div>ChatRoom</div>
                <div className="message-list">{this.messageList}</div>
                <MessageFormContainer />
            </div>
        );
    }
}

export default ChatRoom;