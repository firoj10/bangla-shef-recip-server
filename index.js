const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Dragon is running')
});

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`)
})