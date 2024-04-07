import React, { useEffect, useState } from 'react';

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("https://dummyapi.online/api/pokemon")
      .then(data => data.json())
      .then(response => setPokemon(response))
      .catch((error) => console.error("Error fetching data", error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {pokemon.map((pkmn, index) => (
          
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4"> 
            <div className="card" style={{ width: '100%' }}> 
              <img className="card-img-top" src={pkmn.image_url} alt={pkmn.name} />
              <div className="card-body">
                <h5 className="card-title">{pkmn.name}</h5>
                <p className="card-text">Evolution: {pkmn.evolutions?.join(', ')}</p>
                <p className="card-text">Hitpoints: {pkmn.hitpoints}</p>
                <p className="card-text">Location: {pkmn.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemon;
