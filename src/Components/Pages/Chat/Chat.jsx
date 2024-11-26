// import React, { useEffect, useState, useRef } from 'react';
// import "../../../index.css";
// import Friend from './Friend';
// import FriendChat from './FriendChat';
// import FriendProfile from './FriendProfile';
// import MobileFriend from '../Mobile/MobileFriend';
// import VideoCall from '../VideoCall/VideoCall';

// export default function Chat() {
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [profileFriend, setProfileFriend] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     const [friends, setFriends] = useState([]);
//     const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Track if it's mobile
//     const [showVideoCall, setShowVideoCall] = useState(false); // New state to manage Video Call UI
//     const messageContainerRef = useRef(null);

//     useEffect(() => {
//         // Simulated fetch of friends data
//         const simulatedFetch = () => new Promise(resolve => setTimeout(() => resolve([
//             { name: 'Christino Morillo', message: 'When are you coming?', time: '05:40pm', details: 'Loves hiking and outdoor activities.' },
//             { name: 'John Smith', message: 'I paid last month contribution...', time: '03:00pm', details: 'Avid traveler and food enthusiast.' },
//             { name: 'Christino Mo', message: 'How are you doing Christino?', time: '11:00pm', details: 'Tech geek and movie buff.' },
//             { name: 'Genevieve', message: 'What about last night had fun at Beach?', time: '05:40pm', details: 'Loves beach volleyball and sunbathing.' }
//         ]), 1000));

//         simulatedFetch().then(data => setFriends(data));

//         // Handle window resize events
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const handleProfileClick = (friend) => {
//         if (profileFriend?.name === friend.name) {
//             setShowProfile(!showProfile);
//         } else {
//             setProfileFriend(friend);
//             setShowProfile(true);
//         }
//     };

//     const handleCardClick = (friend) => {
//         setSelectedFriend(friend);
//         setTimeout(() => {
//             if (messageContainerRef.current) {
//                 messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
//             }
//         }, 0);
//     };

//     const handleVideoCallClick = () => {
//         setShowVideoCall(true); // Toggle Video Call UI on
//     };

//     const messages = [
//         { from: 'Christino Morillo', content: 'When are you coming?', time: '05:40pm' },
//         { from: 'Me', content: 'Hi Dear, I’ll be there by 7:30pm, btw where are u?', time: '06:30pm' },
//         { from: 'Christino Morillo', content: 'DesiBoy Pub', time: '06:32pm' },
//         { from: 'Me', content: 'Coming...', time: '06:50pm' },
//         { from: 'Christino Morillo', content: 'Bring some snacks!', time: '06:55pm' },
//         { from: 'Me', content: 'Sure!', time: '07:00pm' },
//         { from: 'Christino Morillo', content: 'See you soon.', time: '07:10pm' },
//         { from: 'Me', content: 'On my way.', time: '07:15pm' },
//     ];

//     return (
//         <div className="flex gap-5 h-[90vh] mx-auto mt-7 lg:mt-20 w-full lg:w-10/12">
//             {isMobile ? (
//                 <MobileFriend
//                     friends={friends}
//                     handleCardClick={handleCardClick}
//                     handleProfileClick={handleProfileClick}
//                 />
//             ) : (
//                 <>
//                     <Friend
//                         friends={friends}
//                         handleCardClick={handleCardClick}
//                         handleProfileClick={handleProfileClick}
//                     />
//                     <FriendChat
//                         selectedFriend={selectedFriend}
//                         messages={messages}
//                         messageContainerRef={messageContainerRef}
//                         handleVideoCallClick={handleVideoCallClick} // Pass the video call handler
//                         className="hidden md:flex"
//                     />
//                     <FriendProfile
//                         showProfile={showProfile}
//                         profileFriend={profileFriend}
//                         className="hidden md:flex"
//                     />
//                     {showVideoCall && (
//                         <VideoCall className="hidden md:flex" /> // Conditionally render VideoCallUI
//                     )}
//                 </>
//             )}
//         </div>
//     );
// }


import React, { useEffect, useState, useRef } from 'react';
import "../../../index.css";
import Friend from './Friend';
import FriendChat from './FriendChat';
import FriendProfile from './FriendProfile';
import MobileFriend from '../Mobile/MobileFriend';
import VideoCall from '../VideoCall/VideoCall';

export default function Chat() {
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [profileFriend, setProfileFriend] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [friends, setFriends] = useState([]);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [showVideoCall, setShowVideoCall] = useState(false);
    const messageContainerRef = useRef(null);

    useEffect(() => {
        const simulatedFetch = () => new Promise(resolve => setTimeout(() => resolve([
            { name: 'Christino Morillo', message: 'When are you coming?', time: '05:40pm', details: 'Loves hiking and outdoor activities.' },
            { name: 'John Smith', message: 'I paid last month contribution...', time: '03:00pm', details: 'Avid traveler and food enthusiast.' },
            { name: 'Christino Mo', message: 'How are you doing Christino?', time: '11:00pm', details: 'Tech geek and movie buff.' },
            { name: 'Genevieve', message: 'What about last night had fun at Beach?', time: '05:40pm', details: 'Loves beach volleyball and sunbathing.' }
        ]), 1000));

        simulatedFetch().then(data => setFriends(data));

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleProfileClick = (friend) => {
        if (profileFriend?.name === friend.name) {
            setShowProfile(!showProfile);
        } else {
            setProfileFriend(friend);
            setShowProfile(true);
        }
    };

    const handleCardClick = (friend) => {
        setSelectedFriend(friend);
        setTimeout(() => {
            if (messageContainerRef.current) {
                messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
            }
        }, 0);
    };

    const handleVideoCallClick = () => {
        setShowVideoCall(true);
    };

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

    // Set dynamic width classes based on conditions
    const friendWidth = "flex-[1_0_25%]";
    const chatWidth = showProfile && showVideoCall ? "flex-[1_0_25%]"
        : showProfile ? "flex-[2_0_50%]"
            : showVideoCall ? "flex-[2_0_50%]"
                : "flex-[3_0_75%]";
    const profileWidth = showProfile ? "flex-[1_0_25%]" : "hidden";
    const videoWidth = showVideoCall ? "flex-[1_0_25%]" : "hidden";

    return (
        <div className="flex gap-3 h-[90vh] mx-auto mt-7 lg:mt-20 w-full lg:w-10/12">
            {isMobile ? (
                <MobileFriend
                    friends={friends}
                    handleCardClick={handleCardClick}
                    handleProfileClick={handleProfileClick}
                />
            ) : (
                <>
                    <div className={`${friendWidth}`}>
                        <Friend
                            friends={friends}
                            handleCardClick={handleCardClick}
                            handleProfileClick={handleProfileClick}
                        />
                    </div>
                    <div className={`${chatWidth}`}>
                        <FriendChat
                            selectedFriend={selectedFriend}
                            messages={messages}
                            messageContainerRef={messageContainerRef}
                            handleVideoCallClick={handleVideoCallClick}
                        />
                    </div>
                    <div className={`${profileWidth}`}>
                        <FriendProfile
                            showProfile={showProfile}
                            profileFriend={profileFriend}
                        />
                    </div>
                    <div className={`${videoWidth}`}>
                        <VideoCall />
                    </div>
                </>
            )}
        </div>
    );
}
