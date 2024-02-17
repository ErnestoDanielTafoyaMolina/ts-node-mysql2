import express, { json, urlencoded, Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { port } from './config';

//routes
import indexRoutes from "./routes/v1/index.routes";
import postRoutes from "./routes/v1/post.routes";
class App{
    private app:Application;
    constructor ( private port?: number | string  ){
        
        this.app = express();
        this.middlewares();
        this.routes();
        this.settings();

    };

    private middlewares(){
        this.app.use(morgan( "dev" ));
        this.app.use(cors());
        this.app.use(json());
        this.app.use(urlencoded({ extended:false }));
    };

    private routes(){
        this.app.use("/v1", indexRoutes);
        this.app.use("/v1/posts", postRoutes)
    };

    private settings(){
        this.app.set( 'port', this.port )
    }

    public async listen(){
        const puerto = this.app.get( 'port' )
        await this.app.listen( puerto );
        console.log("Server on port: ", puerto);
    };
};

const app = new App(port);

export default app;