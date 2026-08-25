# MongoDB and NoSQL Library System Report

## 1. Introduction

MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like BSON documents. Unlike traditional relational databases that organize information into fixed tables and rows, MongoDB uses collections and documents. This makes it useful for applications where data structures can evolve over time.

This project implements a small library system containing books, authors, and genres. The database demonstrates database creation, document insertion, CRUD operations, search queries, indexes, and aggregation.

## 2. MongoDB Installation and Configuration

A typical local MongoDB setup involves:

1. Downloading MongoDB Community Server from the official MongoDB website.
2. Installing the server and MongoDB Shell (`mongosh`).
3. Starting the MongoDB service.
4. Opening `mongosh` to interact with the server.
5. Creating or selecting a database using `use("library")`.

MongoDB can also be hosted using MongoDB Atlas, a cloud-based database service.

## 3. Data Model

The project uses three collections:

### Authors
Each author document contains:
- `_id`
- `name`
- `country`
- `birthYear`

### Genres
Each genre document contains:
- `_id`
- `name`

### Books
Each book document contains:
- `_id`
- `title`
- `authorId`
- `genreId`
- `publishedYear`
- `copies`
- `available`
- `price`

The `authorId` and `genreId` fields act as references to documents in the authors and genres collections. This demonstrates how related information can be modeled in MongoDB.

## 4. CRUD Operations

### Create
`insertMany()` is used to add authors, genres, and books.

Example:
```javascript
db.books.insertOne({
  _id: "B006",
  title: "Example Book",
  authorId: "A001",
  genreId: "G002",
  publishedYear: 2026,
  copies: 2,
  available: true,
  price: 450
});
```

### Read
`find()` retrieves documents and supports filters.

```javascript
db.books.find({ publishedYear: { $gt: 1950 } });
```

### Update
`updateOne()` changes existing documents.

```javascript
db.books.updateOne(
  { _id: "B001" },
  { $inc: { copies: 1 } }
);
```

### Delete
`deleteOne()` removes a document.

```javascript
db.books.deleteOne({ _id: "B006" });
```

## 5. Search Queries

The project includes several useful searches.

### Search by book title
```javascript
db.books.find({
  title: { $regex: "Harry", $options: "i" }
});
```

### Search books by publication year
```javascript
db.books.find({
  publishedYear: { $gt: 1950 }
});
```

### Search books by price
```javascript
db.books.find({
  price: { $lt: 500 }
});
```

### Search authors by name
```javascript
db.authors.find({
  name: { $regex: "orwell", $options: "i" }
});
```

### Search authors by country
```javascript
db.authors.find({
  country: "United Kingdom"
});
```

## 6. Aggregation

MongoDB's aggregation framework can process documents and produce summarized results. The project uses `$group` to count books by author and `$lookup` to combine book information with author and genre documents.

For example:
```javascript
db.books.aggregate([
  { $group: { _id: "$authorId", totalBooks: { $sum: 1 } } }
]);
```

The `$lookup` stage is useful when an application needs information from related collections.

## 7. Indexing

Indexes improve query performance by allowing MongoDB to locate matching documents more efficiently. The project creates indexes on book titles, author IDs, and author names.

```javascript
db.books.createIndex({ title: 1 });
db.books.createIndex({ authorId: 1 });
db.authors.createIndex({ name: 1 });
```

Indexes should be selected carefully because they also require storage and can add overhead to write operations.

## 8. Importance of NoSQL in Modern Applications

NoSQL databases are important because modern applications often handle large amounts of rapidly changing and semi-structured data. MongoDB provides a flexible schema, horizontal scalability, and a document model that maps naturally to application objects.

Common use cases include:
- Real-time applications
- Content management systems
- Product catalogs
- Mobile and web applications
- Analytics and event data
- Applications with frequently changing data structures

## 9. Advantages and Limitations

### Advantages
- Flexible document structure
- Easy handling of nested and semi-structured data
- Scalable architecture
- Powerful querying and aggregation
- Natural fit for many JavaScript applications

### Limitations
- Poorly designed schemas can lead to duplicated data
- Indexes consume storage and affect write performance
- Complex multi-table-style relationships can sometimes be easier in relational databases
- Developers must understand appropriate embedding and referencing strategies

## 10. Real-World Applications

A product catalog can store different product attributes in flexible documents. A social media application can store user profiles, posts, comments, and activity data. An analytics platform can store event records whose fields evolve over time.

MongoDB is therefore suitable when application data is diverse, changes frequently, or needs to scale horizontally.

## 11. Conclusion

This assignment demonstrates the core concepts of MongoDB and NoSQL through a library management example. The implementation covers data modeling, CRUD operations, search, indexing, and aggregation. The project also shows why document-oriented NoSQL databases are valuable for modern applications that require flexibility and scalability.

## 12. Files Included

- `mongodb/library.js` — complete MongoDB setup and query script.
- `README.md` — project overview and execution instructions.
- `report/mongodb-report.md` — detailed assignment report.
