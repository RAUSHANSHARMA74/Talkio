import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="login">
            <section className="bg-gradient-to-r from-[#001f3f] to-[#4B6584] min-h-screen flex items-center justify-center">
                <div className="flex flex-col lg:flex-row w-full lg:w-10/12 items-center justify-between px-6 py-8 mx-auto md:h-screen lg:py-0">

                    {/* Left Image - Only visible on large screens */}
                    <div className="hidden lg:block lg:w-6/12 lg:mr-8">
                        <img src="/images/signin-image.webp" alt="Sign In" className="h-full w-full object-cover" />
                    </div>

                    {/* Sign-In Form */}
                    <div className="w-full lg:w-5/12 bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-primary dark:border-secondary">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign in to your Talkio account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-primary dark:border-secondary dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@talkio.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
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
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-secondary dark:bg-primary dark:border-secondary dark:focus:ring-secondary"
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <Link to="/forgot-password" className="text-sm font-medium text-accent hover:underline dark:text-accent">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-accent"
                                >
                                    Sign in
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don’t have an account yet?{' '}
                                    <Link to="/register" className="font-medium text-accent hover:underline dark:text-accent">
                                        Sign up
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
