import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './Info.jsx'
import Title from './Title.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  
    <Title title="Three Horizontal Cards" />
    <div className="card__row flex justify-evenly hover:justify-around">
    {data.map((item)=>{
      return <App key={item.id} img={item.image} name={item.name} intro={item.intro}/>
    })}
    </div>
  </>,
)
