import './category.css'
import CategoryCard from '../CategoryCard/CategoryCard'
import { useEffect, useState } from 'react'

function Category() {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const fetchedCategories = await fetch('/api/v1/productCategories', {
                method: 'GET'
            })
            try {
                const jsonCategories = await fetchedCategories.json()
                setCategories(jsonCategories.category)
            } catch (error) {
                console.log(error)
            }
        }
        fetchCategories()
    }, [])
    let categoryList = categories.map((item, index) => {
        return <CategoryCard data={item} key={index} />
    })
    return (
        <div className='category-container'>
            <h2>Shop by Categories</h2>
            <div className="category-list">
                {categoryList}
            </div>
        </div>
    )
}

export default Category
