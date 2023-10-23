module.exports = {
  apps: [
    {
      name: 'solar-weather-logger',
      script: './src/index.js',
      env_dev: {
        NODE_ENV: 'dev',
        API_BASE_URL:
          'https://api.openweathermap.org/data/2.5/weather?lat=-28.297729&lon=-54.262758&units=metric',
        API_KEY: 'cfcae34cadfa35ff9f3655bcf95b5c65',
      },
      env_prd: {
        NODE_ENV: 'prd',
        API_BASE_URL:
          'https://api.openweathermap.org/data/2.5/weather?lat=-28.297729&lon=-54.262758&units=metric',
        API_KEY: '199b34ee26345ed457efe38b353a6883',
      },
    },
  ],
};
