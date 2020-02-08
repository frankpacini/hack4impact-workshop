import React from "react";
import {View, Text, TextInput, Button} from "react-native";
import Mongo from "../mongo";

export default class Login extends React.Component {
    
    constructor(){
        super();
        this.state = {
            displayName: "",
            user: ""
        }
    }

    enterChatroom() {
        if (this.state.displayName == "") {
            alert("Please enter a display name");
            return;
        } 
        if(this.state.user != "") {
            var u = Mongo.get(this.state.user);
            if(u == null) {
                alert("Please enter a user in the database")
            } else {
                Console.log(u);
            }
        }
        this.props.navigation.navigate("Conversation", {displayName: this.state.displayName, user: this.state.user});
    }

    render() {
        return(
            <View>
                <Text> Welcome to WhatsAppLite </Text>
                <TextInput onChangeText={(text) => this.setState({displayName: text})} placeholder="Enter your display name"/>
                <TextInput onChangeText={(text) => this.setState({user: text})} placeholder="Enter a user for private messaging"/>
                <Button title="Enter" onPress={() => this.enterChatroom()}/>
            </View>
        )
    }
}