import io from "./socket.io"

const apiUrl = "http://168.122.9.231:3050";
 
class Socket {

    socket = null;
    
    constructor(displayName) {
        this.socket = io(apiUrl);
        this.displayName = displayName;
    }

    sendMessage(message) {
        console.log("message: " + message)
        this.socket.emit("message", {username: this.displayName, message: message});
    }
    sendMessage(message, id) {
        console.log("id: " + id + " message: " + message)
        io.to(`${id}`).emit("message", {username: this.displayName, message: message});
    }


}
export default Socket;