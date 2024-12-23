import React, { useState, useEffect } from 'react';

function Info() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null); // State for error handling

    useEffect(() => {
        fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                setData(json[0].setting.overrideBrief);
                console.log(json[0].setting.overrideBrief)
                const flags = json[0].setting;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div>
            {error ? (
                <div>Error: {error}</div>
            ) : data ? (
                <pre>{JSON.parse(JSON.stringify(data))}</pre>
            ) : (
                'Loading...'
            )}
        </div>
    );
}

export default Info;