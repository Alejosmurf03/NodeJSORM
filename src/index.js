import httpServer from "#Config/http.js"
import '#Config/env.js'
import connectDB from "#Config/db.js"
// Se instala. npm i jose, para el manejo de jwt
const bootstrap= async ()=>{
    
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, () =>{
        console.log(`Servidor escuchando en el puerto ${process.env.PORT}`)
    })
}

bootstrap()