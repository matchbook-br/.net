const { Address, sequelize } = require('../models');
const {v4:uuidv4} = require('uuid');

const addressesController = {

    index: async (req, res) => {
        let addresses = await Address.findAll();

        return res.json(addresses);
    },

    create: async (req, res) => {
        const { city, state, neighborhood, cep, street, number, complement, users_id } = req.body;
        const newAddress = await Address.create({
            id:uuidv4(),
            city,
            state,
            neighborhood,
            cep,
            street,
            number,
            complement,
            users_id
        });

        return res.json(newAddress);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { city, state, neighborhood, cep, street, number, complement, users_id } = req.body;

        const address = await Address.update({
            id:uuidv4(),
            city,
            state,
            neighborhood,
            cep,
            street,
            number,
            complement,
            users_id
        }, {
            where: { id }
        });

        return res.json(address);

    },

    delete: async (req, res) => {
        const { id } = req.params;

        const address = await Address.destroy({
            where: { id }
        });

        return res.json(address);
    }
}

module.exports = addressesController;
