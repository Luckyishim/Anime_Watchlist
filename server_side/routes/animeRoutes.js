import express from "express";
import { createAnime, deleteAllAnime, deleteAnime, getActionAnime, getAllAnime, getAnimeById, getAnimeCount, getAnimeStatus, getAnimeStatusCounts, updateAnime } from "../controllers/animeController.js";


const router = express.Router();

router.get('/anime', getAllAnime)
router.get('/anime/total', getAnimeCount)
router.get('/anime/statCount', getAnimeStatusCounts)
router.get('/anime/types', getActionAnime)
router.get('/anime/state', getAnimeStatus)
router.get('/anime/:id', getAnimeById)
router.post('/anime', createAnime)
router.put('/anime/:id', updateAnime)
router.delete('/anime/:id', deleteAnime)
router.delete('/anime', deleteAllAnime)

export default router;