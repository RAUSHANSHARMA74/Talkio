import React from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
        <div className="forgotpassword">
            <section className="bg-gradient-to-r from-[#001f3f] to-[#4B6584] min-h-screen flex items-center justify-center">
                <div className="flex flex-col w-full items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-[98%] lg:w-[60%] bg-white rounded-lg shadow dark:border sm:max-w-md xl:p-0 dark:bg-primary dark:border-secondary">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Forgot your password?
                            </h1>
                            <p className="font-light text-gray-500 dark:text-gray-400">
                                Don't fret! Just type in your email and we will send you a code to reset your password.
                            </p>
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
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="terms"
                                            aria-describedby="terms"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-secondary dark:bg-primary dark:border-secondary dark:focus:ring-secondary"
                                            required
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="text-gray-500 dark:text-gray-400">
                                            I accept the{" "}
                                            <a href="#" className="font-medium text-accent hover:underline dark:text-accent">
                                                Terms and Conditions
                                            </a>
                                        </label>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-secondary dark:hover:bg-accent"
                                >
                                    Reset password
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Remember your password?{" "}
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
