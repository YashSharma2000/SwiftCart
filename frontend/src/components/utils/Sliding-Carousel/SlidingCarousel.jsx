import "./sliding-carousel.css"
import { useEffect, useRef, useState } from "react"
function SlidingCarousel({ data, card: Card, items_per_slide = 1 }) {
    let total_items = data.length
    const [sliderWidth, setSliderWidth] = useState(0)
    let total_slides = Math.ceil(total_items/items_per_slide)
    const [slide, setSlide] = useState(1)
    const carouselContainerRef = useRef()
    const sliderRef = useRef()
    const carouselList = data.map((obj, index) => {
        return (
            <Card data={obj} key={index} />
        )
    })
    const resizeCarousel = () => {
        setSliderWidth(sliderRef.current.clientWidth)
        //set the no of cards per slide
        carouselContainerRef.current.childNodes.forEach((node) => {
            node.style.width = `${sliderWidth / items_per_slide}px`
        })
    }
    useEffect(() => {
        setSliderWidth(sliderRef.current.clientWidth)
        //set the no of cards per slide
        carouselContainerRef.current.childNodes.forEach((node) => {
            node.style.width = `${sliderWidth / items_per_slide}px`
        })
        window.addEventListener('resize', resizeCarousel)
        return () => {
            window.removeEventListener('resize', resizeCarousel)
        }
    }, [sliderWidth])
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
                <button onClick={goToPrev} disabled={slide<=1}>&lt;</button>
            </div>
            <div className={`carousel-container`} ref={carouselContainerRef}>
                {carouselList}
            </div>
            <div className="next">
                <button onClick={goToNext} disabled={slide>=total_slides}>&gt;</button>
            </div>
        </div>
    )
}

export default SlidingCarousel
