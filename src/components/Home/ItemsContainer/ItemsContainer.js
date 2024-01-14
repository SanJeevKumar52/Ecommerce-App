import React from 'react'
import { productitemContext } from '../../../productitemContext'
import ItemCard from '../ItemCard/ItemCard';

const ItemsContainer = () => {
  console.log(productitemContext);
  return (
    <>
        <ItemCard />
    </>

  )
}

export default ItemsContainer