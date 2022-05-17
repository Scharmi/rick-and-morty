import { Character } from 'interfaces'
import store from 'store'

function getCharacterById(id:number)  {
    const characters = store.getState().characters;
    const gotCharacter = characters.filter((character:Character) => character.id === id);
    if(gotCharacter.length === 0) return null;
    return gotCharacter[0];
}

function getAllCharacters() {
    return store.getState().characters;
}

function addFavourite(dispatch:any, id:number) {
    dispatch({type: "ADD_FAVOURITE", payload: id});
}

function removeFavourite(dispatch:any, id:number) {
    dispatch({type: "REMOVE_FAVOURITE", payload: id});
}

export const storeCalls = {
    getCharacterById: getCharacterById,
    getAllCharacters: getAllCharacters,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite
}
