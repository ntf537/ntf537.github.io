/**
 * Асинхронно запрашивает и отображает погодные данные для заданных координат.
 *
 * Выполняет HTTP-запрос к API OpenWeatherMap для получения текущей погоды по координатам (широта: 53.55, долгота: 27.33).
 * После успешного получения ответа преобразует его в JSON и передаёт объект данных в функцию {@link renderWeatherData} для отображения на странице.
 * В случае ошибки при запросе или обработке данных выводит сообщение об ошибке в консоль.
 *
 * @async
 * @function
 * @returns {Promise<void>} Промис, который завершается после получения и отображения погодных данных или обработки ошибки.
 *
 * @example
 * // Вызов функции для загрузки и отображения погоды:
 * fetchWeatherData();
 */
async function fetchWeatherData() {
    const weatherUrl =
      "https://api.openweathermap.org/data/2.5/weather?lat=53.55&lon=27.33&appid=0a7d636a97a3858fc7eeb7f659688885";
    try {
      const weatherResponse = await fetch(weatherUrl);
      const weatherData = await weatherResponse.json();
      renderWeatherData(weatherData);
    } catch (error) {
      console.log("error");
    }
}