import styled from 'styled-components'

interface Props {
    pageNumber: number;
    maxPage: number;
    setPage: Function;
}
export const PageSwitchContent = styled.div`
    text-align: center;
    font-size: 2vw;
    color: black
`
export function PageSwitch(props: Props) {
    let pageLinks = [];
    for(let i = Math.max(props.pageNumber-3, 1); i <= Math.min(props.pageNumber+3, Math.floor(props.maxPage)); i++) {
        if(i === props.pageNumber) {
            pageLinks.push(
                <span 
                    key={i}
                    onClick={() => {props.setPage(i)}} 
                    style={{fontWeight: "bold", cursor: "pointer"}}
                >
                {i + " "} 
                </span>
            )
        }
        else {
            pageLinks.push(
                <span 
                    key={i}
                    onClick={() => {props.setPage(i)}} 
                    style={{ cursor: "pointer"}}
                >
                {i + " "} 
                </span>
            )
        }

    }
    if(Math.floor(props.maxPage) === 0) return <></>
    return (
        <PageSwitchContent>
            <span onClick={() => {props.setPage(1)}} style={{cursor: "pointer"}}>&lt; </span>
            {pageLinks}
            <span onClick={() => {props.setPage(Math.floor(props.maxPage))}} style={{cursor: "pointer"}}> &gt;</span>
        </PageSwitchContent>
    )
}