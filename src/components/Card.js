import React from 'react';

const Card = ({country}) => {
    const getLanguages = () => {
        if (!country.languages) return 'N/A';
        return Object.values(country.languages).join(', ');
    };

    const getCurrencies = () => {
        if (!country.currencies) return 'N/A';
        return Object.values(country.currencies)
            .map(curr => `${curr.name} (${curr.symbol || ''})`)
            .join(', ');
    };

    const getArea = () => {
        if (!country.area) return 'N/A';
        return country.area.toLocaleString() + ' km²';
    };

    const getNativeName = () => {
        if (country.name?.nativeName) {
            const nativeNames = Object.values(country.name.nativeName);
            return nativeNames[0]?.official || country.name.official;
        }
        return country.name?.official || '';
    };

    return (
      <li className="country-card">
        <div className="card-header">
            <img src={country.flags?.svg || country.flags?.png} alt={`Drapeau de ${country.translations?.fra?.common || country.name?.common}`} className="flag-image" />
            <div className="country-title">
                <h2>{country.translations?.fra?.common || country.name?.common}</h2>
                <p className="country-native-name">{getNativeName()}</p>
            </div>
        </div>

        <div className="card-body">
            <div className="info-row">
                <span className="info-label">Capitale</span>
                <span className="info-value">{country.capital?.[0] || 'N/A'}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Région</span>
                <span className="info-value">{country.region}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Sous-région</span>
                <span className="info-value">{country.subregion || 'N/A'}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Population</span>
                <span className="info-value">{country.population?.toLocaleString() || 'N/A'}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Superficie</span>
                <span className="info-value">{getArea()}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Langues</span>
                <span className="info-value">{getLanguages()}</span>
            </div>

            <div className="info-row">
                <span className="info-label">Monnaies</span>
                <span className="info-value">{getCurrencies()}</span>
            </div>

            {country.timezones && country.timezones.length > 0 && (
                <div className="info-row">
                    <span className="info-label">Fuseaux horaires</span>
                    <span className="info-value">{country.timezones[0]}</span>
                </div>
            )}

            <div className="info-row">
                <span className="info-label">Code</span>
                <span className="info-value">{country.cca3 || country.cca2}</span>
            </div>

            {country.continents && country.continents.length > 0 && (
                <div className="info-row">
                    <span className="info-label">Continent</span>
                    <span className="info-value">{country.continents.join(', ')}</span>
                </div>
            )}
        </div>
      </li>
    );
};

export default Card;