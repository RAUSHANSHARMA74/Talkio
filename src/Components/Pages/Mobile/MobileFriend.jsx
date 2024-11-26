import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MobileFriend({ friends }) {
    const navigate = useNavigate();

    const handleChatClick = (friend) => {
        navigate('/friendChat', { state: { friend } });
    };

    const handleProfileClick = (event, friend) => {
        event.stopPropagation(); // Prevent event from also triggering chat click
        navigate('/friendProfile', { state: { friend } });
    };

    return (
        <div className="w-full h-full bg-primary p-4 flex flex-col">
            <input
                type="text"
                placeholder="Search"
                aria-label="Search friends"
                className="w-full p-2 mb-4 bg-primary text-gray-300 border-b border-muted focus:outline-none focus:border-accent"
            />
            <div className="overflow-y-auto flex-1 space-y-2 max-h-[calc(100vh-150px)]">
                {friends.map((friend) => (
                    <div
                        key={friend.id} // Use a unique identifier if available
                        className="flex items-center p-4 bg-muted rounded-md hover:bg-accent hover:text-black cursor-pointer transition-all duration-150"
                        onClick={() => handleChatClick(friend)}
                    >
                        <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                            <img src={friend.image || '/images/profile_image.jpeg'} alt={`${friend.name}'s profile`} className="rounded-full object-cover h-full w-full" />
                        </div>
                        <div className="ml-3 flex-1">
                            <div className="font-bold text-gray-100">{friend.name}</div>
                            <div className="text-sm text-gray-300">{friend.message}</div>
                        </div>
                        <div
                            onClick={(event) => handleProfileClick(event, friend)}
                            className="text-xs text-gray-500 cursor-pointer"
                        >
                            Profile
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
