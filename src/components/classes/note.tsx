export default class Note{
    name: string
    description: string
    user_id: string | undefined
    plant_1_id: string | undefined
    plant_2_id: string | undefined

    constructor(name:string, description: string, user_id: string | undefined, plant_1_id: string | undefined, plant_2_id: string | undefined){
        this.name = name
        this.description = description
        this.user_id = user_id
        this.plant_1_id = plant_1_id
        this.plant_2_id = plant_2_id
    }
}