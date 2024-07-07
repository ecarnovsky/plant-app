export default class Note{
    name: string
    description: string
    user_id: string | undefined

    constructor(name:string, description: string, user_id: string | undefined){
        this.name = name
        this.description = description
        this.user_id = user_id
    }
}