import { ISpecificationRepository } from "../modules/cars/repositories/ISpecificationsRepository";


interface Irequest{
    name: string,
    description: string
}

class CreateSpecificationService {

    constructor(private specificationsRepository: ISpecificationRepository){

    }

    execute({name, description}: Irequest): void{
        const specificationAlreadyExists = this.specificationsRepository.findByname(name);

        if (specificationAlreadyExists){
            throw new Error ("Especificação já cadastrada")
        }

        this.specificationsRepository.create({
            name, 
            description
        })
    }


}

export {CreateSpecificationService}