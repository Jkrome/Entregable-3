import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'
import { useRef } from 'react'
import { useState } from 'react'

function App() {

  const randomId = Math.floor(Math.random() * 126) + 1
  const [inputValue, setInputValue] = useState(randomId)
  const [location, getLocation, isLoading, hasError] = useFetch()

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${inputValue}`
    getLocation(url);
  }, [inputValue])

  const textInput = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputValue(textInput.current.value.trim().toLowerCase())
    textInput.current.value = ''
  }

  return (
    <div className='app'>
      <header className='app_banner'></header>
      {
        isLoading ?
        <h2>Loading...</h2>
        :
        <> 
          <form className='app_form' onSubmit={handleSubmit}>
            <input className='app_formInput' ref={textInput} type="text" />
            <button className='app_formBtn'>Search</button>
          </form>
            {
              hasError || !+inputValue ?
              <h2>❌ Hey! you must provide an id from 1 to 126 😳</h2>
              :
              <> 
              <div className='app_location'>
                <LocationCard 
                info = {location}
                />
              </div>
                
                <div className='app_container'>
                  {
                      location?.residents.map((character) => (
                        <ResidentCard
                        key = {character}
                        info = {character}
                        />
                      ))
                  }
                </div>
              </>
            }
        </>
      }
      
    </div>

  )
}

export default App
