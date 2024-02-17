import { connect } from "../../database/connection"
import { queries } from "../../database/post.queries";
import { Post } from "../../interface/post.interface";

export const SelectAllPost = async ():Promise<Post[]> => {
    const pool = await connect();
    const allPost = await pool.query( queries.SelectAllPosts );
    return allPost[0] as Post[];
};

export const SelectAPostById = async ( id:string ) => {
    const pool = await connect();
    const post = await pool.query( queries.SelectAPostById, id );
    return post[0];
};

export const InserPost = async( newPost:Post ):Promise<void> =>{
    const pool = await connect();
    await pool.query( queries.InsertIntoPosts, [newPost] );
};

export const UpdatePostWhereId = async ( id:string, post:Post ) => {
    const pool = await connect();
    await pool.query( queries.UpdatePostById, [post, id] )
};

export const DeletePostWhereID =async ( id:string ) => {
    const pool = await connect();
    await pool.query(queries.DeletePostById, id);
};