import {Router} from "express"
import * as controllers from "../controllers/exercise.js"
// import authController from "../utilities/authController.js"

const router = Router()

router.post("/create", controllers.createExercise)
router.post("/update", controllers.updateExercise)
router.get("/:id", controllers.fetchExercise)
router.get("/exercises", controllers.fetchAllExercises)

export default router
