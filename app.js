// introduce framwork
const express = require('express') // express
const exphbs = require('express-handlebars') // handlebars
const bodyParser = require('body-parser')
const generateSayings = require('./generate_sayings')

// define related variables
const app = express()

// create engine and custom helper
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
  helpers: {
    if_checked: function (occupation, choosedOccupation, options) {
      if (occupation === choosedOccupation) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    }
  }
})

// set up template engine
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// make static folder
app.use(express.static('public'))

// set up body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// configure routers
app.get('/', (req, res) => {
  res.render('index', { style: "index.css" })
})
app.get('/sayings', (req, res) => {
  const occupation = req.query.occupation
  const sayings = generateSayings(occupation)
  res.render('index', {
    style: "index.css",
    occupation,
    sayings
  })
})

// listen server
app.listen(3000, () => {
  console.log('This server is listening on http://localhost:3000')
})