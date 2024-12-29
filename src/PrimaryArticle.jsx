import React, { useState, useEffect } from 'react';

function PrimaryArticle() {
    const [overrideBrief, setOverrideBrief] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                // Assuming the response is an array and we want the first item's overrideBrief
                const brief = json[0]?.setting?.overrideBrief;
                if (brief) {
                    setOverrideBrief(brief);
                } else {
                    setError('Override Brief not found');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div>
            <img src="/src/images/Main-Article.png" width="100%"/>
            {error ? (
                <div>Error: {error}</div>
            ) : overrideBrief ? (
                <div className="article-body">
                    {overrideBrief}
                </div>
            ) : (
                'Loading...'
            )}
        </div>
    );
}

export default PrimaryArticle;