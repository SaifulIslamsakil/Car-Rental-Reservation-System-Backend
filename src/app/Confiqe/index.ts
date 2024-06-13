import env from "dotenv"
import path from "path"

env.config(({path:path.join(process.cwd(), ".env")}))


export const Confiqe = {
    Port : process.env.PORT,
    Database_Url : process.env.DATABASE_URL,
    Salt_Rounds : process.env.SALT_ROUNDS ,
    Access_Token : process.env.ACCESS_TOKEN ,
    REFARWESH_TOKEN : process.env.REFARWESH_TOKEN  ,
}
   