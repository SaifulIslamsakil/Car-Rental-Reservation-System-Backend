import mongoose from "mongoose";
import app from "./app"
import { Confiqe } from "./app/Confiqe";

const main = async () => {
    await mongoose.connect(Confiqe.Database_Url as string);
    app.listen(Confiqe.Port, () => {
        console.log(`server in runing on port ${Confiqe.Port}`)
    })
}

main()