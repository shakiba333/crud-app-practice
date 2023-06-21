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
    try {
        const pets = await Pet.find({});
        res.render('pets/index', {
            pets,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/pets/index`, { errorMsg: err.message });
    }
}
async function show(req, res) {
    try {
        const pet = await Pet.findById(req.params.id);
        res.render('pets/show', {
            pet,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/pets/show`, { errorMsg: err.message });
    }
}
async function edit(req, res) {
    try {
        const pet = await Pet.findById(req.params.id);
        res.render('pets/edit', {
            pet,
            errorMsg: ''
        })
    } catch (err) {
        res.render(`/pets/edit`, { errorMsg: err.message });
    }
}
async function update(req, res) {
    try {
        await Pet.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/pets/' + req.params.id)
    } catch (err) {
        res.render(`/pets/${req.params.id}/edit`, { errorMsg: err.message });

    }

}
async function deletePet(req, res) {
    try {
        await Pet.findByIdAndRemove(req.params.id);
        res.redirect('/pets')
    } catch (err) {
        res.render('/pets', { errorMsg: err.message });

    }
}