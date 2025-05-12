/**
 * Класс для управления списком карточек задач.
 *
 * Позволяет добавлять, редактировать, сохранять и отображать карточки, а также вести историю изменений.
 *
 * @class
 */
 class Cards {
  cardsList = [];
  /**
   * Добавляет новую карточку в список.
   *
   * @param {number|string} id - Уникальный идентификатор карточки.
   * @param {string} title - Заголовок задачи.
   * @param {string} description - Описание задачи.
   * @param {string} deadline - Дедлайн (в формате "YYYY-MM-DD").
   * @param {string} tags - Список тегов (строка, разделённая запятыми).
   * @param {string} status - Статус задачи.
   * @param {string} createdAt - Дата и время создания.
   * @param {string} updatedAt - Дата и время последнего изменения.
   * @param {string} action - Тип действия ("created", "updated" и т.д.).
   * @param {string} timestamp - Время действия.
   * @returns {void}
   */
  addData(
    id,
    title,
    description,
    deadline,
    tags,
    status,
    createdAt,
    updatedAt,
    action,
    timestamp,
  ) {
    const NewCard = new Card(
      id,
      title,
      description,
      deadline,
      tags,
      status,
      createdAt,
      updatedAt,
      action,
      timestamp,
    );
    this.cardsList.push(NewCard);
  }

  /**
   * Сохраняет все карточки из списка в localStorage.
   * Формирует массив объектов карточек с историей действий.
   *
   * @returns {void}
   */
  submitAddedData() {
    let cardsArr = [];
    for (let i = 0; i < this.cardsList.length; i++) {
      cardsArr.push({
        id: this.cardsList[i].id,
        title: this.cardsList[i].title,
        description: this.cardsList[i].description,
        deadline: this.cardsList[i].deadline,
        tags: this.cardsList[i].tags,
        status: this.cardsList[i].status,
        createdAt: this.cardsList[i].createdAt,
        updatedAt: this.cardsList[i].updatedAt,
        history: [
          {
            action: this.cardsList[i].action,
            timestamp: this.cardsList[i].timestamp,
          },
        ],
      });
    }
    localStorage.setItem("cards", JSON.stringify(cardsArr));
  }

  /**
   * Отрисовывает только что добавленную карточку на странице.
   * Использует данные последней карточки из localStorage.
   *
   * @returns {void}
   */
  renderSumbittedAddedData() {
    let {
      id: idValue,
      title: titleValue,
      description: descValue,
      deadline: deadlineValue,
      tags: tagsValue,
      status: statusValue,
    } = JSON.parse(localStorage.getItem("cards"))[
      JSON.parse(localStorage.getItem("cards")).length - 1
    ];

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

    cardEditButton.addEventListener("click", function () {
      dialogEditWindow.showModal();
      editTitle.value = titleValue;
      editDesc.value = descValue;
      editTags.value = tagsValue;
      editStatus.value = statusValue;
      editDeadline.value = deadlineValue;
      editId = idValue;
    });

    cardDeleteButton.addEventListener("click", function () {
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

  /**
   * Редактирует данные существующей карточки в списке.
   *
   * @param {number|string} id - Идентификатор редактируемой карточки.
   * @param {string} title - Новый заголовок.
   * @param {string} description - Новое описание.
   * @param {string} deadline - Новый дедлайн.
   * @param {string} tags - Новые теги.
   * @param {string} status - Новый статус.
   * @param {string} updatedAt - Дата и время последнего изменения.
   * @param {string} action - Тип действия ("updated").
   * @param {string} timestamp - Время действия.
   * @returns {void}
   */
  editData(
    id,
    title,
    description,
    deadline,
    tags,
    status,
    updatedAt,
    action,
    timestamp,
  ) {
    for (let i = 0; i < this.cardsList.length; i++) {
      if (id === this.cardsList[i].id) {
        this.cardsList[i].title = title;
        this.cardsList[i].description = description;
        this.cardsList[i].deadline = deadline;
        this.cardsList[i].tags = tags;
        this.cardsList[i].status = status;
        this.cardsList[i].updatedAt = updatedAt;
        this.cardsList[i].action = action;
        this.cardsList[i].timestamp = timestamp;
      }
    }
  }

  /**
   * Сохраняет изменения редактируемой карточки в localStorage, обновляя историю действий.
   *
   * @param {number|string} id - Идентификатор редактируемой карточки.
   * @returns {void}
   */
  submitEditedData(id) {
    const cardsArr = [];
    for (let i = 0; i < this.cardsList.length; i++) {
      if (i == id) {
        let { history: historyArrValue } = JSON.parse(
          localStorage.getItem("cards"),
        )[i];
        let historyArr = historyArrValue;
        historyArr.push({
          action: this.cardsList[i].action,
          timestamp: this.cardsList[i].timestamp,
        });
        cardsArr.push({
          id: this.cardsList[i].id,
          title: this.cardsList[i].title,
          description: this.cardsList[i].description,
          deadline: this.cardsList[i].deadline,
          tags: this.cardsList[i].tags,
          status: this.cardsList[i].status,
          createdAt: this.cardsList[i].createdAt,
          updatedAt: this.cardsList[i].updatedAt,
          history: historyArr,
        });
      } else {
        let { history: historyArrValue } = JSON.parse(
          localStorage.getItem("cards"),
        )[i];
        cardsArr.push({
          id: this.cardsList[i].id,
          title: this.cardsList[i].title,
          description: this.cardsList[i].description,
          deadline: this.cardsList[i].deadline,
          tags: this.cardsList[i].tags,
          status: this.cardsList[i].status,
          createdAt: this.cardsList[i].createdAt,
          updatedAt: this.cardsList[i].updatedAt,
          history: historyArrValue,
        });
      }
    }
    localStorage.removeItem("cards");
    localStorage.setItem("cards", JSON.stringify(cardsArr));
  }

  /**
   * Обновляет отображение отредактированной карточки на странице.
   *
   * @param {number|string} id - Идентификатор отредактированной карточки.
   * @returns {void}
   */
  renderSubmittedEditedData(id) {
    let cardIndex;
    let realId;
    let unUpdatedList = JSON.parse(localStorage.getItem("cards"));
    for (let i = 0; i < unUpdatedList.length; i++) {
      let { id: idOfCard } = JSON.parse(localStorage.getItem("cards"))[i];
      if (idOfCard === id) {
        realId = i;
      }
    }
    let {
      id: idValue,
      title: titleValue,
      description: descValue,
      deadline: deadlineValue,
      tags: tagsValue,
      status: statusValue,
    } = JSON.parse(localStorage.getItem("cards"))[realId];

    for (let i = 0; i < idList.length; i++) {
      if (Number(idList[i].textContent) === id) {
        cardIndex = i;
      }
    }

    const cardTitle = document.getElementsByClassName("task-title")[cardIndex];
    const cardDesc = document.getElementsByClassName("task-desc")[cardIndex];
    const cardTagText =
      document.getElementsByClassName("task-tag-text")[cardIndex];
    const cardStatusText =
      document.getElementsByClassName("task-status")[cardIndex];
    const cardDeadline =
      document.getElementsByClassName("task-deadline")[cardIndex];

    cardTitle.textContent = titleValue;
    cardDesc.textContent = descValue;
    cardTagText.textContent = tagConversion(tagsValue);
    cardStatusText.textContent = statusValue;
    cardDeadline.textContent = deadlineValue;

    cardTitle.classList.add("task-title");
    cardDesc.classList.add("task-desc");
    cardTagText.classList.add("task-tag-text");
    cardStatusText.classList.add("task-status-text");
    cardDeadline.classList.add("task-deadline");
  }
}
