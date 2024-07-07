import { insertRow, supabaseClient } from "../supabase-auth"
import Plant from "./classes/plant";
function CreatePlantBtn(){
    return(
        <button onClick={createPlants}>Create Plant</button>
    )
}

export default CreatePlantBtn

export async function createPlants(){
    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()


    const plantName1: string | undefined = (document.querySelector('#plant-1-name') as HTMLInputElement | null)?.value || undefined
    const plantDescription1: string | undefined = (document.querySelector('#plant-1-description') as HTMLInputElement | null)?.value || undefined
    const plantSpecies1: string | undefined = (document.querySelector('#plant-1-species') as HTMLInputElement | null)?.value || undefined

    const plant1 = new Plant(plantName1, plantDescription1, user?.id, plantSpecies1)


    const plantName2: string | undefined = (document.querySelector('#plant-2-name') as HTMLInputElement | null)?.value || undefined
    const plantDescription2: string | undefined = (document.querySelector('#plant-2-description') as HTMLInputElement | null)?.value || undefined
    let plantSpecies2: string | undefined = (document.querySelector('#plant-2-species') as HTMLInputElement | null)?.value || undefined
    
    if (plantName2 || plantDescription2 || plantSpecies2){

        if ((document.querySelector('#same-species-checkbox') as HTMLInputElement).checked){
            plantSpecies2 = plantSpecies1
        }

        const plant2 = new Plant(plantName2, plantDescription2, user?.id, plantSpecies2)

        insertRow('Plant', [plant1, plant2])
    } else {
        insertRow('Plant', [plant1])
    }
}