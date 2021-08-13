import { Router } from 'express'
import * as streamersCtrl from '../controllers/games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()

router.use(decodeUserFromToken)
