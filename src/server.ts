//Creating an express server
import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) //allows the client to send us json data
app.use(express.urlencoded({extended: true}))

//custom middleware
// app.use((req, res, next) => {
//     req.shhhh_secret = 'doggy'
//     next()
// })

app.get('/', (req, res) => {
    console.log("hello")
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api', protect,router)

export default app