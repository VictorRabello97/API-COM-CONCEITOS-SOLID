import { Specification } from "../../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationRepository{
    private specficiations: Specification[];

    constructor(){
        this.specficiations = [];
    }
    
    
    
    
    
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification();
        
        Object.assign(specification, {
            name, 
            description,
            created_at: new Date()
        })
        this.specficiations.push(specification)
    }
    findByname(name: string): Specification{
        const specification = this.specficiations.find((specficiation) => specification.name == name)
        return specification
}; 

}




export {SpecificationsRepository}