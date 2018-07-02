##Запуск сервера
1. Установить nodeJs https://nodejs.org/en/
2. Скачать либо склонировать сервер.
3. В папке с сервером выполнить npm install
4. После завершения установки в консоли выполнить npm start
5. В браузере перейти по ссылке http://localhost:4001/ откроется страница с hello world

Данное API разработанно для учебных целей по работе с сетевыми запросами

##Описание запросов к серверу

###Комментарии:
Все запросы делать на `http://localhost:4001/` + url
1. получение списка:
- тип `GET`
- url `http://localhost:4001/comments`

ответ - массив елементов

2. Добавление елемента:
 - тип `POST`
 - url `http://localhost:4001/comments`
 - body `{
    "author": "Test Jones",
    "text": "youText"
}`

ответ - массив елементов

3. Редактирование елемента:
- тип PUT
- url `http://localhost:4001/comment/:id` пример `http://localhost:4001/comments/123456`
- body `{
    "author": "Test Jones",
    "text": "yourText"
}`
ответ - массив елементов

4. Удаление елемента:
- тип  PUT
- url  comment/:id id удаляемого элемента
- ответ  массив елементов

###Список задач
baseUrl - http://localhost:4001
1. Получить список задач 
 - GET запрос по `http://localhost:4001/list`
2. Добавить новую 
- POST на `http://localhost:4001/list` в body `{title: "Текст задачи"}`;

3. Удаление задачи 
- DELETE на `http://localhost:4001/list/:id` к урл нужно добавить айди задачи например `http://localhost:4001/list/123456`

4. Редактирование задачи 
- PUT на `http://localhost:4001/list/:id` в body `{title: "Текст задачи"}`

