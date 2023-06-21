const Pet = require('../models/pet');
module.exports = {
    new: newPets,
    create,
    index,
    show,
    edit,
    update,
    delete: deletePet
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
    const pets = await Pet.find({});
    res.render('pets/index', {
        pets
    })
}
async function show(req, res) {
    try {
        const pet = await Pet.findById(req.params.id);
        res.render('pets/show', {
            pet
        })
    } catch {
        console.log('error')
    }
}
async function edit(req, res) {
    const pet = await Pet.findById(req.params.id);
    res.render('pets/edit', {
        pet
    })
}
async function update(req, res) {
    try {
        await Pet.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/pets/' + req.params.id)
    } catch (e) {
        console.log(e);

    }

}
async function deletePet(req, res) {
    try {
        await Pet.findByIdAndRemove(req.params.id);
        res.redirect('/pets')
    } catch (e) {
        console.log(e);
    }
}