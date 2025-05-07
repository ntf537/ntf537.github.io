/**
 * Обрабатывает клик по кнопке сортировки карточек.
 *
 * Очищает текущий список карточек в интерфейсе и выполняет сортировку карточек
 * в зависимости от выбранного значения в выпадающем списке (`selectList`).
 * Доступные варианты сортировки: по алфавиту, по статусу, по дате создания.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика события:
 * sortButton.addEventListener('click', onSortClick);
 */
function onSortClick()
{
  cardsListUl.innerHTML = '';
  if(selectList.value === "ALPHABET")
  {
    alphabetSort();
  }
  else if(selectList.value === "STATUS")
  {
    statusSort();
  } 
  else if(selectList.value === "DATE_OF_CREATION")
  {
    dateOfCreationSort();
  }
}