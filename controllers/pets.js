const Pet = require('../models/pet');
module.exports = {
    new: newPets,
    create,
    index
};

function newPets(req, res) {
    res.render('pets/new', { errorMsg: '' });
}
async function create(req, res) {

    try {
        await Pet.create(req.body);
        res.redirect('/pets');
    } catch (err) {
        console.log(err);
        res.render('pets/new', { errorMsg: err.message });
    }
}

async function index(req, res) {
    const petsAll = await Pet.find({})
    res.render('pets/index', {
        pets: petsAll
    })
}