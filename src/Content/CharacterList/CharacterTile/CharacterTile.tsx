import React from 'react'
import { Character } from 'interfaces'
import { Link } from 'react-router-dom'
import { storeCalls } from 'utils/storeCalls';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { PrimaryButton, SecondaryButton } from 'Buttons/Buttons'

interface Props {
    character: Character;
}
const CharacterTileContent = styled.div`
    justify-content: center;
    text-align: center;
    align-items:center;
    color: red;
    display:inline-block;
    margin: 8px;
    width: 15%;
    padding: 5px 15px;
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
    vertical-align: top;
    min-height: 7vw;

`
const findLongestWord = (str:string) => {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
}

const fontSize = (str: string) => {
    if((findLongestWord(str) > 10) || (str.length > 18)) return 1.8;
    return 2.5;
}

const CharacterNameText = styled.span`
    font-size: ${props => props.theme.size}vw;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 5px;
    min-height: 8vw;
`

const ContentWrapper = styled.div`
    display: block;
`


export function CharacterTile(props: Props) {
    const character = props.character;
    const dispatch = useDispatch();
    const favourites = useSelector((state:any) => (state.favourites))
    const isFavourite = favourites.has(character.id);
    function renderButton() {
        if(isFavourite) {
            return (
                <SecondaryButton
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
                Remove from favourites
                </SecondaryButton>
            )
        }
        return (
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
            Add to favourites
            </PrimaryButton>
        )
    }
    return (
        <CharacterTileContent>
            <ContentWrapper>
                <Link to={'../character/' + character.id} style={{textDecoration: 'none'}}>
                    <CharacterName>
                        <CharacterNameText theme={{size: fontSize(character.name)}}>{character.name}</CharacterNameText>
                    </CharacterName>
                    <img src={character.image} alt={character.name} style={{"width": "100%", "margin":"0"}}/>
                    
                </Link>
                <ButtonWrapper>
                    {renderButton()}
                </ButtonWrapper>
            </ContentWrapper>
        </CharacterTileContent>
    )
}

