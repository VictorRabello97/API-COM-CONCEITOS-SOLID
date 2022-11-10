import { Category } from "../model/Category"
import { IcategoriesRepository } from "./ICategoriesRepository";
import { IcreateCategoryDTO } from "./ICategoriesRepository";


class CategoriesRepository implements IcategoriesRepository {
    private categories: Category[] = []

    constructor(){
        this.categories = [] // array onde salva as categorias
    }

    create({description, name} : IcreateCategoryDTO){
        const category = new Category(); // model category

        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })     // criando categorias de carro
        
        this.categories.push(category)
    }

    list(): Category[]{
        return this.categories   //listas categorias cadastradas
    }

    findByname(name: string): Category {
        const category = this.categories.find((category) => category.name === name);
        return category
    } // para verificar se já existe essa categoria dentro do array de categorias. (Category)

}




export {CategoriesRepository}