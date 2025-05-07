/**
 * Отображает погодные данные на странице.
 *
 * Извлекает иконку погоды и температуру из объекта данных, устанавливает соответствующую иконку в элемент изображения
 * и преобразует температуру из Кельвинов в градусы Цельсия с округлением до десятых, отображая результат в текстовом элементе.
 *
 * @function
 * @param {Object} data - Объект с погодными данными, полученный из OpenWeatherMap API.
 * @param {Object[]} data.weather - Массив погодных условий.
 * @param {string} data.weather[].icon - Код иконки погоды (например, "01d").
 * @param {Object} data.main - Объект с основными погодными параметрами.
 * @param {number} data.main.temp - Температура в Кельвинах.
 * @returns {void}
 *
 * @example
 * // Пример использования:
 * renderWeatherData({
 *   weather: [{ icon: "01d" }],
 *   main: { temp: 293.15 }
 * });
 */
function renderWeatherData(data) {
    const {
      weather: [{icon: wicon}],
      main: {temp: wt},
    } = data;
  
    icon.src = "https://openweathermap.org/img/wn/" + wicon + ".png";
    temp.textContent = (wt - 273).toFixed(1) + "°C";
}