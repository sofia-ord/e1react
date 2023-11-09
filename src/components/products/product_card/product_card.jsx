import { Button } from "../../button/button"
import { ProductosCard } from "./styles"

export const ProductCard = ({img,title,desc,price}) =>{
    return (
        <ProductosCard>
            <img src={img} alt=""/>
            <h2>{title}</h2>
            <p>{desc}</p>
            <div>
                <p>${price}</p>
                <Button>Agregar</Button>
            </div>
        </ProductosCard>
    )
}