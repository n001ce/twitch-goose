import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.get('/', checkAuth, gamesCtrl.index)
router.get('/search/:name')