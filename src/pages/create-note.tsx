import { useState } from 'react'
import Layout from '../components/layout'
import CreatePlantInputs from '../components/create-plant-inputs'
import CreateNoteBtn from '../components/create-note-btn'

function CreateNote(){
    const [ numberOfPlants, setPlantNumber ] = useState(1)
    const setToTwoPlants =    () =>{
        event.preventDefault()
        setPlantNumber(2)
    }  
    const setToOnePlant =    () => {
        event.preventDefault()
        setPlantNumber(1)
    } 
    return(
        <Layout>
            <h1>Create Note</h1>
            <form>
                <div>
                    <h2>Note Details</h2>
                    <div>
                        <label htmlFor="note-name">Name of Note: </label>
                        <input id="note-name" type="text"/>
                    </div>

                    <div>
                        <label htmlFor="note-name">Additional Details: </label>
                        <input id="note-description" type="text"/>
                    </div>
                </div>

                <div>
                    <h2>Plant 1</h2>

                        <CreatePlantInputs plantNumber={1}/>

                </div>

                {(numberOfPlants == 2) &&
                <>
                    <h2>Plant 2</h2>
                    <CreatePlantInputs plantNumber={2}/>
                </>
                }

                <button onClick={setToTwoPlants}>Add Another Plant</button>


                <CreateNoteBtn/>
            </form>
        </Layout>
    )
}
export default CreateNote