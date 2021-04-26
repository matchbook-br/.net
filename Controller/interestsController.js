const { Interest, sequelize } = require('../models');

const interestsController = {

    index: async (req, res) => {
        let interests = await Interest.findAll();

        return res.json(interests);
    },

    update: async (req, res) => {
        const { id } = req.params;
        const { users_id, generes_id } = req.body;

        const interest = await Interest.update({
            users_id,
            generes_id
        }, {
            where: { id }
        });


        return res.json(interest);
    }

}

module.exports = interestsController;