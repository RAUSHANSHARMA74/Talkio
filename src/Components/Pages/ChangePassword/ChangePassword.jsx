import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsEye, BsEyeSlash } from "react-icons/bs";

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="changepassword">
            <section className="bg-gradient-to-r from-[#001f3f] to-[#4B6584] min-h-screen flex items-center justify-center">
                <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-[98%] lg:w-[60%] bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-primary dark:border-secondary">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Change your password
                            </h1>

                            <form className="space-y-4 md:space-y-6" action="#">

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
                                        Confirm password
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

                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-accent"
                                >
                                    Reset password
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
