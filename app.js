const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({default:'main'}))
app.set('view engine','handlebars')


app.get('/',(req,res)=>{
    res.render('index')
})

app.use(express.static('public'))

app.listen(port,()=>{
    console.log(`Express is listening on localhost:${port}`)
})