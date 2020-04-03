const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    records: [
        {
            _id: false,
            listId: {
                type: String,
                required: true
            },
            points: {
                type: Number,
                required: true
            }
        }
    ]
})

const Records = mongoose.model('Records', recordSchema)

module.exports = Records