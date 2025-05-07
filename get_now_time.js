/**
 * Возвращает текущую дату в формате "YYYY-MM-DD".
 *
 * Создаёт объект текущей даты и времени, преобразует его в строку в формате ISO (например, "2025-05-07T15:23:00.000Z"),
 * затем извлекает только часть с датой ("YYYY-MM-DD") и возвращает её в виде строки.
 *
 * @function
 * @returns {string} Строка с текущей датой в формате "YYYY-MM-DD".
 *
 * @example
 * const today = getNowTime(); // "2025-05-07"
 */
function getNowTime() {
    let date = new Date();
    return String(date.toISOString().slice(0, 10));
}