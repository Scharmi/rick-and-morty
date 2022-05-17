import styled from 'styled-components'

export const Button = styled.button`
    padding: 10px;
    margin: 15px;
    font-size: 20px;
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