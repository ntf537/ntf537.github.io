/**
 * Проверяет корректность введённых данных для добавления или редактирования карточки.
 *
 * В зависимости от значения параметра `condition` выполняет валидацию данных формы добавления или редактирования карточки.
 * Проверяет, что все обязательные поля заполнены, дедлайн соответствует формату "YYYY-MM-DD" и является валидной датой,
 * а также что введённые теги не пересекаются с уже существующими тегами других карточек.
 *
 * Возможные сценарии:
 * - Если все поля заполнены, дедлайн валиден и теги уникальны, возвращает `true`.
 * - Если одно из обязательных полей пустое, возвращает строку `"NULL_ERROR"`.
 * - Если дедлайн не соответствует формату или невалиден, возвращает строку `"DEADLINE_ERROR"`.
 * - Если хотя бы один из введённых тегов уже существует у другой карточки, возвращает строку `"TAG_ERROR"`.
 *
 * @function
 * @param {string} condition - Режим проверки: `"FOR_ADD"` (валидация для добавления) или `"FOR_EDIT"` (валидация для редактирования).
 * @returns {true | "NULL_ERROR" | "DEADLINE_ERROR" | "TAG_ERROR"} 
 * Возвращает `true`, если валидация прошла успешно, либо строку с типом ошибки.
 *
 * @example
 * // При добавлении карточки:
 * if (checkValidation("FOR_ADD") === true) { ... }
 *
 * // При редактировании карточки:
 * if (checkValidation("FOR_EDIT") === true) { ... }
 */

function checkValidation(condition)
{
  if(condition == "FOR_ADD")
  {
    if(inputTitle.value.trim().length != 0 && inputDesc.value.trim().length != 0 && inputDeadline.value.trim().length != 0 && inputTags.value.trim().length != 0 && inputStatus.value.trim().length !=0)
    {
      if(/^\d{4}-\d{2}-\d{2}$/.test(inputDeadline.value))
      {
        const [year, month, day] = inputDeadline.value.split('-').map(Number);
        const date = new Date(year, month - 1, day);

        if(date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day)
        {   
          for(let i = 0; i < MyCards.cardsList.length; i++)
          {
            for(let j = 0; j < MyCards.cardsList[i].tags.trim().split(",").length; j++)
            {
              if (inputTags.value.trim().split(",").includes(MyCards.cardsList[i].tags.trim().split(",")[j]))
              {
                return "TAG_ERROR";
              }
            }
          }
          return true;
        }
        else
        {
          return "DEADLINE_ERROR";
        }
      }
      else
      {
        return "DEADLINE_ERROR";
      }
    }
    else
    {
    return "NULL_ERROR";
    }
  }
  else if (condition == "FOR_EDIT")
  {
    if(editTitle.value.trim().length != 0 && editDesc.value.trim().length != 0 && editDeadline.value.trim().length != 0 && editTags.value.trim().length != 0 && editStatus.value.trim().length !=0)
    {
      if(/^\d{4}-\d{2}-\d{2}$/.test(editDeadline.value))
      {
        const [year, month, day] = editDeadline.value.split('-').map(Number);
        const date = new Date(year, month - 1, day);

        if(date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day)
        {   
          for(let i = 0; i < MyCards.cardsList.length; i++)
          {
            for(let j = 0; j < MyCards.cardsList[i].tags.trim().split(",").length; j++)
            {
              if (editTags.value.trim().split(",").includes(MyCards.cardsList[i].tags.trim().split(",")[j]) && MyCards.cardsList[i].id != editId)
              {
                return "TAG_ERROR";
              }
            }
          }
          return true;
        }
        else
        {
          return "DEADLINE_ERROR";
        }
      }
      else
      {
        return "DEADLINE_ERROR";
      }
    }
    else
    {
      return "NULL_ERROR";
    }  
  }
}