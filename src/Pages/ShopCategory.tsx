import React from 'react'
type ShopCategoryProps = {
  category: string
}

const ShopCategory: React.FC<ShopCategoryProps> = ({ category }) => {
  return (
    <div>{ category }</div>
  )
}

export default ShopCategory