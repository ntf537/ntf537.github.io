/**
 * Отрисовывает массив карточек в виде элементов списка на странице.
 *
 * Для каждой карточки из массива создает DOM-элементы с соответствующими данными и кнопками управления,
 * добавляет обработчики событий для редактирования и удаления карточки, а также формирует структуру карточки
 * в соответствии с классами и требованиями интерфейса.
 *
 * @function
 * @param {Object[]} sortedArr - Массив карточек для отображения.
 * @param {string|number} sortedArr[].id - Уникальный идентификатор карточки.
 * @param {string} sortedArr[].title - Заголовок задачи.
 * @param {string} sortedArr[].description - Описание задачи.
 * @param {string} sortedArr[].deadline - Дедлайн задачи (например, в формате "YYYY-MM-DD").
 * @param {string[]} sortedArr[].tags - Массив тегов задачи.
 * @param {string} sortedArr[].status - Статус задачи (например, "Выполнено", "В процессе" и т.д.).
 * @returns {void}
 *
 * @example
 * // Отрисовать отсортированные карточки:
 * renderSortedCards(cardsArray);
 */
function renderSortedCards(sortedArr)
{
  for(let i = 0; i < sortedArr.length; i++)
  {
    let {
      id: idValue,
      title: titleValue,
      description: descValue,
      deadline: deadlineValue,
      tags: tagsValue,
      status: statusValue,
    } = sortedArr[i];
  
    const cardsListLi = document.createElement("li");
  
    const cardId = document.createElement("p");
    const cardDiv = document.createElement("div");
    const cardTitle = document.createElement("p");
    const cardDesc = document.createElement("p");
    const cardTagDiv = document.createElement("div");
    const cardTagText = document.createElement("p");
    const cardBottomDiv = document.createElement("div");
    const cardEditButton = document.createElement("button");
    const cardDeleteButton = document.createElement("button");
    const cardStatusDiv = document.createElement("div");
    const cardStatusText = document.createElement("p");
    const cardDeadline = document.createElement("p");
  
    cardId.classList.add("id-card-value");
    cardsListLi.classList.add("to-do-list-li");
    cardDiv.classList.add("card");
    cardTitle.classList.add("task-title");
    cardDesc.classList.add("task-desc");
    cardTagDiv.classList.add("task-tag");
    cardTagText.classList.add("task-tag-text");
    cardBottomDiv.classList.add("card-bottom");
    cardEditButton.classList.add("task-edit");
    cardDeleteButton.classList.add("task-delete");
    cardStatusDiv.classList.add("task-status");
    cardStatusText.classList.add("task-status-text");
    cardDeadline.classList.add("task-deadline");
  
    cardId.textContent = idValue;
    cardTitle.textContent = titleValue;
    cardDesc.textContent = descValue;
    cardTagText.textContent = tagConversion(tagsValue);
    cardStatusText.textContent = statusValue;
    cardDeadline.textContent = deadlineValue;
  
    cardEditButton.addEventListener("click", function()
    {
      dialogEditWindow.showModal();
      editTitle.value = titleValue;
      editDesc.value = descValue;
      editTags.value = tagsValue;
      editStatus.value = statusValue;
      editDeadline.value = deadlineValue;
      editId = idValue;
    });
  
    cardDeleteButton.addEventListener("click", function()
    {
      deleteId = idValue;
      confirmAction();
    });
  
    cardsListUl.append(cardsListLi);
    cardsListLi.append(cardDiv);
    cardDiv.append(cardId);
    cardDiv.append(cardTitle);
    cardDiv.append(cardDesc);
    cardDiv.append(cardTagDiv);
    cardTagDiv.append(cardTagText);
    cardDiv.append(cardBottomDiv);
    cardBottomDiv.append(cardEditButton);
    cardBottomDiv.append(cardDeleteButton);
    cardBottomDiv.append(cardStatusDiv);
    cardStatusDiv.append(cardStatusText);
    cardBottomDiv.append(cardDeadline); 

  }  
}