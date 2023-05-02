const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;




const categories = require('./data/categories.json');
const food= require('./data/food.json');
app.use(cors());

app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

app.get('/food', (req, res) =>{
    res.send(food)
});  

app.get('/categories', (req, res) =>{
    console.log(categories);
    res.send(categories);
})


app.get('/categories/:id', (req, res) =>{
    const id = parseInt(req.params.id);
   console.log(id);
   const categoryNews = food.filter(n=> parseInt(n.category_id) === id);
   res.send(categoryNews)

});


app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})