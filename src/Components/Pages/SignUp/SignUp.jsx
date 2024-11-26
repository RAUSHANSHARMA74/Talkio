import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="register">
            <section className="bg-gradient-to-r from-[#001f3f] to-[#4B6584] min-h-screen flex items-center justify-center">
                <div className="flex flex-col lg:flex-row w-full lg:w-10/12 items-center justify-between px-6 py-8 mx-auto md:h-screen lg:py-0">

                    {/* Left side image - Only visible on large screens */}
                    <div className="hidden lg:block lg:w-6/12 lg:mr-8">
                        <img src="/images/signin-image.webp" alt="Sign Up" className="h-full w-full object-cover" />
                    </div>

                    {/* Right side form */}
                    <div className="w-full lg:w-5/12 bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-primary dark:border-secondary">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>

                            {/* Third-party login buttons */}
                            <div className="flex flex-col space-y-4">
                                <button className="w-full flex items-center justify-center space-x-2 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <img src="/images/google.png" alt="Google Icon" className="w-5 h-5" />
                                    <span>Login with Google</span>
                                </button>
                                <button className="w-full flex items-center justify-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                    <img src="/images/facebook.png" alt="Facebook Icon" className="w-5 h-5" />
                                    <span>Login with Facebook</span>
                                </button>
                            </div>

                            {/* Separator Line */}
                            <hr className="my-4" />

                            <form className="space-y-4 md:space-y-6" action="#">
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

                                {/* Password Field */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <BsEye className="text-accent" /> : <BsEyeSlash className="text-accent" />}
                                        </div>
                                    </div>
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="confirm-password"
                                            id="confirm-password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        >
                                            {showConfirmPassword ? <BsEye className="text-accent" /> : <BsEyeSlash className="text-accent" />}
                                        </div>
                                    </div>
                                </div>

                                {/* Sign Up Button */}
                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-accent"
                                >
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account?{' '}
                                    <Link to="/login" className="font-medium text-accent hover:underline dark:text-accent">
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
