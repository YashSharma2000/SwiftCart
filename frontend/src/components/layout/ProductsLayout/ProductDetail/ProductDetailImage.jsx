import './product-detail-image.css'
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
export default function ProductDetailImage({ data }) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    })
    const productImage = cld.image(data)
    return (
        <div className="product-images-card">   
            <AdvancedImage cldImg={productImage} />
        </div>
    )
}