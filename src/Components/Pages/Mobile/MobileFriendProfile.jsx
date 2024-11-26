import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function MobileFriendProfile() {
    const location = useLocation();
    const navigate = useNavigate();
    const { friend } = location.state || {};

    return (
        <div className="w-full h-full fixed top-0 left-0 z-50 bg-gradient-to-r from-[#1C2A38] to-[#4B6B9A] p-6 flex flex-col items-center text-white">
            <button
                onClick={() => navigate(-1)}
                className="self-end text-white text-2xl font-bold mb-4"
            >
                &times;
            </button>

            <div className="w-28 h-28 rounded-full bg-gray-300 overflow-hidden mb-4">
                <img src="/images/profile_image.jpeg" alt="" className="rounded-full w-full h-full object-cover" />
            </div>
            <h2 className="text-2xl font-bold">{friend?.name || 'Friend Profile'}</h2>
            <div className="text-green-300 mb-6">Active Now</div>

            <div className="bg-muted w-full p-4 rounded-lg shadow-lg">
                <h3 className="font-bold text-md">Details:</h3>
                <p className="text-gray-300 mt-2">{friend?.details || 'No details available'}</p>
            </div>
        </div>
    );
}
