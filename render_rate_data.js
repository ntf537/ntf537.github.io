/**
 * Отображает официальный курс валюты на странице.
 *
 * Извлекает значение официального курса из объекта данных и устанавливает его в текстовое содержимое элемента интерфейса.
 *
 * @function
 * @param {Object} data - Объект с данными о курсе валюты.
 * @param {number|string} data.Cur_OfficialRate - Официальный курс валюты, который будет отображён.
 * @returns {void}
 *
 * @example
 * // Пример использования:
 * renderRateData({ Cur_OfficialRate: 3.21 });
 */
function renderRateData(data) {
    const {Cur_OfficialRate: drate} = data;
  
    rate.textContent = drate;
}