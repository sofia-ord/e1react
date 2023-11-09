import styled from "styled-components";

export const ProductosWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 1300px;
padding-top: 30px;
width: 100%;
margin: 15px auto;
h2{
    color: #D4A373;
    font-size: 2rem;
    text-align: center;
}
@media (max-width: 768px){
    text-aling:center;
}
`

export const ProductosContainer = styled.div`
display: grid;
place-items: center;
justify-content: center;
grid-template-columns: repeat(2, 1fr);
row-gap:3.5rem;
width:100%;
max-width:1300px;
padding: 1rem 0;
@media (max-width: 1000px){
    text-aling:center;
    grid-template-columns:1fr;
}
`