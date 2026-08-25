// MongoDB Library System Assignment
// Run this file in mongosh with: load("mongodb/library.js")

use("library");

// Clean previous sample data so the script can be safely re-run.
db.books.drop();
db.authors.drop();
db.genres.drop();

// --------------------
// 1. CREATE: Authors
// --------------------
db.authors.insertMany([
  {
    _id: "A001",
    name: "George Orwell",
    country: "United Kingdom",
    birthYear: 1903
  },
  {
    _id: "A002",
    name: "Jane Austen",
    country: "United Kingdom",
    birthYear: 1775
  },
  {
    _id: "A003",
    name: "Yuval Noah Harari",
    country: "Israel",
    birthYear: 1976
  },
  {
    _id: "A004",
    name: "J. K. Rowling",
    country: "United Kingdom",
    birthYear: 1965
  }
]);

// --------------------
// 2. CREATE: Genres
// --------------------
db.genres.insertMany([
  { _id: "G001", name: "Dystopian" },
  { _id: "G002", name: "Classic" },
  { _id: "G003", name: "History" },
  { _id: "G004", name: "Fantasy" }
]);

// --------------------
// 3. CREATE: Books
// --------------------
db.books.insertMany([
  {
    _id: "B001",
    title: "1984",
    authorId: "A001",
    genreId: "G001",
    publishedYear: 1949,
    copies: 6,
    available: true,
    price: 399
  },
  {
    _id: "B002",
    title: "Animal Farm",
    authorId: "A001",
    genreId: "G001",
    publishedYear: 1945,
    copies: 4,
    available: true,
    price: 299
  },
  {
    _id: "B003",
    title: "Pride and Prejudice",
    authorId: "A002",
    genreId: "G002",
    publishedYear: 1813,
    copies: 5,
    available: true,
    price: 349
  },
  {
    _id: "B004",
    title: "Sapiens",
    authorId: "A003",
    genreId: "G003",
    publishedYear: 2011,
    copies: 3,
    available: true,
    price: 599
  },
  {
    _id: "B005",
    title: "Harry Potter and the Philosopher's Stone",
    authorId: "A004",
    genreId: "G004",
    publishedYear: 1997,
    copies: 8,
    available: true,
    price: 499
  }
]);

print("\n=== CREATE COMPLETE ===");
print("Books: " + db.books.countDocuments());
print("Authors: " + db.authors.countDocuments());
print("Genres: " + db.genres.countDocuments());

// --------------------
// 4. READ: Basic queries
// --------------------
print("\n=== ALL BOOKS ===");
db.books.find().forEach(printjson);

print("\n=== BOOKS PUBLISHED AFTER 1950 ===");
db.books.find({ publishedYear: { $gt: 1950 } }).forEach(printjson);

print("\n=== BOOKS WITH PRICE UNDER 500 ===");
db.books.find({ price: { $lt: 500 } }).forEach(printjson);

print("\n=== SEARCH BOOK TITLE CONTAINING 'Harry' ===");
db.books.find({ title: { $regex: "Harry", $options: "i" } }).forEach(printjson);

print("\n=== SEARCH AUTHOR BY NAME ===");
db.authors.find({ name: { $regex: "orwell", $options: "i" } }).forEach(printjson);

print("\n=== AUTHORS FROM UNITED KINGDOM ===");
db.authors.find({ country: "United Kingdom" }).forEach(printjson);

// --------------------
// 5. UPDATE
// --------------------
print("\n=== UPDATE BOOK ===");
db.books.updateOne(
  { _id: "B001" },
  { $inc: { copies: 1 }, $set: { available: true } }
);
printjson(db.books.findOne({ _id: "B001" }));

print("\n=== UPDATE AUTHOR ===");
db.authors.updateOne(
  { _id: "A003" },
  { $set: { country: "Israel" } }
);

// --------------------
// 6. DELETE
// --------------------
print("\n=== DELETE DEMO ===");
db.books.deleteOne({ _id: "B005" });
print("Harry Potter record deleted for CRUD demonstration.");

print("\n=== RESTORE DELETED SAMPLE BOOK ===");
db.books.insertOne({
  _id: "B005",
  title: "Harry Potter and the Philosopher's Stone",
  authorId: "A004",
  genreId: "G004",
  publishedYear: 1997,
  copies: 8,
  available: true,
  price: 499
});

// --------------------
// 7. INDEXES
// --------------------
db.books.createIndex({ title: 1 });
db.books.createIndex({ authorId: 1 });
db.authors.createIndex({ name: 1 });

print("\n=== INDEXES CREATED ===");
printjson(db.books.getIndexes());
printjson(db.authors.getIndexes());

// --------------------
// 8. AGGREGATION
// --------------------
print("\n=== BOOK COUNT BY AUTHOR ===");
db.books.aggregate([
  { $group: { _id: "$authorId", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } }
]).forEach(printjson);

print("\n=== BOOKS WITH AUTHOR AND GENRE ===");
db.books.aggregate([
  {
    $lookup: {
      from: "authors",
      localField: "authorId",
      foreignField: "_id",
      as: "author"
    }
  },
  {
    $lookup: {
      from: "genres",
      localField: "genreId",
      foreignField: "_id",
      as: "genre"
    }
  },
  {
    $project: {
      _id: 0,
      title: 1,
      publishedYear: 1,
      author: { $arrayElemAt: ["$author.name", 0] },
      genre: { $arrayElemAt: ["$genre.name", 0] }
    }
  }
]).forEach(printjson);

print("\n=== LIBRARY DATABASE READY ===");
