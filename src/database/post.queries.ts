export const queries = {
    SelectAllPosts:"SELECT * FROM posts",
    SelectAPostById:"SELECT * FROM posts WHERE id = ?",
    InsertIntoPosts:"INSERT INTO posts SET ?",
    UpdatePostById: "UPDATE posts SET title = ?, description = ?, image_url = ? WHERE id = ?",
    DeletePostById:"DELETE FROM POST WHERE id = ?"
};