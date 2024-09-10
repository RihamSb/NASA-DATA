import React from 'react'

export default function Main(props) {
    const {data} = props
  return (
    <div className="ImgContainer">
        <img src={data.hdurl} alt={data.title || 'img'} className='bgImage' />
    </div>
      )
}