import './product-detail.css'
import { useContext, useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
import { ProductDetailContext } from '../../../../context/ProductContext'
import ProductDetailImage from './ProductDetailImage'
import ReviewerAvtarImage from './ReviewerAvtarImage'
import Slider from 'react-slick'
export default function ProductDetail() {
    const param = useParams()
    const product_id = param.id
    const ratingInputRef = useRef()
    const reviewInputRef = useRef()
    const { productDetail, dispatch } = useContext(ProductDetailContext)
    useEffect(() => {
        dispatch({
            type: 'FETCHING_PRODUCT'
        })
        const fetchProductDetail = async () => {
            try {
                const fetchedProduct = await fetch(`/api/v1/product/${product_id}`)
                const jsonProductDetail = await fetchedProduct.json()
                dispatch({
                    type: 'PRODUCT_SUCCESS',
                    payload: jsonProductDetail
                })
            } catch (error) {
                dispatch({
                    type: 'PRODUCT_FAILED',
                    payload: error
                })
            }
        }
        fetchProductDetail()
    }, [])
    const addReview = async (e) => {
        e.preventDefault()
        const addedReview = await fetch('/api/v1/product/reviews', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                rating: ratingInputRef.current.value,
                comment: reviewInputRef.current.value,
                productId: product_id
            }),
            credentials: 'include'
        })
        try {
            const jsonAddedReview = await addedReview.json()
        } catch (error) {
            console.log(error)
        }
    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div className="product-detail-container">
            {productDetail.productFetchedData &&
                <>
                    <div className="product-detail-top">
                        <Slider {...settings} className='product-images-slider'>
                            {productDetail.productFetchedData.product.images.map((image) => {
                                return <ProductDetailImage data={image.public_id} key={image._id} />
                            })}
                        </Slider>
                        <div className="product-name">{productDetail.productFetchedData.product.name}</div>
                        <div className="product-price">Rs.{productDetail.productFetchedData.product.price}/-</div>
                        <div className="product-rating">Rating: {productDetail.productFetchedData.product.rating}</div>
                    </div>
                    <div className="product-detail-bottom">
                        <div className="product-description">
                            <h2>Product Description:</h2>
                            <div className="description">
                                {productDetail.productFetchedData.product.description}
                            </div>
                        </div>
                        <div className="add-product-review">
                            <h2>Add Review:</h2>
                            <div className="review-form">
                                <form onSubmit={addReview}>
                                    <label>
                                        <input type="text" ref={reviewInputRef} placeholder='Add your Review' className='review-input' />
                                    </label>
                                    <label>
                                        Rating
                                        <input type="text" ref={ratingInputRef} />
                                    </label>
                                    <button type='submit'>Add Review</button>
                                </form>
                            </div>
                        </div>
                        <div className="product-reviews">
                            <h2>Customer Reviews:</h2>
                            <div className="reviews">
                                {productDetail.productFetchedData.product.reviews.map((review) => {
                                    return (
                                        <div className="review" key={review.user}>
                                            <div className="reviewer-details">
                                                <div className="reviewer-avtar">
                                                    <ReviewerAvtarImage reviewerAvtarImage={review.avtar.public_id} />
                                                </div>
                                                <div className="reviewer-name">{review.name}</div>
                                            </div>
                                            <div className="reviewer-rating">Rating: {review.rating}</div>
                                            <div className="reviewer-comment">{review.comment}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}