import env from "dotenv"
import path from "path"

env.config(({path:path.join(process.cwd(), ".env")}))


export const Confiqe = {
    Port : process.env.PORT,
    Node_Env : process.env.NODE_ENV,
    Database_Url : process.env.DATABASE_URL,
    Salt_Rounds : process.env.SALT_ROUNDS ,
    Access_Secret  : process.env.ACCESS_TOKEN ,
    Refaresh_Secret : process.env.REFRESH_TOKEN ,
    Accress_Expires : process.env.ACCRESS_EXPTRES  ,
    Refaresh_Expires : process.env.REFARESH_EXPTRES  
}
   