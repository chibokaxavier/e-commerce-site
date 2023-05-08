import React from 'react'

export interface Cart {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }
  

const CartItem = ({item}) => {
    const {amount,id,title,category,price,img,desc} =item
  return (
    <div className='pt-4'>{title}</div>
  )
}

export default CartItem