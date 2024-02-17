import { Router} from "express";
import { createPost, deletePost, getPost, getPosts, updatePost } from "../../controllers/v1/post.controllers";


const router = Router();

router.route('/')
    .get( getPosts )
    .post( createPost );

router.route('/:id')
    .get( getPost )
    .patch( updatePost )
    .delete( deletePost )

export default router;