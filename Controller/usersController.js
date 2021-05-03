const { User, sequelize } = require('../models');
const bcrypt = require('bcryptjs');
const { v4:uuidv4 } = require('uuid');

const usersController = {

    index: async (req, res) => {
        let users = await User.findAll();

        return res.json(users);
    },

    mybooks: (req, res) => {
        return res.render('mybooks')
    },

    registeruser: (req, res) => {
        return res.render('registeruser')
    },

    myprofile: (req, res) =>{
        return res.render('myprofile')
    },


    login: (req, res) =>{
        return res.render('login')
    },
    

    create: async (req, res) => {
        const { name, email,  password, gender, date_of_birth, phone_number, street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code} = req.body;
        
        const passwordCrypt = bcrypt.hashSync(password, 10);
        const user_id = uuidv4();
       
        const newUsers = await User.create({
            id: uuidv4(),
            name,
            email,
            password: passwordCrypt,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
            
        });


        return res.json(newUsers);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { name, email,  password, gender, date_of_birth, phone_number, street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code} = req.body;

        const user = await User.update({
            name,
            email,
            password: passwordCrypt,
            gender,
            date_of_birth,
            phone_number,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
            zip_code
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
