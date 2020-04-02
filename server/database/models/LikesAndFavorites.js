const mongoose = require('mongoose')

const likesAndFavoritesSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    likes: [
        {
            _id: false,
            type: String,
            required: true
        }
    ],
    favorites: [
        {
            _id: false,
            type: String,
            required: true
        }
    ],
})

const LikesAndFavorites = mongoose.model('LikesAndFavorites', likesAndFavoritesSchema)

module.exports = LikesAndFavorites