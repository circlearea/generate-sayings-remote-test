// introduce framwork
const express = require('express') // express
const exphbs = require('express-handlebars') // handlebars

// define related variables
const app = express()

// set up template engine
app.engine('hbs', exphbs({ defaultLayout: "main", extname: "hbs" }))
app.set('view engine', 'hbs')

// 
app.use(express.static('public'))

// configure routers
app.get('/', (req, res) => {
  res.render('index', { style: "index.css" })
})

// listen server
app.listen(3000, () => {
  console.log('This server is listening on http://localhost:3000')
})