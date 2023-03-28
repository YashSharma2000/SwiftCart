import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

const NavUserAvtar = ({avtarId})=>{
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dzybc5amp'
        }
    })
    const avtarImage = cld.image(avtarId)
    return (
        <AdvancedImage cldImg={avtarImage}/>
    )
}
export default NavUserAvtar