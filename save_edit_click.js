/**
 * Обрабатывает сохранение изменений при редактировании карточки.
 *
 * Выполняет валидацию введённых пользователем данных с помощью функции {@link checkValidation} с параметром "FOR_EDIT".
 * Если валидация проходит успешно, обновляет данные карточки в хранилище через методы объекта {@link MyCards},
 * отображает обновлённые данные и закрывает модальное окно редактирования.
 * В случае ошибок валидации отображает соответствующее сообщение об ошибке в модальном окне ошибок.
 *
 * Возможные сценарии:
 * - Если все поля валидны, карточка обновляется, изменения сохраняются и окно редактирования закрывается.
 * - Если есть пустые поля, появляется сообщение "Все пункты задачи не должны быть пустыми".
 * - Если неверный формат дедлайна, появляется сообщение "Неверный формат деадлайна".
 * - Если тег уже существует, появляется сообщение "Данный тег уже существует".
 *
 * Используемые переменные и функции:
 * - {@link checkValidation} - функция валидации данных.
 * - {@link MyCards.editData} - обновляет данные карточки.
 * - {@link MyCards.submitEditedData} - сохраняет изменения карточки.
 * - {@link MyCards.renderSubmittedEditedData} - отображает обновлённую карточку.
 * - {@link getNowTime} - возвращает текущее время для отметки обновления.
 * - {@link dialogEditWindow} - модальное окно редактирования.
 * - {@link errorText}, {@link errorsWindow} - элементы для отображения ошибок.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика нажатия кнопки "Сохранить изменения":
 * saveEditButton.addEventListener('click', onSaveEditClick);
 */
function onSaveEditClick()
{
  if(checkValidation("FOR_EDIT") === true)
  {
    MyCards.editData(
      editId,
      editTitle.value,
      editDesc.value,
      editDeadline.value,
      editTags.value,
      editStatus.value,
      getNowTime(),
      "updated",
      getNowTime()
    );

    MyCards.submitEditedData(editId);
    MyCards.renderSubmittedEditedData(editId);
    dialogEditWindow.close();
  }
  else if(checkValidation("FOR_EDIT") === "NULL_ERROR"){
    errorText.textContent = "Все пункты задачи не должны быть пустыми";
    errorsWindow.showModal();
  }
  else if(checkValidation("FOR_EDIT") === "DEADLINE_ERROR")
  {
    errorText.textContent = "Неверный формат деадлайна";
    errorsWindow.showModal();
  }
  else if(checkValidation("FOR_EDIT") === "TAG_ERROR")
  {
    errorText.textContent = "Данный тег уже существует";
    errorsWindow.showModal();
  }
}