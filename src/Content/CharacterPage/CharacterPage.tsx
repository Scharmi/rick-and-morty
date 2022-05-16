import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getCharacterById} from '../../utils/storeCalls'
interface Props {

}

export function CharacterPage(props: Props) {
    const params = useParams();
    const id = params.id 
    const allCharacters = useSelector((state:any) => state.characters)
    const [character, setCharacater] = useState(getCharacterById(allCharacters, Number(id)));

    if(character === null) {
        fetch(`https://rickandmortyapi.com/api/character/` + id)
                .then((response) => response.json())
                .then((actualData) => {
                console.log("GOT ONE CHARACTER")
                setCharacater(actualData);
                });
    }

    if(character === null) return (
        <div>Loading data...</div>
    )

    const keys = Object.keys(character);
    return (
        <div>
        {keys}
        </div>
    )
}