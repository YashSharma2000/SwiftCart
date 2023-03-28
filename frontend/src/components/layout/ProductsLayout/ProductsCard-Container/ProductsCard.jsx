import { Link } from 'react-router-dom'
import ProductsCardImage from './ProductCardImage'
import './products-card.css'
export default function ProductsCard({ product }) {
    return (
        <div className="products-card-container">
            <Link to={`/product/${product._id}`} className="product-link">
                <div className="product-card-image">
                    <ProductsCardImage productCardImage={product.images[0].public_id} />
                </div>
                <div className="product-details">
                    <div className="name">
                        {product.name}
                    </div>
                    <div className="cost">
                        {`Rs.${product.price}`}
                    </div>
                    <div className="rating">
                        {`Rating: ${product.rating}`}
                    </div>
                    <div className="review-count">
                        {`${product.numOfReviews} Reviews`}
                    </div>
                </div>
            </Link>
        </div>
    )
}