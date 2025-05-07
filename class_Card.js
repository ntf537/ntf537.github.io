/**
 * Класс, представляющий одну карточку задачи.
 *
 * Хранит все основные данные о задаче, включая идентификатор, заголовок, описание, дедлайн, теги, статус,
 * даты создания и обновления, а также информацию о последнем действии с карточкой.
 *
 * @class
 */
class Card {
    id;
    title;
    description;
    deadline;
    tags;
    status;
    createdAt;
    updatedAt;
    action;
    timestamp;
    constructor(
      id,
      title,
      description,
      deadline,
      tags,
      status,
      createdAt,
      updatedAt,
      action,
      timestamp
    ) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.deadline = deadline;
      this.tags = tags;
      this.status = status;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.action = action;
      this.timestamp = timestamp;
    }
}