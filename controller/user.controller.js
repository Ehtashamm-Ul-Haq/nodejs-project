const { user } = require('../services')

const getRequest = (req, res) => {
    try {
        user.demo(req, res)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getRequest
}