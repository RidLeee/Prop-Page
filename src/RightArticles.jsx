import React, { useState, useEffect } from 'react';

function LeftArticleOne() {
    const [error, setError] = useState(null); // State for error handling
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://helldiverstrainingmanual.com/api/v1/war/news?from=26906891')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {

                //console.log(json[0].message)
                const newsArticle = json.map((item) => 
                    item.message.replace(/<\/?[^>]+>/g, '') // Remove HTML-like tags
                  );
                  
                  setNews(newsArticle);
                  console.log(newsArticle);
                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div className="rightarticles">
            {news[9]}
            <hr className="articlesplit" />
            {news[8]}
            <hr className="articlesplit" />
            {news[7]}
            <hr className="articlesplit" />
            {news[6]}
            <hr className="articlesplit" />
            {news[5]}
            <hr className="articlesplit" />
            {news[4]}
            <hr className="articlesplit" />
            {news[3]}
        </div>
    );
}

export default LeftArticleOne;