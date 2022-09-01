import joi from "joi"
const createUserSchema = joi.object({
  productName: joi.string().required(),
  description: joi.string().required(),
  specs: joi.object({specsTitle: joi.string(), specsDescription: joi.string()}),
  category: joi.string().required(),
  price: joi.number().integer().required(),
  stock: joi.number().integer().required()
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