import Exercise from "../models/exercise.js"
import errorHandler from "../utilities/error.js"

export const createExercise = async (req, res) => {
  try {
    const exercise = new Exercise(req.body)
    await exercise.save()
    return res.json(errorHandler(false, "New exercise added", exercise))
  } catch (error) {
    return res.json(errorHandler(true, "Error creating exercise"))
  }
}

export const updateExercise = async (req, res) => {
  try {
    Exercise.findOneAndUpdate({_id: req.params.id}.req.body, (error, updatedExercise) => {
      if (updatedExercise) {
        res.json(errorHandler(false, "Updated Exercise", updatedExercise))
      } else {
        return res.json(errorHandler(true, "Error updating exercise", {error: error.message}))
      }
    })
  } catch (error) {
    return res.json(errorHandler(true, "Error updating exercise"))
  }
}

export const fetchAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find()
    return res.json(errorHandler(true, "Fetched all Exercises", exercises))
  } catch (error) {
    return res.json(errorHandler(false, "Error fetching exercises"))
  }
}

export const fetchExercise = async (req, res) => {
  try {
    const {id} = req.params
    const exercise = await Exercise.findById(id)
    if (exercise) {
      return res.json(exercise)
    }
    return res.json(errorHandler(true, "Exercise not found"))
  } catch (error) {
    res.json(errorHandler(false, "Error fetching exercise"))
  }
}
