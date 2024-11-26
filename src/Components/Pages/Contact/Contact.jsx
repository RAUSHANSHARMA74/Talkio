import React from "react";

export default function Contact() {
    return (
        <section className="relative min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/contact-background.jpg)' }}>
            <div className="absolute inset-0 bg-primary opacity-70"></div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8 mb-12 md:mb-0">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-accent mb-4">Contact Us</h2>
                    <p className="text-lg text-muted max-w-2xl">
                        We value your feedback and inquiries. Please reach out to us for any questions, comments, or concerns. Our team is here to assist you and will respond promptly.
                    </p>

                </div>

                {/* Contact Information & Form */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:space-x-12 w-full max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="mb-6 flex items-start">
                            <img src="/images/contact-home.png" alt="home" className="w-12 h-12 object-contain" />
                            <div className="ml-4 text-accent">
                                <h4 className="text-xl font-bold">Address</h4>
                                <p className="text-muted">Gopi Krishna Nagar, Bodhachak, in front of Hanuman Mandir, Parsa, Patna</p>
                            </div>
                        </div>

                        <div className="mb-6 flex items-start">
                            <img src="/images/contact-call.png" alt="call" className="w-12 h-12 object-contain" />
                            <div className="ml-4 text-accent">
                                <h4 className="text-xl font-bold">Phone</h4>
                                <p className="text-muted">7462872872</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <img src="/images/contact-email.png" alt="email" className="w-12 h-12 object-contain" />
                            <div className="ml-4 text-accent">
                                <h4 className="text-xl font-bold">Email</h4>
                                <p className="text-muted">raushansharma7462@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 bg-primary p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-primary">Send Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Message
                                </label>
                                <textarea
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Type your message..."
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-muted"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
