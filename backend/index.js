import express from "express";
const PORT = 3000;
const app = express();


app.get('/', (req, res) => {
    res.json({
        msg: "hello"
    })
})

app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`);
})