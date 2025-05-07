/**
 * Удаляет выбранную карточку из DOM, localStorage и внутреннего списка карточек.
 *
 * Функция ищет и удаляет карточку с идентификатором, равным `deleteId`, из визуального списка (DOM),
 * закрывает окно подтверждения удаления, очищает внутренний массив карточек, 
 * формирует новый массив карточек без удалённой, обновляет localStorage и внутренний список карточек.
 *
 * Используемые переменные и функции:
 * - {@link idList} - список DOM-элементов с идентификаторами карточек.
 * - {@link deleteId} - идентификатор карточки, которую нужно удалить.
 * - {@link confirmWindow} - модальное окно подтверждения удаления.
 * - {@link MyCards.cardsList} - внутренний массив карточек.
 * - {@link MyCards.addData} - метод для восстановления карточек во внутренний массив.
 * - localStorage - хранилище браузера для сохранения карточек.
 *
 * @function
 * @returns {void}
 *
 * @example
 * // Использование как обработчика подтверждения удаления:
 * confirmDeleteButton.addEventListener('click', deleteCard);
 */
function deleteCard()
  {
    for(let i = 0; i < idList.length; i++)
    {
      if(Number(idList[i].textContent) === deleteId)
      {
        idList[i].parentElement.parentElement.remove();
      }
    }
    confirmWindow.close();
    MyCards.cardsList.splice(0, MyCards.cardsList.length); 
    let cardsArr = [];
    let notUpdatedCardsArr = JSON.parse(localStorage.getItem("cards"));
    for (let i = 0; i < notUpdatedCardsArr.length; i++) {
      let {
        id: idValue,
        title: titleValue,
        description: descValue,
        deadline: deadlineValue,
        tags: tagsValue,
        status: statusValue,
        createdAt: createdAtValue,
        updatedAt: updatedAtValue,
        history: historyArr,
      } = notUpdatedCardsArr[i];
        if(idValue != deleteId)
        {
            cardsArr.push({id: idValue,
            title: titleValue,
            description: descValue,
            deadline: deadlineValue,
            tags: tagsValue,
            status: statusValue,
            createdAt: createdAtValue,
            updatedAt: updatedAtValue,
            history: historyArr})
        MyCards.addData(idValue, titleValue, descValue, deadlineValue, tagsValue, statusValue, createdAtValue, updatedAtValue);
      }
    }
    localStorage.setItem(
      "cards",
      JSON.stringify(cardsArr));
}