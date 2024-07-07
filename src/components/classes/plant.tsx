export default class Plant{
    name: string | undefined
    description: string | undefined
    user_id: string | undefined
    species: string | undefined

    constructor(name: string | undefined, description: string | undefined, user_id: string | undefined, species: string | undefined){
        this.name = name
        this.description = description
        this.user_id = user_id
        this.species = species
    }
}