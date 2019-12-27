const express = require("express");
require("express-group-routes");
const app = express();
const port = 7000;
const cors = require("cors");
const categoriesController = require("./controller/categories");
const articlesController = require("./controller/articles");
const usersController = require("./controller/users");
const commentController = require("./controller/comment");
const AuthController = require("./controller/auth");
//middleware
const Authentication = require("./middleware");
app.use(cors());
app.use(express.json());

/*
app.get("/", (req, res) => {
  res.send("<h1>nuri aja</h1>");
});
*/

// const todos = [
//   {
//     id: 1,
//     title: "selamat pagi nuri",
//     isDone: true
//   },
//   {
//     id: 2,
//     title: "selamat siang nuri",
//     isDone: false
//   }
// ];

app.group("/api/v1", router => {
  router.get("/categories", categoriesController.index2);
  router.get("/category/:id", categoriesController.show);
  router.post("/category", categoriesController.add);
  router.delete("/category/:id", categoriesController.delete);
  router.patch("/category/:id", categoriesController.update);
  router.get("/category/:id/articles", articlesController.articleDetails);

  //
  router.get("/articles", articlesController.index2);
  router.get("/articles/:id", articlesController.show);
  router.post("/article", Authentication.auth, articlesController.add);
  router.delete("/articles/:id", articlesController.delete);
  router.patch("/articles/:id", articlesController.update);

  //
  router.get("/comment", commentController.index);
  router.get("/comment/:id", commentController.show);
  router.post("/comment", commentController.add);
  router.delete("/comment/:id", commentController.delete);
  router.patch("/comment/:id", commentController.update);

  //
  router.get("/users", usersController.index);
  router.get("/users/:id", usersController.show);
  router.post("/users", usersController.add);
  router.delete("/users/:id", usersController.delete);
  router.patch("/users/:id", usersController.update);

  //
  router.post("/login", Authentication.auth, AuthController.login);
});

/*
app.get("/", (req, res) => {
  res.send("<h3>it's like a beautiful dream comes true</h3>");
});
*/

// app.get("/todos", (req, res) => {
//   res.send(todos);
// });

// app.get("/todo/:id", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   res.send(todos[index]);
// });

// app.post("/todo", (req, res) => {
//   const data = req.body;
//   console.log(data);
//   todos.push(data);
//   res.send(data);
// });

// app.patch("/todo/:id", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   const data = req.body;
//   todos[index] = { ...todos[index], ...data };
//   res.send(todos[index]);
// });

// app.delete("/todo/:id", (req, res) => {
//   const id = req.params.id;
//   const index = id - 1;
//   todos.splice(index, 1);
//   res.send(todos);
// });

/*
router.get("/api/v1/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send(todos[index]);
});


 app.get("/api/v1/todos", (req, res) => {
   res.send(todos);
 });

 app.group("/api/v1", router => {
   router.get("/todos", (req, res) => {
     res.send(todos);
   });
 });

/*
router.get("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  res.send(todos[index]);
});

app.use(express.json());


*/

/*
app.patch("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  const data = req.body;
  todos[index] = { ...todos[index], ...data };
  res.send(todos[index]);
});

app.delete("/todo/:id", (req, res) => {
  const id = req.params.id;
  const index = id - 1;
  todos.splice(index, 1);
  res.send(todos);
});

app.get("/", (req, res) => {
  res.send("Hello Nuri indayani");
});
*/

app.listen(port, () => console.log(`Listening on port ${port}!`));
