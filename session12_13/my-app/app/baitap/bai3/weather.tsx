// pages/weather.tsx
import React from 'react';
import axios from 'axios';

type WeatherProps = {
  temperature: number;
  weatherCondition: string;
};

const WeatherPage: React.FC<WeatherProps> = ({ temperature, weatherCondition }) => {
  return (
    <div>
      <h1>Weather Information</h1>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {weatherCondition}</p>
    </div>
  );
};

export const getServerSideProps = async () => {
  const latitude = 35.6895; // Example: latitude for Tokyo
  const longitude = 139.6917; // Example: longitude for Tokyo

  const response = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );

  const { temperature, weathercode } = response.data.current_weather;

  // You may need to map weathercode to a condition string if the API provides codes
  const weatherConditions: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    // Add more mappings based on the API documentation
  };

  const weatherCondition = weatherConditions[weathercode] || 'Unknown';

  return {
    props: {
      temperature,
      weatherCondition,
    },
  };
};

export default WeatherPage;
