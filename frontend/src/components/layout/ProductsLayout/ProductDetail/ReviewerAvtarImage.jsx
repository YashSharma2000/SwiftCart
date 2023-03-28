import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
export default function ReviewerAvtarImage({reviewerAvtarImage}){
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        } 
    })
    const reviewerAvtar = cld.image(reviewerAvtarImage)
    return(
        <AdvancedImage cldImg={reviewerAvtar}/>
    )
}