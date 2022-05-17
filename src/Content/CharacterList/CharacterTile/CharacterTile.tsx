import React from 'react'
import { Character } from 'interfaces'
import { Link } from 'react-router-dom'
import { storeCalls } from 'utils/storeCalls';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { PrimaryButton } from 'utils/Buttons'

interface Props {
    character: Character;
}
const CharacterTileContent = styled.div`
    justify-content: center;
    align-items:center;
    color: red;
    display:inline-block;
    margin: 8px;
    width: 20%;
    padding: 15px;
    border: 3px solid black;
    border-radius: 10px;
`
const CharacterName = styled.div` 
    margin: 20px 5px;
    text-decoration: none;
    color: black;
    &:hover {
        color:red;
        text-decoration: none;
    }
    min-height: 6vw;
`
const fontSize = (length:number) => {
    if(length > 20) return 2;
    if(length > 10) return 2.5;
    return 3;
}

const CharacterNameText = styled.span`
    font-size: ${props => props.theme.size}vw;
`



export function CharacterTile(props: Props) {
    const character = props.character;
    const dispatch = useDispatch();
    const favourites = useSelector((state:any) => (state.favourites))
    const isFavourite = favourites.has(character.id);
    return (
        <CharacterTileContent>

            <Link to={'../character/' + character.id} style={{textDecoration: 'none'}}>
                <CharacterName>
                    <CharacterNameText theme={{size: fontSize(character.name.length)}}>{character.name}</CharacterNameText>
                </CharacterName>
                <div><img src={character.image} alt={character.name} style={{width: "100%"}}/></div>
                
            </Link>
            
            <PrimaryButton
                onClick={
                    () => {
                        isFavourite 
                            ? 
                            storeCalls.removeFavourite(dispatch, character.id) 
                            : 
                            storeCalls.addFavourite(dispatch, character.id)
                    }
                }
            >
            {isFavourite ? "Remove from favourites" : "Add to favourites"}
            </PrimaryButton>
        </CharacterTileContent>
    )
}

