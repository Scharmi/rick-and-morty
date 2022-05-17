import { Character } from 'interfaces'
import store from 'store';

function getCharacterById(id:number)  {
    return 0;
}
//TODO handle downloading errors
function downloadAllCharacters(dispatch:any) {
    let result:Array<Character> = [];
    if(!store.getState().downloaded) {
        fetch(`https://rickandmortyapi.com/api/character/`)
        .then((response) => response.json())
        .then((firstData) => {
            result = [...result, ...firstData.results];
            dispatch({type: "FETCH_CHARACTERS_SUCCESS", payload: firstData.results})
            for(let i = 2; i <= firstData.info.pages; i++) {
                fetch(`https://rickandmortyapi.com/api/character/?page=` + i)
                .then((response) => response.json())
                .then((actualData) => {
                dispatch({type: "FETCH_CHARACTERS_SUCCESS", payload: actualData.results})
                });
            }
        });
    }

}

function getCharactersCount() {
    let result:any = [];
    fetch(`https://rickandmortyapi.com/api/character/`)
    .then((response) => response.json())
    .then((firstData) => {
        result = firstData.info.count;
    });
    return result;
}

export const apiCalls = {
    getCharacterById: getCharacterById,
    downloadAllCharacters: downloadAllCharacters,
    getCharactersCount: getCharactersCount
}