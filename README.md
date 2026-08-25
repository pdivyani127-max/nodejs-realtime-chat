# MongoDB & NoSQL Library System Assignment

## Overview
This assignment demonstrates MongoDB and NoSQL fundamentals by building a simple library database containing books, authors, and genres. It covers MongoDB setup, document data modeling, CRUD operations, search queries, indexing, and the importance of NoSQL systems.

## Topics Demonstrated
- MongoDB installation and configuration
- NoSQL and document-oriented data modeling
- Databases and collections
- Create, Read, Update, Delete (CRUD)
- Filtering and searching
- Aggregation
- Indexing
- Relationships using references
- Advantages of NoSQL in modern applications

## Project Structure
```text
mongodb/
  library.js
report/
  mongodb-report.md
README.md
```

## How to Run
1. Install MongoDB Community Server and make sure the MongoDB service is running.
2. Open MongoDB Shell (`mongosh`).
3. Run:
   `load("mongodb/library.js")`
4. The script creates the `library` database and its collections, inserts sample data, creates indexes, and demonstrates CRUD/search/aggregation queries.

## Notes
The sample data is intentionally small so that each operation can be easily understood and tested.
