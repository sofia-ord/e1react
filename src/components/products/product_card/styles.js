import styled from "styled-components";

export const ProductosCard = styled.div`
background:#FEFAE0;
width: 400px;
border-radius: 15px;
padding: 1.5rem;
color: #D4A373;
img{
    width:100%;
    margin-bottom: 1rem;
    border-radius: 15px;
}
h2 {
    font-weight: 600;
}
p{
    font-size:1.5rem;
    text-align: center;
}
@media (max-width: 768px){
    width:250px;
}
`