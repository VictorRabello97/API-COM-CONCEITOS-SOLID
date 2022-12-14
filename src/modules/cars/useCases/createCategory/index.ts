import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryContoller";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";



const categoryRepository = CategoriesRepository.getInstance()
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase)

export {createCategoryController}