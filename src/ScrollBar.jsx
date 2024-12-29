import React, { useState, useEffect } from 'react';

function ScrollBar() {
    const [data, setData] = useState(null);
    const [length, setLength] = useState(null);
    const [error, setError] = useState(null); // State for error handling
    const [planets, setPlanets] = useState([])
    const [percents, setPercents] = useState([])
    const [factions, setFactions] = useState([])
    const [players, setPlayers] = useState([])

    useEffect(() => {
        fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((json) => {
                //console.log(json[0])
                setLength(json);

                const planetsName = json.map((item) => item.name);
                setPlanets(planetsName)
                //console.log(planets)

                const compPercents = json.map((item) => item.percentage);
                setPercents(compPercents)
                //console.log(percents)

                const factionName = json.map((item) => item.faction);
                setFactions(factionName)
                //console.log(factions)

                const playerCount = json.map((item) => item.players);
                setPlayers(playerCount)
                //console.log(players)

                
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    return (
        <div className='planet-ticker'>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul aria-hidden='true'>
                    {planets.map((planet, index) => (
                        <li key={index}>
                            <span className='planet'> {planet}</span> |
                            <span className ='players'> {players[index]}</span> |
                            <span className ='faction'> {factions[index]}</span> |
                            <span className ='percent'> {percents[index]}%</span>
                        </li>
                    ))}
                </ul>
            )}
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ul aria-hidden='true'>
                    {planets.map((planet, index) => (
                        <li key={index}>
                        <span className='planet'> {planet}</span> |
                        <span className ='players'> {players[index]}</span> |
                        <span className ='faction'> {factions[index]}</span> |
                        <span className ='percent'> {percents[index]}%</span>
                    </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ScrollBar;