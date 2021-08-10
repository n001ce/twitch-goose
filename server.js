import 'dotenv/config.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as usersRouter } from './routes/users.js'
import { router as authRouter } from './routes/auth.js'
import { router as gamesRouter } from './routes/games.js'
import { router as reviewsRouter } from './routes/reviews.js'
import { router as messagesRouter } from './routes/messages.js'
import { router as chatsRouter } from './routes/chats.js'
import('./config/database.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/auth', authRouter)
app.use('/games', gamesRouter)
app.use('/reviews', reviewsRouter)
app.use('/messages', messagesRouter)
app.use('/chatroom', chatsRouter)

app.get('/*', function (req, res) {
  res.sendFile(
    path.dirname(fileURLToPath(import.meta.url), 'build', 'index.html')
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
