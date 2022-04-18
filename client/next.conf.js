require('dotenv').config();

module.exports = {
    env:{
        ALCHEMY_API_KEY_ROPSTEN : process.env.ALCHEMY_API_KEY_ROPSTEN,
        ALCHEMY_API_KEY_MUMBAI : process.env.ALCHEMY_API_KEY_MUMBAI
    }
}