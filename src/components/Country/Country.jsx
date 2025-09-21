import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  // console.log(country.area.area);
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // basic system
    //    if(visited){
    //     setVisited(false);
    //    }
    //    else{
    //     setVisited(true);
    //    }

    // second system
    // setVisited(visited ? false : true);

    // third system
    setVisited(!visited);
    handleVisitedCountries(country);
    handleVisitedFlag()
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>name: {country.name.common}</h3>
      <p>population: {country.population.population}</p>
      {/* <p>currencies: {country.currencies.currencies}</p> */}
      <p>capital: {country.capital.capital}</p>
      <p>region: {country.region.region}</p>
      <p>
        area: {country.area.area}{" "}
        {country.area.area > 300000 ? "big country" : "small country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "visited" : "not visited"}
      </button>
      <button onClick={ () => {handleVisited(country.flags.flags.png);}}>
        add visited flag
      </button>
    </div>
  );
};

export default Country;