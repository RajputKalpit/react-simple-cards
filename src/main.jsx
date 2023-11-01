import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import data from './Info.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="card__row">
    {data.map((item)=>{
      return <App key={item.id} img={item.image} name={item.name} intro={item.intro}/>
    })}
    </div>
  </React.StrictMode>,
)
