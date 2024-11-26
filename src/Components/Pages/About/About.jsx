import React from 'react';

export default function About() {
    const team = [
        { name: 'John Doe', role: 'CEO', bio: 'Leader with a passion for technology and innovation.', image: 'https://via.placeholder.com/150' },
        { name: 'Jane Smith', role: 'CTO', bio: 'Tech guru building the future of communication.', image: 'https://via.placeholder.com/150' },
        { name: 'Emily Johnson', role: 'Designer', bio: 'Creative mind behind the app’s user experience.', image: 'https://via.placeholder.com/150' },
    ];

    return (
        <div className="about">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#1C2A38] to-[#4B6B9A] text-white py-24 mb-10 sm:mb-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold mb-4">Connect Seamlessly with Our App</h1>
                    <p className="mb-6 text-lg">Your all-in-one platform for chat, video, and audio calls.</p>
                    <a href="#features" className="bg-white text-[#1C2A38] py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition duration-200">
                        Learn More
                    </a>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-white mb-10 sm:mb-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
                    <div className="bg-gray-100 rounded-lg p-8">
                        <p className="text-gray-600 mb-4">
                            We strive to provide a seamless communication experience for individuals and teams
                            through innovative technology and user-friendly design. Our goal is to connect people
                            from all corners of the world.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 bg-gray-50 mb-10 sm:mb-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Core Values</h2>
                    <div className="bg-gray-100 rounded-lg p-8">
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Innovation: Continuously improving and evolving our platform.</li>
                            <li>User-Centric: Putting our users at the heart of everything we do.</li>
                            <li>Integrity: Maintaining transparency and honesty in our services.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white mb-10 sm:mb-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Features</h2>
                    <div className="bg-gray-100 rounded-lg p-8">
                        <p className="text-gray-600 mb-4">
                            Our app offers a variety of features to enhance your communication experience:
                        </p>
                        <ul className="list-disc list-inside text-gray-600">
                            <li>Real-time chat and messaging</li>
                            <li>High-quality video and audio calls</li>
                            <li>File sharing and collaboration tools</li>
                            <li>Customizable user profiles</li>
                            <li>Secure and encrypted communication</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white mb-10 sm:mb-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {team.map((member, idx) => (
                            <div key={idx} className="bg-gray-100 rounded-lg p-6">
                                <img className="w-24 h-24 mx-auto rounded-full mb-4" src={member.image} alt={`${member.name}'s photo`} />
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-800 text-white py-6 my-10">
                <div className="container mx-auto px-6 text-center">
                    <p>© 2024 Your App. All rights reserved.</p>
                    <p>
                        <a href="#" className="underline text-gray-400">Privacy Policy</a> |
                        <a href="#" className="underline text-gray-400">Terms of Service</a>
                    </p>
                </div>
            </footer>
        </div>
    );
}
