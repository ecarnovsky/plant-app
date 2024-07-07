import { createPlant } from "./create-plant-btn"
import { supabaseClient, insertRow } from "../supabase-auth"
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

    const { data: { user }, error: authError } = await supabaseClient.auth.getUser();

    if (authError) {
        console.error(authError.message);
    }

    const note = new Note(name, description, user?.id)

    insertRow('Note', note)

}