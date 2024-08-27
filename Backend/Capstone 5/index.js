import express from "express";
import pg from "pg";
import axios from "axios";

// Initialize Express and PostgreSQL
const app = express();
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "BookCover",
  password: "Arunodaya#23",
  port: 5432,
});
db.connect();

// Set up view engine and static files
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Home route to display books
app.get("/", async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM books ORDER BY read_date DESC"
    );
    res.render("index", { books: result.rows });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).send("Server Error");
  }
});

// Route to add a new book
app.post("/add-book", async (req, res) => {
  const { title, author, rating, notes, read_date, isbn } = req.body;
  try {
    // Fetch cover URL from Open Library API
    const coverResponse = await axios.get(
      `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`
    );
    const cover_url = coverResponse.request.res.responseUrl;

    // Insert the new book into the database
    await db.query(
      "INSERT INTO books (title, author, rating, notes, read_date, cover_url) VALUES ($1, $2, $3, $4, $5, $6)",
      [title, author, rating, notes, read_date, cover_url]
    );
    res.redirect("/");
  } catch (error) {
    console.error("Error adding book:", error);
    res.status(500).send("Server Error");
  }
});

// Route to delete a book
app.post("/delete-book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM books WHERE id = $1", [id]);
    res.redirect("/");
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).send("Server Error");
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
