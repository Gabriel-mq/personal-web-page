const express = require('express'),
  app = express(),
  path = require('path')

const PORT = process.env.PORT || 3000

const routes = require('./src/routes/router')

app.listen(PORT, () => {
  console.log('server running')
})

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './src/views'))

app.use(express.static('./public'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', routes)

app.use((req, res, next) => {
  res.status(404).render('not-found')
})
