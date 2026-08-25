import express from 'express'
// import 

const app = express()
app.use(express.json())

// app.use ("/api/v1/cachorro",cachorro )

app.listen(3000,() => {
    console.log("Servidor porta 3000")
})

