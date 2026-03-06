import { useEffect, useState } from 'react';

const useDerivOAuth = () => {
    const [oauthUrl, setOauthUrl] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOauthUrl = async () => {
            try {
                // Replace with the actual API endpoint to get OAuth URL
                const response = await fetch('https://example.com/oauth');
                if (!response.ok) {
                    throw new Error('Failed to fetch OAuth URL');
                }
                const data = await response.json();
                setOauthUrl(data.url);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchOauthUrl();
    }, []);

    return { oauthUrl, error };
};

export default useDerivOAuth;