import { Request, Response } from "express";
import { InserPost, SelectAPostById, SelectAllPost } from "../../models/v1/posts.models";
import { Post } from "../../interface/post.interface";
import { ErrorPost } from '../../services/post.validate';

export const getPosts = async ( req:Request, res:Response ):Promise<Response> => {
    try {
        const posts = await SelectAllPost();
        return res.status(200).json({
            ok:true, 
            posts
        });
    } catch (error:any) {
        console.error("Something went weong on getPosts: ",error);
        return res.status(500).json({
            ok:false, 
            msg:"Something went wrong on indexWelcome",
            error,
        });
    };
};
export const getPost = async ( req:Request, res:Response ):Promise<Response> => {
    const { id } = req.params
    try {
        const post:any = await SelectAPostById(id);
        if(!post[0]){
            return res.status(404).json({
                ok:false,
                msg:"No se encontro id con ese post."
            });
        };
        return res.status(200).json({
            ok:true, 
            post
        });
    } catch (error:any) {
        console.error("Something went weong on getPosts: ",error);
        return res.status(500).json({
            ok:false, 
            msg:"Something went wrong on indexWelcome",
            error,
        });
    };
};

export const createPost = async ( req:Request, res:Response ):Promise<Response>  => {
    try {
        const newPost: Post = req.body;
        const isError = ErrorPost(newPost.title, newPost.description);
        if(isError){
            return res.status(400).json({
                ok:false,
                isError,
            });
        };
        await InserPost( newPost );
        return res.status(200).json({
            ok:true, 
            msg:"Post created",
        });

    } catch (error:any) {
        console.error("Something went wrong on getPosts: ",error);
        return res.status(500).json({
            ok:false, 
            msg:"Something went wrong on getPosts",
            error,
        });
    };
};

