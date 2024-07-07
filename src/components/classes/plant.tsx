export default class Plant{
    name: string
    description: string
    user_id: string | undefined
    species: string

    constructor(name:string, description: string, user_id: string | undefined, species: string){
        this.name = name
        this.description = description
        this.user_id = user_id
        this.species = species
    }
}