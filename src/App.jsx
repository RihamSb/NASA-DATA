import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModel] = useState(false);
  
  function handleToggleModel(){
    setShowModel(!showModal)
  }

  useEffect(()=>{
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod'+
      `?api_key=${NASA_KEY}`
      
      const today = (new Date()).toDateString()
      const localkey = `NASA-${today}`
      if(localStorage.getItem(localkey)){
        const apiData = JSON.parse(localStorage.getItem
        (localkey))
        setData(apiData)    
        console.log('fetched from cache today')
        return
      }
      localStorage.clear()

      try{
      const res = await fetch(url)
      const apiData = await res.json()
      localStorage.setItem(localkey, JSON.stringify
        (apiData))

      setData(apiData)
      // console.log('DATA\n', apiData)
      console.log('fetched from API today')
      }catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData()
  }
  ,[])
  
  return (
    <>      
      {data ? (<Main data={data} />): (
        
        <div className="loadingState">
          {/* <i class="fa-solid fa-meteor"></i> */}
          <i className="fa-solid fa-user-astronaut"></i>
          {/* <i class="fa-solid fa-shuttle-space"></i> */}
          {/* <i class="fa-solid fa-satellite-dish"></i> */}
        </div>

      )}
      {showModal && (<SideBar data={data} handleToggleModel = {handleToggleModel} />)}
      <Footer 
      data={data}
      handleToggleModel = {handleToggleModel}
      />
    </>
  )
}

export default App
