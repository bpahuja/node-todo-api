const {mongoose} = require('../server/db/mongoose');

const {Todo} = require('../server/models/todo');

var id = '5c64598cb080be4d84e2a701';

Todo.find({
    _id:id,
}).then((todos)=>{
    console.log('todos ', todos);
});

Todo.findOne({
    _id:id,
}).then((todo)=>{
    console.log('todo ', todo);
});

Todo.findById(id).then((todo)=>{
    console.log(todo);
});