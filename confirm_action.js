/**
 * Открывает модальное окно подтверждения действия.
 *
 * Функция используется для отображения диалогового окна подтверждения (например, при удалении карточки или выполнении другого важного действия).
 * Открывает модальное окно `confirmWindow` с помощью метода `showModal()`.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование для запроса подтверждения перед удалением:
 * deleteButton.addEventListener('click', confirmAction);
 */
function confirmAction()
{
  confirmWindow.showModal();
}