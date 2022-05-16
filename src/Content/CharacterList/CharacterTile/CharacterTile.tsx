import React from 'react'
import { Character } from 'interfaces'
import { Link } from 'react-router-dom'

interface Props {
    character: Character;
}

export function CharacterTile(props: Props) {
    const character = props.character;
    return (
        <div className="characterTile">
            <Link to={'../character/' + character.id}>{character.name}</Link>
        </div>
    )
}