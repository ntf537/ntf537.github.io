/**
 * Самовызывающаяся функция, которая инициирует загрузку данных о погоде и курсе валют.
 * 
 * @function
 * @returns {void}
 */
 (function () {
    fetchWeatherData();
    fetchRateData();
  })();