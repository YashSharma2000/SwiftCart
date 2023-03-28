import { useContext } from 'react'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { NavbarContext } from '../../../../../context/NavbarContext'
import TopDealsImage from '../Top-Deals-Image/TopDealsImage'
import './top-deals-card.css'

function TopDealsCard({ data }) {
  const navigate = useNavigate()
  const {navbarDispatch} = useContext(NavbarContext)
  const navigateToProduct = ()=>{
    navbarDispatch({
      type: 'SET_QUERY_STRING',
      payload: {
        value: data.name
      }
    })
    navigate({
      pathname: '/products',
      search: `?${createSearchParams({keyword: data.name})}`
    })
  }
  return (
    <div className='top-deals-card' onClick={navigateToProduct}>
      <TopDealsImage public_id={data.images[0].public_id}/>
      <div className="info">
        <span className="name">{data.name}</span>
        <span className="price">{`Rs.${(data.originalPrice).toFixed(2)}`}</span>
        <span className="current-price">{`Rs.${(data.price).toFixed(2)}`}</span>
        <div className="discount">{`${data.discount}% Off`}</div>
      </div>
    </div>
  )
}

export default TopDealsCard
