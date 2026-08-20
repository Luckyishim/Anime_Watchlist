import Anime from "../models/Anime.js"


//contorllers for each routes

// To get all Anime
export const getAllAnime = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const { sort, title } = req.query;
    let sortOption = { _id: -1 }; 
    let filter = {};

    if (sort === "rating") {
        sortOption = { rating: -1 };
    }
    if (sort === "episodes") {
        sortOption = { episodes: -1 };
    }
    if (title) {
        filter = {
            title: { $regex: title, $options: "i" }
        };
    }
//for filtering and dividing pagination in frontend
    const totalItems = await Anime.countDocuments(filter);
    const totalPages = Math.ceil(totalItems / limit);

    const anime = await Anime.find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit);


        //help in frontend UI and all
    res.json({
        data: anime,
        currentPage: page,
        totalPages,
        totalItems,
    });
};

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
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 9;

    const skip = (page - 1) * limit;

    const filter = {
        ...(req.query.genre && { genre: req.query.genre }),
        ...(req.query.title && {
            title: { $regex: req.query.title, $options: "i" }
        })
    }

    const anime = await Anime.find(filter)
        .skip(skip)
        .limit(limit)
    res.json(anime)
}

//To get Anime based on status
export const getAnimeStatus = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 9;

    const skip = (page - 1) * limit;

    const filter = {
        ...(req.query.status && { status: req.query.status }),
        ...(req.query.title && {
            title: { $regex: req.query.title, $options: "i" }
        })
    }

    const anime = await Anime.find(filter)
        .skip(skip)
        .limit(limit);

    res.json(anime);
};

