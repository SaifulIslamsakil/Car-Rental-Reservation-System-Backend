import app from "./app"

const main = ()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`server in runing on port ${5000}`)
    })
}

main()