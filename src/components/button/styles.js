import styled from "styled-components"


export const StyledButton = styled.div`
padding: 0.8rem 0.8rem;
outline:none;
border: none;
border-radius: ${({radius}) => `${radius}px`};
background:#E9EDC9;
color: #D4A373;
text-transform: uppercase;
text-align: center;
font-weight: 400;
cursor: pointer;
&:hover{
    opacity:95%;
}
`