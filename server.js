const express = require("express"),
   axios = require ("axios"),
   cors = require("cors"),
   app = express(),
   PORT = process.env.PORT || 8080;

   app.use(cors());

   app.get('/', (req, res) => {
     console.log(req)
      res.send("👍 CORSing is up!")
   })

   app.get('/request', (req, res) => {

         axios({
            baseURL: req.query.url,
            headers: {"authorization": req.headers.authorization}
         })
         .then(({data}) => {
            res.json(data).end();
         })
         .catch(e => console.log(e.message))

   })

   app.listen(PORT, () => console.log("🌍 => corsing listening on port", PORT, `@ http://0.0.0.0:${PORT}`))