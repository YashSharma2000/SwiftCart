import "./final-sliding-carousel.css"
import { createContext, useEffect, useRef, useState } from "react"
const CardContext = createContext()
export default function FinalSlidingCarousel({ data, card: Card, items_per_slide = 1 }) {
    let total_items = data.length
    const [sliderWidth, setSliderWidth] = useState(0)
    const [cardWidth, setCardWidth] = useState(0)
    let total_slides = Math.ceil(total_items / items_per_slide)
    const [slide, setSlide] = useState(1)
    const carouselContainerRef = useRef()
    const sliderRef = useRef()
    useEffect(() => {
        setSliderWidth(sliderRef.current.clientWidth);
        const resizeHandler = () => {
            setSliderWidth(sliderRef.current.clientWidth);
        };
        window.addEventListener("resize", resizeHandler);
        return () => window.removeEventListener("resize", resizeHandler);
    }, []);
    
    useEffect(() => {
        setCardWidth(sliderWidth / items_per_slide)
    }, [sliderWidth, items_per_slide])

    useEffect(()=>{
        console.log(cardWidth, sliderWidth/items_per_slide)
    })
    const carouselList = data.map((obj) => {
        return (
            <CardContext.Provider value={{ cardWidth }} key={obj._id}>
                <Card data={obj} />
            </CardContext.Provider>
        )
    })
    const goToPrev = () => {
        carouselContainerRef.current.style.transform += `translateX(${sliderWidth}px)`
        carouselContainerRef.current.style.transition = "transform 1s"
        setSlide((prev_value) => prev_value - 1)
    }
    const goToNext = () => {
        carouselContainerRef.current.style.transform += `translateX(-${sliderWidth}px)`
        carouselContainerRef.current.style.transition = "transform 1s"
        setSlide((prev_value) => prev_value + 1)
    }
    return (
        <div className="sliding-carousel" ref={sliderRef}>
            <div className="prev">
                <button onClick={goToPrev} disabled={slide <= 1}>&lt;</button>
            </div>
            <div className={`carousel-container`} ref={carouselContainerRef}>
                {carouselList}
            </div>
            <div className="next">
                <button onClick={goToNext} disabled={slide >= total_slides}>&gt;</button>
            </div>
        </div>
    )
}
export { CardContext }

