import Joi from 'joi';

const carValidator=Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Неправильна назва',
        'string.required': 'Це поле Обов\'язкове'
    }),
    price:Joi.number().min(0).max(1000000).required(),
    year:Joi.number().min(0).max(new Date().getFullYear()).required()


});

export {
    carValidator
}