import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Navbar from '../Pages/Navbar/Navbar';
import Nopage from '../Pages/Nopage/Nopage';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import SignIn from '../Pages/SignIn/SignIn';
import SignUp from '../Pages/SignUp/SignUp';
import ChangePassword from '../Pages/ChangePassword/ChangePassword';
import Verify from '../Pages/Verify/Verify';
import Chat from '../Pages/Chat/Chat';
import ForgotPassword from '../Pages/ForgotPassword/ForgotPassword';
import MobileFriendChat from '../Pages/Mobile/MobileFriendChat';
import MobileFriendProfile from '../Pages/Mobile/MobileFriendProfile';
import VideoCall from '../Pages/VideoCall/VideoCall';


export default function Routers() {
    return (
        <div className="routers">
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<SignUp />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/friendChat" element={<MobileFriendChat />} />
                <Route path="/friendProfile" element={<MobileFriendProfile />} />
                <Route path="/videoCall" element={<VideoCall />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="*" element={<Nopage />} />
            </Routes>
        </div>
    )
}
