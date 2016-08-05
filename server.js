var express = require('express');
var bodyParser = require('body-parser');
var users = require('./users.json');

var app = module.exports = express();
app.use(bodyParser.json());
//#1 get all users; #11 allow queries for age, language, city, state, and gender
app.get('/users', function(req, res, next){
    res.json(users);
});
//#2 return users where language matches query
app.get('/users', function(req, res, next){
    if(req.query.language){
    var result = [];
    for (var index in users){
      if (users[index].language === language){
        result.push(users[index]);
      }
    }
    res.json(result);
    }
    else{
    res.json(books);
    }
});
//#3 get all users filtering by privilege
app.get('/users/admin', function(req, res, next){
  var index = req.params.type;
  res.json(users[index]);
});
//#4 create new user
app.post('/users', function(req, res, next){
  users.push(req.body);
  res.status(200).json(users);
});
//#5 create a new admin user
app.post('/users/admin', function(req, res, next){
  if(req.params.type === "admin"){
    users.push(req.body);
    res.status(200);
  }
});
//#6 change a user's language
app.post('/users', function(req, res, next){
  var index = req.params.id;
  users[index].language = req.body.language;
  res.json(users);
});
//#7 add to a users favorite forums
app.post('/users', function(req, res, next){
    var index = req.params.id;
    users[index].favorites.push(req.body.favorites);
    res.status(200)
});
//#8 remove from a users favorite forums
app.delete('/users/:id', function(req, res, next){
  var index = req.params.id;
  users.splice(index, 1);
  res.json(users);
  res.sendStatus(204);
});
//#9 find user by id
app.get('/users/:id', function(req, res, next){
  if(req.params.id){
  var index = req.params.id;
  res.json(users[index]);
  }
  else {
  res.status(404);
  }
});
//#10 delete user by id
app.delete('/users/:id', function(req, res, next){
  var index = req.params.id;
  users.splice(index, 1);
  res.json(users);
  res.sendStatus(204);
});
//#12
app.put('/users', function(req, res, next){
    if(users.id === req.params.id){
        user["first_name"] = req.body.first_name,
        user["last_name"] = req.body.last_name,
        user["email"] = req.body.email,
        user["gender"]n = req.body.gender,
        user["language"] = req.body.language,
        user["age"] = req.body.age,
        user["city"] = req.body.city,
        user["state"] = req.body.state,
        user["type"] = req.body.type,
        user["favorites"] = req.body.favorites
    }
    else{
      res.status(404);
    }
});



app.listen(3000, function(){
  console.log('Hi. I am here. Listening real close');
})
