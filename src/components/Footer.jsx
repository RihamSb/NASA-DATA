import React from 'react'

export default function Footer(props) {
    const {handleToggleModel, data} = props
  return (
    <footer>
        <div className="bgGradient">

        </div>
        <div>
            <h1>Nasa Project</h1>
            <h2>{data?.title}</h2>
        </div>
        <button onClick={
            handleToggleModel
        }>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}