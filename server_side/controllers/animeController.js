import Anime from "../models/Anime.js"


//contorllers for each routes

//To get all Anime
export const getAllAnime = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const skip = (page - 1) * limit;

    const anime = await Anime.find()
    .skip(skip)
    .limit(limit);
res.json(anime)
}

//To get Anime by ID
export const getAnimeById = async (req, res) => {
    const anime = await Anime.findById(req.params.id)
    res.json(anime)
}

//To create Anime
export const createAnime = async (req, res) => {
    const anime = await Anime.create(req.body);
    res.json(anime)
}

//To Update Anime by ID
export const updateAnime = async (req, res) => {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body);
    res.json(anime)
}


// To Delete Anime by ID
export const deleteAnime = async (req, res) => {
    const anime = await Anime.findByIdAndDelete(req.params.id)
    res.json(anime)
}

//To delete all
export const deleteAllAnime = async (req, res) => {
    const anime = await Anime.deleteMany({})
    res.json(anime)
}

//To get Anime based on genre
export const getActionAnime = async (req, res) => {
    const filter = req.query.genre ? { genre: req.query.genre } : {}
    const anime = await Anime.find(filter)
    res.json(anime)
}

//To get Anime based on status
export const getAnimeStatus = async (req, res) => {
    const status = req.query.status ? { status: req.query.status } : {}
    const anime = await Anime.find(status)
    res.json(anime)
}
