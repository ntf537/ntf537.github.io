/**
 * Асинхронно запрашивает официальный курс валюты и отображает его на странице.
 *
 * Выполняет HTTP-запрос к API Национального банка Республики Беларусь для получения актуального курса валюты (по коду 431).
 * После успешного получения и преобразования ответа в JSON, передаёт данные в функцию {@link renderRateData} для отображения.
 * В случае ошибки запроса или обработки данных выводит сообщение об ошибке в консоль.
 *
 * @async
 * @function
 * @returns {Promise<void>} Промис, который завершается после получения и отображения курса или обработки ошибки.
 *
 * @example
 * // Вызов функции для загрузки и отображения курса:
 * fetchRateData();
 */
async function fetchRateData() {
    const rateUrl = "https://api.nbrb.by/exrates/rates/431";
  
    try {
      const rateResponse = await fetch(rateUrl);
      const rateData = await rateResponse.json();
      renderRateData(rateData);
    } catch (error) {
      console.log("error");
    }
}
