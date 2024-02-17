import { Request, Response } from "express";

export const indexWelcome = async (req:Request, res:Response) => {
    try {
        return res.status(200).json({
            ok:true, 
            msg:"welcome to my api"
        })
    } catch (error:any) {
        console.error("Something went weong on indexWelcome: ",error);
        return res.status(500).json({
            ok:false, 
            msg:"Something went wrong on indexWelcome",
            error,
        });
    };
};