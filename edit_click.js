/**
 * Открывает модальное окно редактирования карточки.
 *
 * Функция предназначена для обработки события нажатия на кнопку "Редактировать".
 * Открывает диалоговое окно редактирования задачи с помощью метода `showModal()` 
 * для переменной `dialogEditWindow`.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика нажатия кнопки "Редактировать":
 * editButton.addEventListener('click', onEditClick);
 */
const dialogEditWindow = document.getElementById("edit-task-dialog");

function onEditClick()
{
  dialogEditWindow.showModal();
}