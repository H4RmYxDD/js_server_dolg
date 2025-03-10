import express from "express"

import { addMovie, deleteMovie, getAllMovies, getAllbooksByid, updateMovie } from "../controllers/moviecontrollers.js"

const router = express.Router()

router.get('/', getAllMovies)

router.get('/:id', getAllbooksByid)

router.post('/', addMovie)

router.put('/:id', updateMovie)

router.delete('/:id', deleteMovie)

export default router