import './products.css';
import Card from '../card/card.jsx';
import { useNavigate } from 'react-router-dom';

const Products = ({ prods }) => {
    let navigate = useNavigate();

    return (
        <div className="catalog__cards">
            {prods.map(prod => 
                <Card onClick={() => navigate(`/product/${prod.id}`)} key={prod.id} prod={prod} />)}
        </div>
    )
}

export default Products;