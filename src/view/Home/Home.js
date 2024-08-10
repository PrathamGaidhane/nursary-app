import React, { useEffect, useState } from 'react'
import "./home.css"
import Plantcard from '../../componants/Plantcard/Plantcard'
import axios from 'axios'
import tosts, { Toaster } from 'react-hot-toast'

function Home() {

  const [plants, setPlants] = useState([])
  const loodPlants = async () => {
  tosts.loading("Loding Plants...")
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant`)
    tosts.dismiss()
    tosts.success("Plant Loaded succesfully")

    setPlants(response.data.data)
  }
  useEffect(() => {
    loodPlants()
  }, [])

  return (
    <div>
      <h1 className='heading'>Home</h1>
      {
        plants.map((plant, i) => {
          const { _id, name, categuris, image, price, description } = plant
          return (<Plantcard
            key={i}
            _id={_id}
            name={name}
            categuris={categuris}
            image={image}
            price={price}
            description={description} />)
        })
      }
      <Toaster />
    </div>
  )
}

export default Home
