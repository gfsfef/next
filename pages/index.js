import { useState, useEffect, useRef} from 'react'

export default function Home() {
  const [data, setData] = useState()

  const myAPI = () => {
    fetch('http://localhost:8080').then(response => {
      response.json().then(data => {
        setData(data)
      })
    })
  }

  myAPI()
  console.log(data)
  return (
   <>
   </>
  )
}
