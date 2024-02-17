export const queries = {
    SelectAllPosts:"SELECT * FROM posts",
    SelectAPostById:"SELECT * FROM posts WHERE id = ?",
    InsertIntoPosts:"INSERT INTO posts SET ?",
    UpdatePostById: "UPDATE posts SET ? WHERE id = ?",
    DeletePostById:"DELETE FROM posts WHERE id = ?"
};