import express from "express";
import { createAnime, deleteAnime, getAllAnime, getAnimeById, updateAnime } from "../controllers/animeController.js";

const router = express.Router();

router.get('/anime', getAllAnime)
router.get('/anime/:id', getAnimeById)
router.post('/anime', createAnime)
router.put('/anime/:id', updateAnime)
router.delete('/anime/:id', deleteAnime)

export default router;