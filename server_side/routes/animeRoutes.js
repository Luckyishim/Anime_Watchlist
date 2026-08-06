import express from "express";
import { createAnime, deleteAllAnime, deleteAnime, getActionAnime, getAllAnime, getAnimeById, getAnimeStatus, updateAnime } from "../controllers/animeController.js";

const router = express.Router();

router.get('/anime', getAllAnime)
router.get('/anime/sports', getActionAnime)
router.get('/anime/star', getAnimeStatus)
router.get('/anime/:id', getAnimeById)
router.post('/anime', createAnime)
router.put('/anime/:id', updateAnime)
router.delete('/anime/:id', deleteAnime)
router.delete('/anime', deleteAllAnime)

export default router;