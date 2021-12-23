import { useRef } from "react";
import {ByMoralis, useMoralis, useMoralisQuery} from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 30;

function Messages() {
    const { user } = useMoralis();
    const endOfMessageRef = useRef(null);
    const { data, loading, error } = useMoralisQuery(
        'Messages',
        (query) => 
            query
                .ascending('createdAt')
                .greaterThan(
                    'createdAt', 
                    new Date(Date.now() - 1000 * 60 * MINS_DURATION)
                ),
        [],
        {
            live: true,
        }
    );

    return (
        <div className="pb-56">
            <div>
                <ByMoralis
                    variant = "dark" 
                    style={{marginLeft: "auto", marginRight: "auto"}}
                />
            </div>

            {/* render each messages */}
            <div className="space-y-10 p-4">
                {data.map(message => (
                    <Message key={message.id} message = {message}/>
                ))}
            </div>

            {/* send message input */}
            <div className="flex justify-center">
                <SendMessage endOfMessageRef={endOfMessageRef}/>
            </div>

            {/* you are up to date message*/}
            <div ref={endOfMessageRef} className="text-center text-grey-500 mt-5">
                <p>you are up to date {user.getUsername()}</p>
            </div>
        </div>
    )
}

export default Messages
