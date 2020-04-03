const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    spotify_id: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    }
})

userSchema.virtual('records', {
    ref: 'Records',
    localField: '_id',
    foreignField: 'owner'
})
userSchema.virtual('favorites', {
    ref: 'Favorites',
    localField: '_id',
    foreignField: 'owner',
    justOne: true
})


const User = mongoose.model('User', userSchema)

module.exports = User