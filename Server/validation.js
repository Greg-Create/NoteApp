const Joi = require('@hapi/joi')

const registerValidation = data => {
    const schema = Joi.object( {
        name : Joi.string().min(5).required(),
        email: Joi.string().required(),
        password: Joi.string().required()
    })

return schema.validate(data)
}

const loginValidation = data => {
    const schema = Joi.object( {
        email: Joi.string().required(),
        password: Joi.string().required()
    })

return schema.validate(data)
}


module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation