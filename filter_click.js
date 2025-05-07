/**
 * Обрабатывает клик по кнопке фильтрации.
 * 
 * Формирует массив выбранных фильтров на основе состояния чекбоксов (статус, дата, дедлайн),
 * очищает список карточек и отображает отсортированные и отфильтрованные карточки.
 * 
 * @function
 * @returns {void}
 *
 * @example
 * // Обычно используется как обработчик события click:
 * filterButton.addEventListener('click', onFilterClick);
 */
function onFilterClick()
{
  let filterArr = [];
  if(statusCheckbox.checked)
  {
    filterArr.push("STATUS");
  }
  if(dateCheckbox.checked)
  {
    filterArr.push("DATE");
  }
  if(deadlineCheckbox.checked)
  {
    filterArr.push("DEADLINE")
  }

  cardsListUl.innerHTML = '';
  renderSortedCards(filterCards(filterArr, statusFilterText.value, dateFilterText.value, deadlineFilterText.value));
}