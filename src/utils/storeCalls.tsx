import { Character } from 'interfaces'

export function getCharacterById(characters: Array<Character>, id:number)  {
    const gotCharacter = characters.filter(character => character.id === id);
    if(gotCharacter.length === 0) return null;
    return gotCharacter[0];
}

export const storeCalls = () => (null);