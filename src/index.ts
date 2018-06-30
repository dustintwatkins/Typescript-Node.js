import app from './App'
import express from 'express'

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, (err:any) => {
    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})