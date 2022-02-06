import {Router} from "express"
import * as controllers from "../controllers/tracker.js"

const router = Router()

router.post("/tracker/create", controllers.createTracker)
router.post("/tracker/update", controllers.updateTracker)

export default router
