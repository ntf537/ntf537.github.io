/**
 * Открывает модальное окно добавления новой карточки.
 *
 * Функция используется как обработчик события (например, нажатия кнопки "Добавить").
 * Открывает диалоговое окно добавления задачи с помощью метода `showModal()` для переменной `dialogAddWindow`.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика нажатия кнопки "Добавить":
 * addButton.addEventListener('click', onAddClick);
 */
function onAddClick() {
    dialogAddWindow.showModal();
}