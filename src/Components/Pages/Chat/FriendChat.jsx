import React from 'react';
import { FiPhone, FiVideo } from "react-icons/fi";

export default function FriendChat({ selectedFriend, messages, messageContainerRef, handleVideoCallClick }) {
    return (
        // <div className="flex flex-col lg:min-w-1/4 lg:max-w-full flex-1 h-full bg-primary rounded-lg border border-muted transition-all duration-300">
        <div className="flex flex-col h-full bg-primary rounded-lg border border-muted transition-all duration-300">
            <div className="p-4 flex flex-col h-full">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-secondary to-accent text-black rounded-lg mb-4">
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gray-300">
                            <img src="/images/profile_image.jpeg" alt="" className="rounded-full" />
                        </div>
                        <h2 className="text-xl font-bold">
                            {selectedFriend ? selectedFriend.name : 'Select a friend'}
                        </h2>
                    </div>
                    <div className="flex items-center space-x-8">
                        <FiVideo
                            className="text-black w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-200"
                            onClick={handleVideoCallClick} // Trigger video call when clicked
                        />
                        <FiPhone className="text-black w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-200" onClick={handleVideoCallClick} />
                    </div>
                </div>

                <div ref={messageContainerRef} className="overflow-y-auto flex-1 max-h-[calc(100vh-250px)] mb-2">
                    {messages.map((message, index) => (
                        <div key={index} className={`p-2 ${message.from === 'Me' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-2 rounded-lg ${message.from === 'Me' ? 'bg-accent text-white' : 'bg-muted text-white'}`}>
                                {message.content}
                            </div>
                            <div className="text-xs text-gray-400">{message.time}</div>
                        </div>
                    ))}
                </div>

                <div className="mt-auto">
                    <input
                        type="text"
                        placeholder="Type here..."
                        className="w-full p-2 rounded bg-primary text-gray-300 border border-muted focus:outline-none focus:border-accent"
                    />
                </div>
            </div>
        </div>
    );
}
