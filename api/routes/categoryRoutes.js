import express from "express";
import * as Category from '../controllers/categoryController.js'
import createCategoryValidator from "../middlewares/createCategoryValidator.js";

const router = express.Router();

router.route('/category')
    .post(createCategoryValidator, Category.createCategory)
    .get(Category.getAllCategory);

export default router;