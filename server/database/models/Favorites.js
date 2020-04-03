const mongoose = require('mongoose')

const favoritesSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    favorites: [
        {
            _id: false,
            type: String,
            required: true
        }
    ],
})

const Favorites = mongoose.model('Favorites', favoritesSchema)

module.exports = Favorites