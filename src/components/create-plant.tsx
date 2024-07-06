
interface CreatePlantProps{
    plantNumber: number
}

function CreatePlant({plantNumber}: CreatePlantProps){
    
    return(
        <>
            <div>
                <label htmlFor="note-name">Name or Identifier of Plant: </label>
                <input id={`plant-${plantNumber}-name`} type="text"/>
            </div>

            <div>
                <label htmlFor="note-name">Species or Variety: </label>
                {(plantNumber > 1) && 
                <>
                    <label htmlFor="same-species-checkbox">Same species as the first plant?</label>
                    <input type="checkbox" id="same-species-checkbox"/> 
                </>}
                <input id={`plant-${plantNumber}-species`} type="text"/>
            </div>

            <div>
                <label htmlFor="note-name">Additional Details: </label>
                <input id={`plant-${plantNumber}-description`} type="text"/>
            </div>
        </>
    )
}
export default CreatePlant
