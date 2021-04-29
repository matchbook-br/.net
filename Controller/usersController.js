const { User, sequelize } = require('../models');
const bcrypt = require('bcryptjs');
const { v4:uuidv4 } = require('uuid');

const usersController = {

    index: async (req, res) => {
        let users = await User.findAll();

        return res.json(users);
    },

    registro: (req, res) => {
        return res.render('registro')
    },

    create: async (req, res) => {
        const { name, email,  password, gender, date_of_birth, phone_number, addresses_id } = req.body;
        
        const passwordCrypt = bcrypt.hashSync(password, 10);
       
        const newUsers = await User.create({
            id: uuidv4(),
            name,
            email,
            password: passwordCrypt,
            gender,
            date_of_birth,
            phone_number,
            addresses_id 
        });


        return res.json(newUsers);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { name, email,  password, gender, date_of_birth, phone_number, addresses_id } = req.body;

        const user = await User.update({
            name,
            password,
            email,
            date_of_birth,
            gender,
            phone_number,
            addresses_id
        }, {
            where: { id }
        });


        return res.json(user);
    },

    delete: async (req, res) => {
        const { id } = req.params;

        const Users = await User.destroy({
            where: { id }
        });

        return res.json(Users);
    }

}

module.exports = usersController;
