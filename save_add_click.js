/**
 * Обрабатывает сохранение новой карточки при добавлении.
 *
 * Выполняет валидацию введённых пользователем данных с помощью функции {@link checkValidation} с параметром "FOR_ADD".
 * Если валидация проходит успешно, увеличивает счетчик идентификаторов, добавляет новую карточку через методы объекта {@link MyCards},
 * сохраняет и отображает новую карточку, после чего закрывает модальное окно добавления.
 * В случае ошибок валидации отображает соответствующее сообщение об ошибке в модальном окне ошибок.
 *
 * Возможные сценарии:
 * - Если все поля валидны, карточка добавляется, сохраняется и окно добавления закрывается.
 * - Если есть пустые поля, появляется сообщение "Все пункты задачи не должны быть пустыми".
 * - Если неверный формат дедлайна, появляется сообщение "Неверный формат деадлайна".
 * - Если тег уже существует, появляется сообщение "Данный тег уже существует".
 *
 * Используемые переменные и функции:
 * - {@link checkValidation} - функция валидации данных.
 * - {@link MyCards.addData} - добавляет новую карточку.
 * - {@link MyCards.submitAddedData} - сохраняет новую карточку.
 * - {@link MyCards.renderSumbittedAddedData} - отображает новую карточку.
 * - {@link getNowTime} - возвращает текущее время для отметки создания.
 * - {@link dialogAddWindow} - модальное окно добавления.
 * - {@link errorText}, {@link errorsWindow} - элементы для отображения ошибок.
 * - {@link idNum} - счетчик идентификаторов карточек.
 * - {@link inputTitle}, {@link inputDesc}, {@link inputDeadline}, {@link inputTags}, {@link inputStatus} - элементы формы для ввода данных.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика нажатия кнопки "Сохранить":
 * saveAddButton.addEventListener('click', onSaveAddClick);
 */
function onSaveAddClick() {
    if(checkValidation("FOR_ADD") === true)
    {
      idNum++;
  
      MyCards.addData(
        idNum,
        inputTitle.value,
        inputDesc.value,
        inputDeadline.value,
        inputTags.value,
        inputStatus.value,
        getNowTime(),
        getNowTime(),
        "created",
        getNowTime()
      );
      MyCards.submitAddedData();
      MyCards.renderSumbittedAddedData();
      dialogAddWindow.close();
    }
    else if(checkValidation("FOR_ADD") === "NULL_ERROR"){
      errorText.textContent = "Все пункты задачи не должны быть пустыми";
      errorsWindow.showModal();
    }
    else if(checkValidation("FOR_ADD") === "DEADLINE_ERROR")
    {
      errorText.textContent = "Неверный формат деадлайна";
      errorsWindow.showModal();
    }
    else if(checkValidation("FOR_ADD") === "TAG_ERROR")
    {
      errorText.textContent = "Данный тег уже существует";
      errorsWindow.showModal();
    }
}