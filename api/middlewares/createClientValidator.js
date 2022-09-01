import joi from "joi"
let options = ['Administrator', 'Seller', 'Customer'];
const createUserSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  phoneNumber: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  role: joi.string().valid("Customer"),
  adress: joi.object({
    street: joi.string().required(),
    location: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    outdoorNumber: joi.number().integer().required() ,
    interiorNumber: joi.number().integer() ,
    betweenStreets:  joi.string().required(),
    city: joi.string().required() ,
    country: joi.string().required() ,
    zipCode: joi.number().integer().required() ,
    references: joi.string().required() ,
  }),
  contacts: joi.array().items(joi.string()),
  isActive: joi.boolean().default(true).required(),
})


export default async (req, res, next) => {
  try {
    await createUserSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Error de validacion',
      error
    })
  }
}