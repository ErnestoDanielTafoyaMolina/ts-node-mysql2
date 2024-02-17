import { createPool } from "mysql2/promise";
import { host, user, password, db } from "../config";

const connectionInfo = {
    host:host, 
    user: user,
    password:password,
    database: db, 
    connectionLimit:10
};

export async function connect(){
    const connection = await createPool(connectionInfo);
    return connection;
};