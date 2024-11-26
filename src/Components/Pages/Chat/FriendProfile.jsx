import React from 'react';

export default function FriendProfile({ showProfile, profileFriend }) {
    return (
        <>
            {showProfile && (
                // <div className="w-1/4 bg-gradient-to-r from-[#1C2A38] to-[#4B6B9A] p-4 h-full rounded-lg transition-all duration-300">
                <div className="bg-gradient-to-r from-[#1C2A38] to-[#4B6B9A] p-4 h-full rounded-lg transition-all duration-300">
                    {profileFriend ? (
                        <>
                            <h2 className="font-bold text-lg text-white">{profileFriend.name}</h2>
                            <div className="w-24 h-24 rounded-full bg-gray-300 mb-4">
                                <img src="/images/profile_image.jpeg" alt="" className="rounded-full" />
                            </div>
                            <div className="text-center text-white">
                                <div className="font-bold text-lg">{profileFriend.name}</div>
                                <div className="text-green-300">Active Now</div>
                            </div>
                            <div className="mt-4 p-2 bg-muted rounded shadow">
                                <h3 className="font-bold text-md text-white">Details:</h3>
                                <p className="text-gray-300">{profileFriend.details}</p>
                            </div>
                        </>
                    ) : (
                        <div className="text-center text-white">
                            <p>Select a friend to see details</p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
}
