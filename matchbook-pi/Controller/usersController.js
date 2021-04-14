const {User, sequelize} = require('../models');

const usersController = {

    index: async (req, res) => {
        let users =  await User.findAll();
       
        return res.json(users);
    },
  
    create: async (req, res) => {
        const {name, password, email, date_of_birth, gender, phone_number} = req.body;
        const newUsers = await User.create ({
         name,
         password,
         email,
         date_of_birth,
         gender,
         phone_number
        });

        

        return res.json(newUsers);
   },

}

module.exports = usersController;