import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [visibleElements, setVisibleElements] = useState([]);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !visibleElements.includes(entry.target.id)) {
                    setVisibleElements((prev) => [...prev, entry.target.id]);
                    observerRef.current.unobserve(entry.target);
                }
            });
        });

        const elements = document.querySelectorAll('.slide-in');
        elements.forEach((el) => observerRef.current.observe(el));

        return () => observerRef.current && observerRef.current.disconnect();
    }, [visibleElements]);


    const testimonials = [
        {
            name: 'User A',
            image: '/images/boy-image.jpeg',
            feedback: "This chat app has transformed the way I communicate with my family and friends. Highly recommend!",
            rating: 5
        },
        {
            name: 'User B',
            image: '/images/girl-image.jpeg',
            feedback: "A fantastic tool that keeps me connected. The interface is easy to use!",
            rating: 4
        },
        {
            name: 'User C',
            image: '/images/boy-image.jpeg',
            feedback: "An amazing experience! I can't imagine going back to how I used to chat.",
            rating: 5
        },
        {
            name: 'User C',
            image: '/images/boy-image.jpeg',
            feedback: "An amazing experience! I can't imagine going back to how I used to chat.",
            rating: 5
        },
        {
            name: 'User C',
            image: '/images/boy-image.jpeg',
            feedback: "An amazing experience! I can't imagine going back to how I used to chat.",
            rating: 5
        },
    ];

    const features = [
        {
            title: 'Video Calls',
            image: '/images/video-call-logo.png',
            description: 'Connect face-to-face with high-quality video calls. Perfect for meetings or catching up with friends.',
            additionalInfo: 'Supports HD quality and screen sharing options.'
        },
        {
            title: 'Voice Calls',
            image: '/images/voice-call-logo.png',
            description: 'Enjoy crystal-clear voice calls with your friends and family anytime, anywhere.',
            additionalInfo: 'Reliable connection with minimal data usage.'
        },
        {
            title: 'Instant Messaging',
            image: '/images/message-logo.png',
            description: 'Send messages instantly and keep the conversation going with our user-friendly chat interface.',
            additionalInfo: 'Real-time messaging with read receipts and media sharing.'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 flex flex-col items-center overflow-hidden">
            {/* Header Section */}
            <div className="container mx-auto px-4 py-16 lg:py-32 flex flex-col-reverse lg:flex-row items-center justify-center">
                <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-bold leading-tight">CHAT APP SERVICE</h1>
                    <p className="text-gray-600 max-w-md mx-auto lg:mx-0 my-6">
                        Stay connected through seamless chat, video, and voice calls. Enjoy high-quality interactions with features designed to enhance your communication.
                    </p>
                    <Link to="/about">
                        <button className="bg-pink-400 text-white px-6 py-2 rounded-lg hover:bg-pink-500 transition">Read More</button>
                    </Link>
                </div>
                <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">
                    <img
                        src="/images/home-header.png"
                        alt="Chat App"
                        className={`w-96 lg:w-[900px] ${visibleElements.includes('header-image') ? 'animate-slide-in-right' : ''} slide-in`}
                        id="header-image"
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Additional Design Sections */}
            <div className="container mx-auto px-4 py-16 lg:py-32">
                {/* Section 1 */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
                    <div className="lg:w-1/2 space-y-4 lg:pr-8 text-center lg:text-left">
                        <h2 className="text-3xl font-bold">Video Calling</h2>
                        <p className="text-gray-600">
                            Experience high-quality video calling with friends and family. Our platform provides a seamless connection that makes you feel closer.
                        </p>
                    </div>
                    <div
                        className={`lg:w-1/2 flex justify-center ${visibleElements.includes('video-call-image') ? 'animate-slide-in-right' : ''} slide-in`}
                        id="video-call-image"
                    >
                        <img src="/images/video-call-feature.png" alt="Video Call Feature" className="w-96 lg:w-[600px] max-w-full h-auto" loading="lazy" />
                    </div>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between mb-16">
                    <div className="lg:w-1/2 space-y-4 lg:pl-8 text-center lg:text-right">
                        <h2 className="text-3xl font-bold">Voice Calling</h2>
                        <p className="text-gray-600">
                            Enjoy crystal-clear voice calls with our dedicated voice infrastructure, ensuring no dropped calls or interruptions.
                        </p>
                    </div>
                    <div
                        className={`lg:w-1/2 flex justify-center ${visibleElements.includes('voice-call-image') ? 'animate-slide-in-left' : ''} slide-in`}
                        id="voice-call-image"
                    >
                        <img src="/images/voice-call-feature.png" alt="Voice Call Feature" className="w-96 lg:w-[600px] max-w-full h-auto" loading="lazy" />
                    </div>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
                    <div className="lg:w-1/2 space-y-4 lg:pr-8 text-center lg:text-left">
                        <h2 className="text-3xl font-bold">Instant Messaging</h2>
                        <p className="text-gray-600">
                            Chat instantly with your friends and family. Our messaging service is fast, reliable, and easy to use.
                        </p>
                    </div>
                    <div
                        className={`lg:w-1/2 flex justify-center ${visibleElements.includes('chat-feature-image') ? 'animate-slide-in-right' : ''} slide-in`}
                        id="chat-feature-image"
                    >
                        <img src="/images/chat-feature.webp" alt="Chat Feature" className="w-96 lg:w-[600px] max-w-full h-auto" loading="lazy" />
                    </div>
                </div>
            </div>

            {/* Additional Features Section */}
            <div className="container mx-auto px-4 py-16 lg:py-32">
                <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                            <img src={feature.image} alt={feature.title} className="w-16 h-16 mb-4" loading="lazy" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 mb-4">{feature.description}</p>
                            <p className="text-gray-500 text-sm">{feature.additionalInfo}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="container mx-auto px-4 py-16 lg:py-32">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
                <div className="overflow-x-auto">
                    <div className="flex space-x-4 w-[1100px]">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 min-w-[350px]">
                                <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4" loading="lazy" />
                                <p className="text-gray-600 text-center">{testimonial.feedback}</p>
                                <p className="text-right text-gray-500 mt-4">- {testimonial.name}</p>
                                <p className="text-yellow-500 text-center mt-2">
                                    {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
