// RESPONSAVEL POR VERIFICAR SE A CATEGORIA JÁ ESTÁ CADASTRADA  E CADASTRAR / VALIDAÇÕES
//REGRA DE NEGOCIO

import { IcategoriesRepository } from "../../repositories/ICategoriesRepository";


interface Irequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    constructor(private categoriesRepository: IcategoriesRepository){

    }

    execute({ description, name}: Irequest): void {
        
        const categoryAlreadyExists = this.categoriesRepository.findByname(name)

    if (categoryAlreadyExists){
        throw new Error('Erro: Categoria já cadastrada')
    }
    this.categoriesRepository.create({name, description});
    }

}

export {CreateCategoryUseCase}