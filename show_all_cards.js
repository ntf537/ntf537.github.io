/**
 * Отображает все карточки без фильтрации и сортировки.
 *
 * Извлекает массив карточек из localStorage по ключу "cards",
 * очищает текущий список карточек в интерфейсе и отображает все карточки.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование для показа всех карточек по нажатию кнопки:
 * showAllButton.addEventListener('click', showAllCards);
 */
const showAllCards = () =>
{
  let unsortedArr = JSON.parse(localStorage.getItem("cards"));
  cardsListUl.innerHTML = '';
  renderSortedCards(unsortedArr);
}