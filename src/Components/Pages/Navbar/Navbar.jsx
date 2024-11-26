import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from "react-icons/ai";

export default function Navbar() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    // Function to enter full-screen mode
    const enterFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
        setIsFullScreen(true);
    };

    // Function to exit full-screen mode
    const exitFullScreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
        setIsFullScreen(false);
    };

    return (
        <nav className="bg-gradient-to-r from-[#0B1522] to-[#3B4B5E] text-white p-2 lg:p-4 shadow-lg lg:fixed lg:top-0 lg:left-0 lg:w-full z-40">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center fixed top-0 left-0 w-full p-2 bg-primary shadow-lg lg:relative lg:w-auto lg:p-0 lg:bg-transparent lg:shadow-none"
                    style={{ zIndex: 10 }}
                >
                    <img src="/images/logo.png" alt="Logo" className="h-8 w-auto mr-2" />

                    {/* Fullscreen Toggle for Small Screens */}
                    <div className="ml-auto lg:hidden"> {/* Show only on small screens */}
                        {isFullScreen ? (
                            <AiOutlineFullscreenExit onClick={exitFullScreen} className="text-white cursor-pointer h-6 w-6" />
                        ) : (
                            <AiOutlineFullscreen onClick={enterFullScreen} className="text-white cursor-pointer h-6 w-6" />
                        )}
                    </div>
                </Link>

                {/* Links for larger screens */}
                <div className="hidden lg:flex space-x-8 items-center">
                    <Link to="/" className="hover:text-accent">Home</Link>
                    <Link to="/about" className="hover:text-accent">About</Link>
                    <Link to="/chat" className="hover:text-accent">Chat</Link>
                    <Link to="/contact" className="hover:text-accent">Contact</Link>

                    <div className="flex items-center space-x-2">
                        <Link to="/login" className="hover:text-accent">Login</Link>
                        <span>/</span>
                        <Link to="/register" className="hover:text-accent">Register</Link>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation for Mobile View */}
            <div className="fixed bottom-0 left-0 right-0 bg-primary lg:hidden z-40 flex justify-around items-center p-2">
                <Link to="/" className="flex flex-col items-center">
                    <img src="/images/home.png" alt="Home" className="h-8 w-8" />
                </Link>
                <Link to="/chat" className="flex flex-col items-center">
                    <img src="/images/chat.png" alt="Chat" className="h-8 w-8" />
                </Link>
                <Link to="/about" className="flex flex-col items-center">
                    <img src="/images/about.png" alt="about" className="h-8 w-8" />
                </Link>
                <Link to="/login" className="flex flex-col items-center">
                    <img src="/images/login.png" alt="Login" className="h-8 w-8" />
                </Link>
            </div>
        </nav>
    );
}
