import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { CharacterTile } from './CharacterTile/CharacterTile'
import { Character } from 'interfaces'
const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
interface Props {
    favourite?: boolean
}

export function CharacterList(props: Props) {
    const characters = useSelector((state:any) => state.characters);
    const dispatch = useDispatch();
    useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/`)
        .then((response) => response.json())
        .then((firstData) => {
            dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: firstData.results})
            for(let i = 2; i <= firstData.info.pages; i++) {
                fetch(`https://rickandmortyapi.com/api/character/?page=` + i)
                .then((response) => response.json())
                .then((actualData) => {
                dispatch({type: FETCH_CHARACTERS_SUCCESS, payload: actualData.results})
                });
            }
        });
    }, [dispatch]);
    if(props.favourite) return <>FAVOURITE</>
    return characters.map((character: Character) => (<CharacterTile character={character}/>))
}