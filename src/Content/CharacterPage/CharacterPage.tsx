import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Character, CharacterLocation } from 'interfaces'
import styled from "styled-components"
interface Props {

}

export const Container = styled.div`
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    color: white;
    background-color: #131A22;
`

export function CharacterPage(props: Props) {
    const params = useParams();
    const id = params.id 
    const [character, setCharacater] = useState<Character | null>(null);

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

    const keys = Object.keys(character);
    let list = keys.map((key:any) => {
        if(key === "episode") {
            return (
                <div key={key}>
                    {key}: {(character[key as keyof Character] as Array<String>).map((e:any) => (<div>{e}</div>))}
                </div>)
        }

        if(typeof(character[key as keyof Character]) === "object") {
            return (
                <div key={key}>
                    {key}: {(character[key as keyof Character] as CharacterLocation).name}
                </div>
            )
        }
        if(key === "image") 
            return (
                <div key={key}>
                    {key}: <img src={String(character[key as keyof Character])} alt="character"/>
                </div>
            );
        if(key === "url") {
            return (
                <div key={key}>
                    {key}: <a href={String(character[key as keyof Character])}>{String(character[key as keyof Character])}</a>
                </div>
            )
        }

        
        return (<div key={key}>{key}: {String(character[key as keyof Character])}</div>)
    })
    return (<div>{list}</div>)
}

