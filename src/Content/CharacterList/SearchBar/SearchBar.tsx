import React from 'react'

interface Props {
    searchText: string;
    setSearchText: Function;
}


export function SearchBar(props: Props) {
    return (
        <div style={{padding:"20px"}}>
            <input 
                className="textInput"
                type="text" 
                value={props.searchText} 
                onChange={newText => props.setSearchText(newText.target.value)}
                placeholder="Search..."
                style = {{
                    padding: "20px",
                    fontSize: "20px",
                    border: "3px solid black",
                    borderRadius: "5px"
                }}
            />
        </div>
    )
}