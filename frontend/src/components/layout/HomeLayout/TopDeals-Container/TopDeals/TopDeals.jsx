import "./top-deals.css"
import TopDealsCard from "../TopDeals-Card/TopDealsCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { Alert, CircularProgress } from "@mui/material";
import AlertError from "../../../../utils/Error/AlertError";

function TopDeals() {
    const [topDeals, setTopDeals] = useState([])
    const [isFetching, setFetching] = useState(false)
    const [error, setError] = useState(false)
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    useEffect(() => {
        const fetchTopDeals = async () => {
            setFetching(true)
            try {
                const fetchedTopDeals = await fetch('https://e-commerce-frontend-yinf.onrender.com/api/v1/topDeals', {
                    method: 'GET'
                })
                const jsonTopDeals = await fetchedTopDeals.json()
                setTopDeals(jsonTopDeals.topDeals)
                setFetching(false)
            } catch (error) {
                setError(error.message)
                setFetching(false)
            }
        }
        fetchTopDeals()
    }, [])
    return (
        <div className="top-deals-container">
            <h2>Top Deals</h2>
            {error ?
                <AlertError error={error}/> :
                <div className="top-deals">
                    {isFetching ?
                        <CircularProgress className="circular-progress" /> :
                        <Slider {...settings}>
                            {topDeals.map((product) => {
                                return <TopDealsCard data={product} key={product._id} />
                            })}
                        </Slider>
                    }
                </div>
            }
        </div>
    )
}

export default TopDeals;
