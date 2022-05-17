import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CharacterTile } from './CharacterTile/CharacterTile'
import { SearchBar } from './SearchBar/SearchBar';
import { Character } from 'interfaces'
import { apiCalls } from 'utils/apiCalls'
import styled from 'styled-components'


interface Props {
    favourite?: boolean
}
export const CharacterListContent = styled.div`
    color: red;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`

export const CharacterTilesWrapper = styled.div`
    justify-content: center ;
    align-items: center;
    margin:auto;
    min-height: 100px;
    overflow: hidden;
    padding: 50px;
    text-align: center;

`
export function CharacterList(props: Props) {

    let allCharacters = useSelector((state:any) => state.characters);
    const [searchText, setSearchText] = useState("");
    const [downloaded, setDownloaded] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!downloaded) {
            apiCalls.downloadAllCharacters(dispatch);
            setDownloaded(true);
        }

    }, [dispatch, downloaded, setDownloaded]);

    const favouriteIds = useSelector((state:any) => state.favourites);
    let displayCharacters = allCharacters;

    if(props.favourite) {
        displayCharacters = allCharacters.filter((character:Character) => (favouriteIds.has(character.id)))
    }
    displayCharacters = displayCharacters.filter((character:Character) => (character.name.toLowerCase().includes(searchText.toLowerCase())));

    return (
        (allCharacters.length === 0) ? 
            <div>Loading...</div> 
        : 
            <CharacterListContent>

                <CharacterTilesWrapper>
                    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
                    {displayCharacters.map((character: Character) => (<CharacterTile character={character}/>))}
                </CharacterTilesWrapper>
            </CharacterListContent>
    )
}