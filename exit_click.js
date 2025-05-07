/**
 * Закрывает модальные окна добавления и редактирования карточек.
 *
 * Функция предназначена для обработки события выхода из форм добавления или редактирования.
 * Вызывает методы закрытия для диалоговых окон `dialogAddWindow` и `dialogEditWindow`.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика нажатия кнопки "Выход" или "Закрыть":
 * exitButton.addEventListener('click', onExitClick);
 */
function onExitClick() {
    dialogAddWindow.close();
    dialogEditWindow.close();
}