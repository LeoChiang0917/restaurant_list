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

app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurants = restaurantList.results.filter((restaurant) => {return restaurant.name.toLowerCase().includes(keyword.toLowerCase())})
    res.render('index', {res: restaurants, keyword: keyword})
})

app.get('/restaurants/:id',(req,res)=>{
    
    const restaurant = restaurantList.results.find(restur=>restur.id.toString()===req.params.id)
    res.render('show',{restur: restaurant})
})

app.listen(port,()=>{
    console.log(`Express is listening on localhost:${port}`)
})