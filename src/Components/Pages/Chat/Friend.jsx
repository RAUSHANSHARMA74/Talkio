import React from 'react';

export default function Friend({ friends, handleCardClick, handleProfileClick }) {
    return (
        // <div className="w-1/4 bg-primary border-r border-muted h-full p-5 rounded-lg flex flex-col">
        <div className="bg-primary border-r border-muted h-full p-5 rounded-lg flex flex-col">
            <input
                type="text"
                placeholder="Search"
                className="w-full p-2 mb-4 bg-primary text-gray-300 border-b border-muted focus:outline-none focus:border-accent"
            />
            <div className="overflow-y-auto flex-1 space-y-3 max-h-[calc(100vh-150px)]">
                {friends.map((friend, index) => (
                    <div
                        key={index}
                        className="flex items-center p-4 bg-muted rounded-md hover:bg-accent hover:text-black cursor-pointer transition-all duration-150"
                        onClick={() => handleCardClick(friend)}
                    >
                        <div
                            className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden"
                            onClick={(e) => { e.stopPropagation(); handleProfileClick(friend); }}
                        >
                            <img src="/images/profile_image.jpeg" alt="" className="rounded-full object-cover h-full w-full" />
                        </div>
                        <div className="ml-4">
                            <div className="font-bold text-gray-100">{friend.name}</div>
                            <div className="text-sm text-gray-300">{friend.message}</div>
                        </div>
                        <div className="ml-auto text-xs text-gray-500">{friend.time}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

