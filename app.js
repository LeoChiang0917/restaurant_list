const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/',(req,res)=>{
    
    res.render('index',{res:restaurantList.results})
})

app.get('/restaurants/:id',(req,res)=>{
    console.log(req.params.id)
    const restaurant = restaurantList.results.find(restur=>restur.id.toString()===req.params.id)
    res.render('show',{restur: restaurant})
})

app.listen(port,()=>{
    console.log(`Express is listening on localhost:${port}`)
})