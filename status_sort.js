/**
 * Сортирует карточки по статусу выполнения и отображает их.
 *
 * Карточки со статусом "Выполнено" будут отображаться первыми в списке.
 * Функция извлекает массив карточек из localStorage по ключу "cards", 
 * сортирует их так, чтобы карточки со статусом "Выполнено" шли в начале списка,
 * а остальные - после них, затем передает отсортированный массив для отображения.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Для сортировки карточек по статусу:
 * statusSort();
 */
function statusSort()
{
  let unsortedArr = JSON.parse(localStorage.getItem("cards"));

  let sortedArr = unsortedArr.sort((a, b) => 
  {
    if(a.status === "Выполнено")
    {
      return -1;
    }
    if(b.status === "Выполнено")
    {
      return 1;
    }
  })

  renderSortedCards(sortedArr);  
}
