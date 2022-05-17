import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Character } from 'interfaces'
import styled from "styled-components"
import { storeCalls } from 'utils/storeCalls'
interface Props {

}

export const CharacterPageContent = styled.div`
    border: 5px solid black;
    border-radius: 20px;
    margin: 10vh 40%;
`
export const DataLine = styled.div`
    margin-left:15px;
    margin-top: 6px;
`
export const DataWrapper = styled.div`
    margin: 15px 0;
`

export function CharacterPage(props: Props) {
    const params = useParams();
    const id = params.id 
    const [character, setCharacater] = useState<Character | null>(storeCalls.getCharacterById(Number(id)));

    if(character === null) {
        fetch(`https://rickandmortyapi.com/api/character/` + id)
            .then((response) => response.json())
            .then((actualData) => {
            setCharacater(actualData);
        });
    }

    if(character === null) return (
        <div>Loading data...</div>
    )
    const episodes = character.episode.map((episode:string) => (
        <span key={episode}>{episode.slice(episode.lastIndexOf('/') + 1)} </span>
    ))
    return (
        <CharacterPageContent>
            <img src={character.image} alt={character.name} style={{width:"100%", borderRadius: "15px 15px 0 0"}}/>
            <DataWrapper>
                <DataLine><b>Name: </b>{character.name}</DataLine>
                <DataLine><b>Species: </b>{character.species}</DataLine>
                <DataLine><b>Type: </b>{character.type}</DataLine>
                <DataLine><b>Gender: </b>{character.gender}</DataLine>
                <DataLine><b>Status: </b>{character.status}</DataLine>
                <DataLine><b>Origin: </b>{character.origin.name}</DataLine>
                <DataLine><b>Location: </b>{character.location.name}</DataLine>
                <DataLine><b>Episodes: </b>{episodes}</DataLine>
            </DataWrapper>
        </CharacterPageContent>
    )
}

