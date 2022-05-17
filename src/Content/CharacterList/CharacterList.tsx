import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CharacterTile } from './CharacterTile/CharacterTile'
import { SearchBar } from './SearchBar/SearchBar';
import { Character } from 'interfaces'
import { apiCalls } from 'utils/apiCalls'
import styled from 'styled-components'
import { PageSwitch } from './PageSwitch';
import { Loader } from '../Loader/Loader';


interface Props {
    favourite?: boolean
}
const CharacterListContent = styled.div`
    color: red;
    margin: auto;
    width: 100%;
`

const CharacterTilesWrapper = styled.div`
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
    const charactersOnPage = 20;
    const [searchText, setSearchText] = useState("");
    const [downloaded, setDownloaded] = useState(false);
    const [page, setPage] = useState<number>(1);
    const dispatch = useDispatch();
    useEffect(() => {
        if(!downloaded) {
            apiCalls.downloadAllCharacters(dispatch);
            setDownloaded(true);
        }

    }, [dispatch, downloaded, setDownloaded]);

    const favouriteIds = useSelector((state:any) => state.favourites);
    let filteredCharacters = allCharacters;

    if(props.favourite) {
        filteredCharacters = allCharacters.filter((character:Character) => (favouriteIds.has(character.id)))
    }
    filteredCharacters = filteredCharacters.filter((character:Character) => (character.name.toLowerCase().includes(searchText.toLowerCase())));
    const displayCharacters = filteredCharacters.filter((character:Character) => 
        (filteredCharacters.indexOf(character) + 1 <= page * charactersOnPage) && (filteredCharacters.indexOf(character) + 1 > (page - 1) * charactersOnPage)
    )

    return (
        (allCharacters.length === 0) ? 
            <Loader>Loading characters list...</Loader> 
        : 
            <CharacterListContent>
                <CharacterTilesWrapper>
                    <SearchBar searchText={searchText} setSearchText={setSearchText}/>
                    {displayCharacters.map((character: Character) => (<CharacterTile key={character.id} character={character}/>))}
                </CharacterTilesWrapper>
                <PageSwitch pageNumber={page} maxPage={(filteredCharacters.length + charactersOnPage - 1)/charactersOnPage} setPage={setPage}/>
            </CharacterListContent>
    )
}