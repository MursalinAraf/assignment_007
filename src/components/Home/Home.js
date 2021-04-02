import React, {useState} from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "../Photos/Photos";
import {Button} from '@material-ui/core'
import '../../components/style.css'

export default function Home() {
    const [Photos, setPhotos] = useState(photos)

  const handleAllPhotos = () => {
        setPhotos(photos)
    }

   const summerPhotos = photos.filter(photo => photo.category === 'summer')
   const winterPhotos = photos.filter(photo => photo.category === 'winter')
   const cityPhotos = photos.filter(photo => photo.category === 'city')
   const officePhotos = photos.filter(photo => photo.category === 'office')
   const foodPhotos = photos.filter(photo => photo.category === 'food')
   const autumnPhotos = photos.filter(photo => photo.category === 'autumn')
   const deskPhotos = photos.filter(photo => photo.category === 'desk')
   const outdoorPhotos = photos.filter(photo => photo.category === 'outdoor') 
  
   const handleSummerPhotos = () => {    
    setPhotos(summerPhotos)
    }

    const handleWinterPhotos = () => {
        setPhotos(winterPhotos)
    }

    const handleCityPhotos = () => {
        setPhotos(cityPhotos)
    }

    const handleOfficePhotos = () => {
        setPhotos(officePhotos)
    }
    const handleFoodPhotos = () => {
        setPhotos(foodPhotos)
    }
    const handleAutumnPhotos = () => {
        setPhotos(autumnPhotos)
    }
    const handleDeskPhotos = () => {
        setPhotos(deskPhotos)
    }
    const handleOutdoorPhotos = () => {
        setPhotos(outdoorPhotos)
    }


    return (
        <div>
            <Button style={{textAlign:'left'}} onClick={() => handleAllPhotos()} color="secondary">All</Button>
            <Button color="secondary" onClick={() => handleSummerPhotos()}>Summer</Button>
            <Button color="secondary" onClick={() => handleWinterPhotos()}>Winter</Button>
            <Button color="secondary" onClick={() => handleCityPhotos()}>City</Button>
            <Button color="secondary" onClick={() => handleOfficePhotos()}>Office</Button>
            <Button color="secondary" onClick={() => handleFoodPhotos()}>Food</Button>
            <Button color="secondary" onClick={() => handleAutumnPhotos()}>Autumn</Button>
            <Button color="secondary" onClick={() => handleDeskPhotos()}>Desk</Button>
            <Button color="secondary" onClick={() => handleOutdoorPhotos()}>Outdoor</Button>
            <Gallery photos={Photos} />
        </div>
    )
}
