const Pet = require('../models/pet');
module.exports = {
    new: newPets,
    create,
    index,
    show,
    edit
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

async function show(req, res) {
    const { id } = req.params;
    const pet = await Pet.findOne({ _id: id })
    res.render('pets/show', {
        p: pet
    })
}
// async function index(req, res) {
//     const cats = await Pet.findOne({ breed: 'cats' });
//     const dogs = await Pet.findOne({ breed: 'dogs' });
//     const fish = await Pet.findOne({ breed: 'fish' });
//     const birds = await Pet.findOne({ breed: 'birds' });

//     const pets = [cats, dogs, fish, birds];
//     res.render('pets/index', {
//         pets: pets
//     })
// }
async function index(req, res) {
    const cats = await Pet.find({ breed: 'cats' });
    res.render('pets/index', {
        pets: cats
    })
}

async function edit(req, res) {
    // const { id } = req.params;
    const pets = await Pet.find({});
    res.render('pets/edit', {
        pets: pets
    })
}