/**
 * Фильтрует массив карточек по выбранным критериям: статус, дата создания и дедлайн.
 *
 * Извлекает массив карточек из localStorage, затем последовательно применяет выбранные фильтры
 * (статус, дата создания, дедлайн) в зависимости от содержимого массива фильтров.
 *
 * @function
 * @param {string[]} filterArr - Массив выбранных фильтров. Возможные значения: "STATUS", "DATE", "DEADLINE".
 * @param {string} status - Значение для фильтрации по статусу карточки (например, "Выполнено", "В процессе" и т.д.).
 * @param {string} date - Значение для фильтрации по дате создания карточки (формат даты должен совпадать с форматом в карточке).
 * @param {string} deadline - Значение для фильтрации по дедлайну карточки (формат даты должен совпадать с форматом в карточке).
 * @returns {Object[]} Массив карточек, отфильтрованный по выбранным критериям.
 *
 * @example
 * const filtered = filterCards(['STATUS', 'DATE'], 'Выполнено', '2024-05-07', '');
 */

function filterCards(filterArr, status, date, deadline)
{
  let sortedArr = JSON.parse(localStorage.getItem("cards"));

  for(let i = 0; i < filterArr.length; i++)
  {
    if(filterArr[i] === "STATUS")
    {
      sortedArr = sortedArr.filter(item => item.status === status)
    }
    if(filterArr[i] === "DATE")
    {
      sortedArr = sortedArr.filter(item => item.createdAt === date)
    }
    if(filterArr[i] === "DEADLINE")
    {
      sortedArr = sortedArr.filter(item => item.deadline === deadline)
    }
  }
  return sortedArr;
}