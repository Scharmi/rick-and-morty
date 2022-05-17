import styled from 'styled-components'

interface Props {
    pageNumber: number;
    maxPage: number;
    setPage: Function;
}
const PageSwitchContent = styled.div`
    text-align: center;
    font-size: 2vw;
    color: black
`
const PageText = styled.span`
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`

export function PageSwitch(props: Props) {
    let pageLinks = [];
    for(let i = Math.max(props.pageNumber-3, 1); i <= Math.min(props.pageNumber+3, Math.floor(props.maxPage)); i++) {
        if(i === props.pageNumber) {
            pageLinks.push(
                <span key={i}>
                    <PageText 
                        key={i}
                        onClick={() => {props.setPage(i)}} 
                        style={
                            {
                            fontWeight: "bold", 
                        }}
                    >
                    {i} 
                    </PageText>
                    {" "}
                </span>
            )
        }
        else {
            pageLinks.push(
                <span key={i}>
                    <PageText 
                        onClick={() => {props.setPage(i)}} 
                    >
                    {i} 
                    </PageText>
                    {" "}
                </span>
            )
        }

    }
    if(Math.floor(props.maxPage) === 0) return <></>
    return (
        <PageSwitchContent>
            <PageText onClick={() => {props.setPage(1)}} style={{cursor: "pointer"}}>&lt; </PageText>
            {pageLinks}
            <PageText onClick={() => {props.setPage(Math.floor(props.maxPage))}} style={{cursor: "pointer"}}> &gt;</PageText>
        </PageSwitchContent>
    )
}