/**
 * Сортирует карточки по алфавиту (по названию) и отображает их.
 *
 * Извлекает массив карточек из localStorage по ключу "cards", сортирует их по полю `title`
 * в алфавитном порядке (без учета регистра и лишних пробелов), затем отображает отсортированный массив.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Для сортировки карточек по алфавиту:
 * alphabetSort();
 */
 function alphabetSort() {
  let unsortedArr = JSON.parse(localStorage.getItem("cards"));

  let sortedArr = unsortedArr.sort((a, b) => {
    if (a.title.trim().toLowerCase() < b.title.trim().toLowerCase()) {
      return -1;
    }
    if (a.title.trim().toLowerCase() > b.title.trim().toLowerCase()) {
      return 1;
    }
    return 0;
  });

  renderSortedCards(sortedArr);
}
