import styled from "styled-components";

export const FooterContainer = styled.div`
height: 80px;
background-color: #FAEDCD;
display: flex;
justify-content: space-around;
align-items: center;
padding: 1rem 4rem;
a{
    padding: 1rem 1.5rem;
    text-decoration: none;
    list-style: none;
    color: #D4A373;
    font-size: 1.2rem;
}
@media (max-with: 768px){
    padding: 1rem 2rem;
}
`