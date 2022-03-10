import Tracker from "../models/tracker.js"
import Exercise from "../models/exercise.js"
import errorHandler from "../utilities/error.js"

export const createTracker = async (req, res) => {
  try {
    const tracker = new Tracker(req.body)
    await tracker.save()
    return res.json(errorHandler(false, "New Track has been created", tracker))
  } catch (error) {
    return res.json(errorHandler(true, "Error creating Tracker"))
  }
}

export const addToTracker = async (req, res) => {
  try {
    const exercise = Exercise.find
  } catch (error) {}
}

export const updateTracker = async (req, res) => {
  try {
    Tracker.findOneAndUpdate({_id: req.params.id}, req.body, (error, updatedTracker) => {
      if (updatedTracker) {
        res.json(errorHandler(false, "Tracker has been updated", updatedTracker))
      } else {
        return res.json(errorHandler(true, "Error updating tracker", {error: error.message}))
      }
    })
  } catch (error) {
    return res.json(errorHandler(true, "Error updating tracker"))
  }
}
