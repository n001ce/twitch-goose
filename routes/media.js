import { Router } from 'express'
import * as mediaCtrl from '../controllers/media.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

export {
  router
}

const router = Router()


router.use(decodeUserFromToken)
router.get('/:type', checkAuth,  mediaCtrl.index)
router.get('/search/games/:query',  mediaCtrl.searchGames)
router.get('/search/streams/:query',  mediaCtrl.searchStreams)
router.post('/addMedia', checkAuth, mediaCtrl.addMedia)
