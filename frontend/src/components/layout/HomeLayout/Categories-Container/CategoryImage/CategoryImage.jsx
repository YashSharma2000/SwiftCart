import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
function CategoryImage({public_id}) {
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    })
    const categoryImage = cld.image(public_id)
    return (
        <AdvancedImage cldImg={categoryImage}/>
    )
}
export default CategoryImage
