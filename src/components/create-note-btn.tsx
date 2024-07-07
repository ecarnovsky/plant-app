import { createPlants } from "./create-plant-btn"
import { supabaseClient, insertRow } from "../supabase-auth"
import Note from "./classes/note"
import Plant from "./classes/plant"


function CreateNoteBtn(){
    return(
        <button onClick={createNote}>Create Note</button>
    )
}

export default CreateNoteBtn

async function createNote(){

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser()


    createPlants()


    const name: string | undefined = (document.querySelector('#note-name') as HTMLInputElement | null)?.value ||  undefined
    const description: string | undefined = (document.querySelector('#note-description') as HTMLInputElement | null)?.value || undefined


    if (authError) {
        console.error(authError.message);
    }

    const note = new Note(name, description, user?.id, undefined, undefined)

    insertRow('Note', [note])

}