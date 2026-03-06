import React from 'react';

const AuthCallback: React.FC = () => {
    // Handle the OAuth callback
    React.useEffect(() => {
        const handleOAuth = () => {
            // Logic to handle OAuth response
            // Get tokens from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const token = urlParams.get('token');

            if (token) {
                // Save the token or perform necessary authentication
                localStorage.setItem('authToken', token);
                // Redirect or perform other actions
                window.location.replace('/'); // Redirect to the homepage
            }
        };

        handleOAuth();
    }, []);

    return <div>Processing...</div>;
};

export default AuthCallback;