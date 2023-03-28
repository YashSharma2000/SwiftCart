import React from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
export default function ProductsCardImage({productCardImage}){
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    });
    const productImage = cld.image(productCardImage);
    return(
        <AdvancedImage cldImg={productImage}/>
    )
}