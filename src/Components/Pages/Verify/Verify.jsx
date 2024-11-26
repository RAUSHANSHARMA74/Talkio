import React, { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import "./Verify.css"

export default function Verify() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="verify min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-primary">
            {isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="loader"></div>
                    <p className="mt-4 w-full max-w-md text-center text-gray-700 dark:text-gray-300">
                        Please wait, we are verifying your account. This may take a moment.
                    </p>
                </div>
            ) : (
                <div className="flex flex-col items-center text-green-500">
                    <BsCheckCircle size={100} />
                    <p className="mt-4 w-full max-w-md text-center text-gray-700 dark:text-gray-300">
                        Congratulations! You have been successfully verified. You can now proceed to the login page.
                    </p>
                </div>
            )}
        </div>
    );
}
