const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    breed: { type: String, enum: ['dogs', 'cats', 'fish', 'birds'] },
    age: { type: Number, default: 1 },
    name: String,
    gender: { type: String, enum: ['female', 'male'] },
    weight: Number
}, {
    timestamps: true
});
module.exports = mongoose.model('Pet', petSchema);
