import app from "./app.js"

app.listen(process.env.PORT, ()=>{
    console.log(`Server is connected at http://localhost:${process.env.PORT}`);
    }
)