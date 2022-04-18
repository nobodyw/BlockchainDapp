require('dotenv').config();

module.exports = {
    env:{
        ALCHEMY_API_KEY_ROPSTEN : process.env.ALCHEMY_API_KEY_ROPSTEN,
        ALCHEMY_API_KEY_MUMBAI : process.env.ALCHEMY_API_KEY_MUMBAI,
        ALCHEMY_API_KEY_MAINNET: process.env.ALCHEMY_API_KEY_MAINNET,
        ALCHEMY_API_KEY_POLYGON: process.env.ALCHEMY_API_KEY_POLYGON,
    }
}