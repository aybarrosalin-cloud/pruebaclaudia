import express from 'express'
import userRoutes from './user/routes/user.route'
const app = express()
const port = process.env.DBPORT || 3000

app.use(express.json())
// crud : create - read - update - delete
// post - get - put - delete
app.get('/', (req, res) => {
    res.send('hola 6to!')
})

app.use('/users', userRoutes)

app.listen(port, () => {
    console.log('Servidor corriendo')
})