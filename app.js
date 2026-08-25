const { fetchPost } = require("./api");

async function main() {
  try {
    const post = await fetchPost();
    console.log("API Integration Demo");
    console.log("--------------------");
    console.log(`Post ID: ${post.id}`);
    console.log(`Title: ${post.title}`);
    console.log(`Body: ${post.body}`);
  } catch (error) {
    console.error("API request failed:", error.message);
    process.exitCode = 1;
  }
}

main();
