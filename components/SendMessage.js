import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {
    const { user, Moralis } = useMoralis();
    const [ message, setMessage ] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend("Messages"); //create table for message in moralis
        const messages = new Messages(); //create new message

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress"),
        }).then((message) => {

        }, (error) => {
            console.log(error.message);
        });

        endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
        setMessage("");
    }

    return (
        <form className="flex fixed bottom-10 bg-black opacity-80 w-11/12 px-6 py-4 max-w-2xl shadow-xl rounded-full border-4 border-orange-200">
            {/* outline none removes the bluething when creating input */}
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pd-5"
                text="text"
                value = {message}
                onChange={e => setMessage(e.target.value)}
                placeholder= {`Type your message here ${user.getUsername()}`}
            />
            <button 
                type="submit" 
                onClick={sendMessage} 
                className="font-bold text-orange-500">Send
            </button>
        </form>
    )
}

export default SendMessage
