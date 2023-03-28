import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

function TopDealsImage({public_id}) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    })
    const topDealsImage = cld.image(public_id)
    return (
        <AdvancedImage cldImg={topDealsImage}/>
    )
}

export default TopDealsImage
