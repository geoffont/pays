import React from 'react';

const Card = ({country}) => {
    return (
      <li>
        <img src={country.flags.svg} alt={'drapeau'} />
        <div className='infos'>
            <h2>{country.translations.fra.common}</h2>
            <h4>{country.capital}</h4>
            <p>pop.{country.population.toLocaleString()}</p>
        </div>
      </li>
    );
};

export default Card;