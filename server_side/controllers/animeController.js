import Anime from "../models/Anime.js"


//contorllers for each routes

//To get all Anime
export const getAllAnime = async (req, res)=>{
    const anime = await Anime.find();
    res.json(anime)
}


//To get Anime by ID
export const getAnimeById = async (req, res)=>{
    const anime = await Anime.findById(req.params.id)
    res.json(anime)
}

//To create Anime
export const createAnime = async (req, res)=>{
    const anime = await Anime.create(req.body);
    res.json(anime)
}

//To Update Anime by ID
export const updateAnime =  async (req, res)=>{
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body);
    res.json(anime)
}


// To Delete Anime by ID
export const deleteAnime = async(req, res)=>{
    const anime = await Anime.findByIdAndDelete(req.params.id)
    res.json(anime)
}