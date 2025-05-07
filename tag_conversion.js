/**
 * Преобразует строку с тегами в формат, подходящий для отображения.
 *
 * Принимает строку с тегами, разделёнными запятыми, удаляет лишние пробелы,
 * добавляет символ `#` перед каждым тегом и возвращает строку, где теги разделены запятой и пробелом.
 *
 * Пример:
 * Вход:  "important, work, urgent"
 * Выход: "#important, #work, #urgent"
 *
 * @function
 * @param {string} str - Строка с тегами, разделёнными запятыми.
 * @returns {string} Строка с тегами в формате "#тег1, #тег2, ...".
 *
 * @example
 * tagConversion("important, work, urgent"); // "#important, #work, #urgent"
 */
function tagConversion(str) {
    const elements = str.trim().split(",");
    return elements.map(element => (element = "#" + element.trim())).join(", ");
}