const express = require('express');
const router = express.Router();
const Joi = require('joi');



const animals = [
    {id: 1, name: "Dog"},
    {id: 2, name: "Cat"},
    {id: 3, name: "Cow"}
];


//get metodi
router.get('/', (req, res) => {
    res.send(animals);
});

//post metodi
router.post('/', (req, res) => {
    const { error } = valAnimal(req.body);
    if (error) 
        return res.status(400).send(error.details[0].message);
        const animal = {
            id: animals.length + 1,
            name: req.body.name
        };

    animals.push(animal);
    res.status(201).send(animal);
});

//put metodi
router.put('/:id', (req, res)=>{
    const animal = animals.find(b=>b.id === parseInt(req.params.id));
    if (!animal)
        res.status(404).send('Bad request');
    animal.name = req.body.name;
    res.send(animal);  ;
});

//delete metodi
router.delete('/:id', (req, res)=>{
    const animal = animals.find(b=>b.id === parseInt(req.params.id));
    if (!animal)
        res.status(404).send('Manba yoq');
    const indexAnimal = animals.indexOf(animal);
    animals.splice(indexAnimal, 1);
    res.send(animal);
});


//function
function valAnimal(animal) {
    const schema = { name: Joi.string().required().min(3) };
    return Joi.validate(animal, schema);
} 


module.exports = router;