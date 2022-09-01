import joi from "joi"
let options = ['Administrator', 'Seller', 'Customer'];
const createUserSchema = joi.object({
  name: joi.string().required(),
  lastName: joi.string().required(),
  phoneNumber: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  role: joi.string().valid(...options),
    street: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    location: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    outdoorNumber: joi.alternatives().conditional('role', { is: 'Customer', then: joi.number().integer().required() }),
    interiorNumber: joi.alternatives().conditional('role', { is: 'Customer', then: joi.number().integer() }),
    betweenStreets: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    city: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    country: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
    zipCode: joi.alternatives().conditional('role', { is: 'Customer', then: joi.number().integer().required() }),
    references: joi.alternatives().conditional('role', { is: 'Customer', then: joi.string().required() }),
  contacts: joi.alternatives().conditional('role', { is: 'Customer', then: joi.array().items(joi.string().optional()) }),
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