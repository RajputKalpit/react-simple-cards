import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="card__row">
    <App img="https://media.licdn.com/dms/image/C4E03AQERvRfzqOoImw/profile-displayphoto-shrink_200_200/0/1645424985781?e=2147483647&v=beta&t=aihWOuo2eFKctESH6r3CmS8Z9tzSWJ2v4JViIkRK09k" name="Kalpit Rajput Rajput" intro="I am a frontend developer with 18 months of experience"/>
    <App img="https://media.licdn.com/dms/image/D5603AQF53u-2Tzvfnw/profile-displayphoto-shrink_200_200/0/1676011972212?e=2147483647&v=beta&t=Wma7BWkTfmO5sv_VaD-xxj3jaR6mZMqxm8Xa7GKSBek" name="Rahul Patel" intro="Rahul Patel a frontend developer with 18 months of experience"/>
    <App img="https://media.licdn.com/dms/image/D4D03AQG22xUPQNsjbw/profile-displayphoto-shrink_200_200/0/1683609735780?e=2147483647&v=beta&t=s0TW_KjTVv8gVGvcYLZZ_AEs3YBdD00crmYES8G46dY" name="Jenky Panchal" intro="Jainil Panchal a full stack developer with 5 years of experience"/>
    </div>
  </React.StrictMode>,
)
