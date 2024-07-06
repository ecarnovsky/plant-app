import { supabaseClient } from "../supabase-auth"
function CreatePlantBtn(){
    return(
        <button onClick={createPlant}>Create Plant</button>
    )
}

export default CreatePlantBtn

export async function createPlant(){

}