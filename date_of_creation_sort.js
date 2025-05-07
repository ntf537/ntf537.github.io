/**
 * Сортирует карточки по дате создания (от самых ранних к самым поздним) и отображает их.
 *
 * Извлекает массив карточек из localStorage по ключу "cards", сортирует его по полю `createdAt`
 * в порядке возрастания (от самой ранней даты к самой поздней), затем отображает отсортированный массив карточек.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование для сортировки карточек по дате создания:
 * dateOfCreationSort();
 */
function dateOfCreationSort()
{
  let sortedArr = [];
  let unsortedArr = JSON.parse(localStorage.getItem("cards"));

  sortedArr = unsortedArr.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return -1;
    }
    if (a.createdAt > b.createdAt) {
      return 1;
    }
    return 0;
  })
  
  renderSortedCards(sortedArr);
}