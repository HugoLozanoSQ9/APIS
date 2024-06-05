//segundo 
const jwt = require('../lib/jwt')
const encrypt = require('../lib/encrypt')
const Koders = require('../models/koders.model')
const createError = require('http-errors')


async function login(email, password) {

    const koder = await Koders.findOne({ email: email })

    if (!koder) throw createError(401, "Invalid data mail")

    const isPasswordValid = await encrypt.compare(password, koder.password)

    if (!isPasswordValid) throw createError(401, "Invalid data pass")

    const token = jwt.sign({ id: koder._id })

    return token

}

module.exports = {
    login
}