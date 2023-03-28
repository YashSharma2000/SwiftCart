import "./top-deals.css"
import TopDealsCard from "../TopDeals-Card/TopDealsCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";

function TopDeals() {
    const [topDeals, setTopDeals] = useState([])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    useEffect(() => {
        const fetchTopDeals = async () => {
            const fetchedTopDeals = await fetch('/api/v1/topDeals', {
                method: 'GET'
            })
            try{
                const jsonTopDeals = await fetchedTopDeals.json()
                setTopDeals(jsonTopDeals.topDeals)
            }catch(error){
                console.log(error)  
            }
        }
        fetchTopDeals()
    }, [])
    return (
        <div className="top-deals-container">
            <h2>Top Deals</h2>
            <Slider {...settings}>
                {topDeals.map((product)=>{
                    return <TopDealsCard data={product} key={product._id}/>
                })}
            </Slider>
        </div>
    )
}

export default TopDeals;
