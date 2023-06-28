const express = require("express");
const app = express();

app.get('/', (req, res)=> {
    res.json({ Beer: '99 bottles of beer on the wall', 
               Link: 'http://localhost:4000/98'});
  })


app.get('/:number_of_bottles', (req, res)=> {
    const params = req.params.number_of_bottles
    const base_url = "http://localhost:4000/";
 
 res.json({
    beer: `${params} bottles of beer on the wall`,
    link: `${base_url}${params > 0 ? params - 1 : ""}`,
    
          })
    });


   
app.listen(4000, () => {
  console.log("app listening on port 4000");
});

