import { useContext } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../../../../context/NavbarContext'
import CategoryImage from '../CategoryImage/CategoryImage'
import './category-card.css'

function CategoryCard({ data }) {
    const {navbarState, navbarDispatch} = useContext(NavbarContext)
    const navigate = useNavigate()
    const navigateToCategory = ()=>{
        navbarDispatch({
            type: 'SET_DROPDOWN_VALUE',
            payload: {
                value: data.category_name
            }
        })
        navigate({
            pathname: '/products',
            search: `${createSearchParams({category: data.category_name})}`
        })
    }
    return (
        <div className='category-card' onClick={navigateToCategory}>
            <CategoryImage public_id={data.public_id}/>
            <div className="category">{data.category_name}</div>
        </div>
    )
}

export default CategoryCard
