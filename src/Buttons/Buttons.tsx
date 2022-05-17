import styled from 'styled-components'

export const Button = styled.button`
    cursor:pointer;
    margin: 0px 0px;
    font-size: 1.7vw;
    display: block;
    overflow: hidden;
    text-align: center;
    border-radius: 10px;
    min-height: 6vw
`

export const PrimaryButton = styled(Button)`
    border: 1px solid #008CBA;
    background-color: #008CBA;

    color: white;
    &:hover {
        background-color: white;
        color: #008CBA;
    }
`

export const SecondaryButton = styled(Button)`
    border: 1px solid #f44336;
    background-color: #f44336;
    color: white;
    &:hover {
        background-color: white;
        color: #f44336;
    }
`