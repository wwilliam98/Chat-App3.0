// _rfce
import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {
    const {user} = useMoralis();
    
    return (
        // lock the header to the top of the screen
        <div className="text-orange-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-orange-700">
            <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
                {/* logo */}
                {/* hide for smaller device, and show inline-grid for large screen */}
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                        src="https://links.papareact.com/3pi"
                    />
                </div>

                <div className="col-span-4 text-left lg:text-center"> 
                    {/* Avatar */}
                    <div className="relative h-48 w-48 lg:mx-auto border-orange-500 border-8 rounded-full">
                        <Avatar logoutOnPress/>
                    </div>

                    {/* Welcome message */}
                    <h1 className="text-3xl">Welcome to my chat-app</h1>

                    {/* username */}
                        {/* truncate creates the ... if string is too long */}
                    <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

                    {/* change username */}
                    <ChangeUsername />
                    
                </div>
            </div>
        </div>
    );
}

export default Header
