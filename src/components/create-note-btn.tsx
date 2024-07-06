import { createPlant } from "./create-plant-btn"
import { supabaseClient } from "../supabase-auth"
import Note from "./classes/note"
function CreateNoteBtn(){
    return(
        <button onClick={createNote}>Create Note</button>
    )
}

export default CreateNoteBtn

async function createNote(){
    const name: string = (document.querySelector('#note-name') as HTMLInputElement).value
    const description: string = (document.querySelector('#note-description') as HTMLInputElement).value

    const  { data: { user }}  = await supabaseClient.auth.getUser()

    
    const { error } = await supabaseClient
    .from('Note')
    .insert([{ name: name, description: description , user_id: user?.id}])

    if(error){
        console.error(error.message)
    }

}