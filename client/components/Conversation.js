import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import Socket from "../socket";
import Mongo from "../../server/mongo";
var recip = null;

export default class Conversation extends React.Component {

    constructor(props) {
        super();
        this.state = {
            messages: []
        }
        name = props.navigation.state.params.displayName;
        recip = props.navigation.state.params.user;
        this.socket = new Socket(name);
        Mongo.insert(name, this.socket.id);
        console.log(name+ " " + this.socket.id + " should be connected")
        this.socket.socket.on("message", (message) => {
            const updatedMessages = [...this.state.messages, message];
            this.setState({messages: updatedMessages})
        })
    }

    sendMessage(message) {
        this.socket.sendMessage(message,recip[1]);
    }

    render() {
        return (
            <GiftedChat
            messages={this.state.messages}
            onSend={(message) => this.sendMessage(message[0].text)}
            inverted={false}
            />
        )
    }
}