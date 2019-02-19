# Todo REST API

Todo REST API allows you to register yourself as a user and then create your own todo list. You can create, update and delete todo's.

------

## Routes

| HTTP Method | Route           | Parameters                   | Access  | Header |
| ----------- | --------------- | ---------------------------- | ------- | :----: |
| POST        | /todos          | text, completed *(optional)* | private | x-auth |
| GET         | /todos          | -                            | private | x-auth |
| GET         | /todos/:id      | -                            | private | x-auth |
| DELETE      | /todos/:id      | -                            | private | x-auth |
| PATCH       | /todos/:id      | text, completed *(optional)* | private | x-auth |
| POST        | /users          | email, password              | public  |   -    |
| GET         | /users/me       | -                            | private | x-auth |
| POST        | /users/login    | email, password              | public  |   -    |
| DELETE      | /users/me/token | -                            | private | x-auth |

## File Structure

```
+-- package.json
+-- package.json
+-- .gitignore
+-- server
|   +-- db
|   |	+-- mongoose.js
|   +-- middleware
|   |	+-- authenticate.js
|   +-- models
|   |	+-- user.js
|   |	+-- todo.js
|   +-- server.js
```



-------

The REST API has been successfully built and deployed onto [heroku](https://fast-plains-79751.herokuapp.com).
