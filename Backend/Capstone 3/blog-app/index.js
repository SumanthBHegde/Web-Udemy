import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

let posts = []; // Array to store posts in memory

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
// Home Page - Show all posts
app.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

// Create Page - Display form to create a new post
app.get("/create", (req, res) => {
  res.render("create");
});

// Handle post creation
app.post("/create", (req, res) => {
  const newPost = {
    id: Date.now().toString(),
    title: req.body.title,
    content: req.body.content,
  };
  posts.push(newPost);
  res.redirect("/");
});

// Edit Page - Display form to edit an existing post
app.get("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  res.render("edit", { post: post });
});

// Handle post editing
app.post("/edit/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  post.title = req.body.title;
  post.content = req.body.content;
  res.redirect("/");
});

// Handle post deletion
app.post("/delete/:id", (req, res) => {
  posts = posts.filter((p) => p.id !== req.params.id);
  res.redirect("/");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
