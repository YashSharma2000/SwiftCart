import React from 'react'
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";


export default function AvatarImg({profileImage}){

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    });
    // Use the image with public ID, 'front_face'.
    const userImage = cld.image(profileImage);
    // Render the transformed image in a React component.
    return (
        <>
            <AdvancedImage cldImg={userImage} />
        </>
    )
};