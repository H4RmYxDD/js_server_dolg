import express from 'express'
import movieRoutes from './routes/movies.Routes.js'

const app = express()

app.use(express.json())
app.use('/', movieRoutes)

app.listen(3000, () => {
    console.log('Server runs')
})