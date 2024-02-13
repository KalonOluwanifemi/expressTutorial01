const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.status('200').send('Home page')
})
app.get('/about', (req, res) =>{
    res.status(200).send('About')
})
app.all('*', (req, res)=>{
    res.status(400).send('OOPS WRONG PAGE. Taddah!!!')
})
app.listen(5000, ()=>{
    console.log('server is listening on port 5000...')
})