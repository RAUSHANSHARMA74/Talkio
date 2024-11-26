import React, { useRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiPhone, FiVideo } from "react-icons/fi";

export default function MobileFriendChat() {
    const location = useLocation();
    const navigate = useNavigate();
    const { friend } = location.state || {};
    const messageContainerRef = useRef(null);
    const [chatAreaHeight, setChatAreaHeight] = useState('calc(100vh - 120px)');
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    const navbarHeight = 60;
    const inputBarHeight = 50;

    const messages = [
        { from: 'Christino Morillo', content: 'When are you coming?', time: '05:40pm' },
        { from: 'Me', content: 'Hi Dear, I’ll be there by 7:30pm, btw where are u?', time: '06:30pm' },
        { from: 'Christino Morillo', content: 'DesiBoy Pub', time: '06:32pm' },
        { from: 'Me', content: 'Coming...', time: '06:50pm' },
        { from: 'Christino Morillo', content: 'Bring some snacks!', time: '06:55pm' },
        { from: 'Me', content: 'Sure!', time: '07:00pm' },
        { from: 'Christino Morillo', content: 'See you soon.', time: '07:10pm' },
        { from: 'Me', content: 'On my way.', time: '07:15pm' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                navigate('/chat');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [navigate]);

    useEffect(() => {
        const adjustChatAreaHeight = () => {
            const viewportHeight = window.visualViewport?.height || window.innerHeight;
            setChatAreaHeight(`calc(${viewportHeight}px - ${navbarHeight + inputBarHeight}px)`);
        };

        const handleViewportResize = () => {
            adjustChatAreaHeight();
            setIsKeyboardOpen(window.visualViewport?.height < window.innerHeight); // Detect keyboard open state
        };

        window.visualViewport?.addEventListener('resize', handleViewportResize);
        adjustChatAreaHeight();

        return () => window.visualViewport?.removeEventListener('resize', handleViewportResize);
    }, []);

    useEffect(() => {
        messageContainerRef.current?.scrollTo(0, messageContainerRef.current.scrollHeight);
    }, [messages, isKeyboardOpen]);

    const handleVideoCall = () => {
        navigate('/videoCall');
    };

    return (
        <div className="flex flex-col h-screen w-full bg-primary">
            {/* Fixed Header */}
            <div className="p-3 flex items-center justify-between bg-gradient-to-r from-secondary to-accent text-black fixed top-0 w-full z-10">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                        <img src="/images/profile_image.jpeg" alt="" className="rounded-full w-full h-full object-cover" />
                    </div>
                    <h2 className="text-lg font-bold">
                        {friend ? friend.name : 'Select a friend'}
                    </h2>
                </div>
                <div className="flex items-center space-x-8">
                    <FiVideo
                        className="text-black w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-200"
                        onClick={handleVideoCall} // Redirect to /videoCall
                    />
                    <FiPhone className="text-black w-6 h-6 cursor-pointer transform hover:scale-110 transition duration-200" />
                </div>
            </div>

            {/* Chat Messages */}
            <div
                ref={messageContainerRef}
                className="overflow-y-auto mt-[60px] p-2"
                style={{ height: chatAreaHeight }}
            >
                {messages.map((message, index) => (
                    <div key={index} className={`p-2 ${message.from === 'Me' ? 'text-right' : 'text-left'}`}>
                        <div className={`inline-block p-2 rounded-lg ${message.from === 'Me' ? 'bg-accent text-white' : 'bg-muted text-white'}`}>
                            {message.content}
                        </div>
                        <div className="text-xs text-gray-400">{message.time}</div>
                    </div>
                ))}
            </div>

            {/* Input at Bottom */}
            <div
                className="p-2 bg-primary border-t border-muted fixed bottom-0 w-full z-50"
                style={{ bottom: isKeyboardOpen ? '50px' : '0px' }} // Adjust position above keyboard
            >
                <input
                    type="text"
                    placeholder="Type here..."
                    className="w-full p-2 rounded bg-primary text-gray-300 border border-muted focus:outline-none focus:border-accent"
                    onFocus={() => setIsKeyboardOpen(true)} // Detect keyboard open
                    onBlur={() => setIsKeyboardOpen(false)} // Detect keyboard close
                />
            </div>
        </div>
    );
}
