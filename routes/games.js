import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.get('/',  gamesCtrl.index)
router.get('/search/:query', gamesCtrl.search)