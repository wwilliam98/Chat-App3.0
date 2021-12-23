import { useMoralis } from "react-moralis";
import TimeAgo from 'timeago-react';
import Avatar from "./Avatar";

function Message({ message }) {
    const { user } = useMoralis();
    const isUserMessage = message.get("ethAddress") === user.get("ethAddress");

    return (
        <div className={`flex items-end space-x-2 relative ${
            isUserMessage 
            ? "justify-end" 
            : "justify-start"
        }`}>

            {/* Show Avatar */}
            <div className={`relative h-8 w-8 ${
                isUserMessage && 'order-last ml-2'
            }`}>
                <Avatar username={message.get("username")}/>
            </div>

            {/* Show message */}
            <div className= {`flex space-x-4 p-3 rounded-lg ${
                isUserMessage 
                    ? "rounded-br-none bg-orange-300" 
                    : "rounded-bl-none bg-white"
                }`}
            >
                <p>{message.get("message")}</p>
            </div>

            {/* timestamp */}
            <TimeAgo 
                className={`text-[10px] italic text-gray-500 ${
                    isUserMessage ? 'order-first pr-1' : 'order-last pl-1'
                }`}
                datetime={message.createdAt}
            />

            {/* show name */}
            <p className={`absolute -bottom-5 text-xs ${
                isUserMessage ? "text-orange-300" : "text-white"
            }`}>
                {message.get("username")}
            </p>


        </div>
    )
}

export default Message
