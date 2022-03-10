import {Router} from "express"
import * as controllers from "../controllers/user.js"

const router = Router()

router.post("/signup", controllers.signUp)
router.post("/signin", controllers.signIn)
router.get("/signout", controllers.singOut)

export default router
