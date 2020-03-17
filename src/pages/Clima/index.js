import React, { useState } from 'react';
import { FaSun } from 'react-icons/fa';

import { Container, Main } from './styles';

const api = {
  key: '112b30de8c5877e1d11cfc697e130bb9',
  baseURL: 'https://api.openweathermap.org/data/2.5/',
};

export default function Clima() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async e => {
    if (e.key === 'Enter') {
      await fetch(
        `${api.baseURL}weather?q=${query}&units=metric&APPID=${api.key}`
      )
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  };

  const dateBuilder = d => {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Mail',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const days = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado',
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <Container>
      <h1>
        <FaSun />
        Previsão do tempo
      </h1>
      <Main>
        <input
          type="text"
          placeholder="Cidade.."
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </Main>
      {typeof weather.main !== 'undefined' ? (
        <div>
          <div>
            <p>
              {weather.name}, {weather.sys.country}
            </p>
            <p>{dateBuilder(new Date())}</p>
            <p>{Math.round(weather.main.temp)}°c</p>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </Container>
  );
}
