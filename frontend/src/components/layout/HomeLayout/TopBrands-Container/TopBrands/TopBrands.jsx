import Slider from 'react-slick'
import TopBrandsCard from '../TopBrandsCard-Container/TopBrandsCard'
import './top-brands.css'
function TopBrands({data}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <div className="top-brands-container">
            <h2>Top Brands</h2>
            <Slider {...settings}>
                {data.map((brand, index)=>{
                    return <TopBrandsCard data={brand} key={index}/>
                })}
            </Slider>
        </div>
    )
}

export default TopBrands
