    // RESPONSÁVEL POR CRIAR AS INTERFACES/PADRÕES A SEREM SEGUIDOS DE TIPAGEM

import { Category } from "../model/Category";


interface IcreateCategoryDTO{ // padrão interface informando que é string
    name: string;
    description: string;
}



interface IcategoriesRepository{
    list(): Category[]
    create({name, description}: IcreateCategoryDTO): void
    findByname(name: string): Category
}

export {IcategoriesRepository, IcreateCategoryDTO}