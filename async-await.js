function api() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("weather data");
        resolve(200);
      }, 4000);
    });
  }
  
  async function getWeatherData() {
    await api();
    await api();
  }
  
  getWeatherData();