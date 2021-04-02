import React from 'react'
import Carousel from 'react-grid-carousel'
import {Container,Typography} from '@material-ui/core'

const textStyle={
    color: 'white',
    backgroundColor: 'grey'
}

function Slider(){
  return (
      <div className="secondBlock">
      <Container>
        <Typography variant='h6' component="h6" style={{textAlign:'left',marginLeft: '15px'}}>Top Categories</Typography>      
            <Carousel cols={3} rows={1} gap={10}>
            <Carousel.Item> 
                <img alt="winter" width="100%" height="50%" src="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <Typography variant="h6" component="h6" style={textStyle}>Winter</Typography>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="50%" alt="summer" src="https://images.pexels.com/photos/5980/food-sunset-love-field.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Typography variant="h6" component="h6" style={textStyle}>Summer</Typography>
            </Carousel.Item>
            <Carousel.Item>
                <img width="100%" height="50%" alt="beach" src="https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Typography variant="h6" component="h6" style={textStyle}>Beach</Typography>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="city" width="100%" height="50%" src="https://images.pexels.com/photos/1191377/pexels-photo-1191377.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Typography variant="h6" component="h6" style={textStyle}>City</Typography>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="office" width="100%" height="50%" src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Typography variant="h6" component="h6" style={textStyle}>Office</Typography>
            </Carousel.Item>
            <Carousel.Item>
                <img alt="food" width="100%" height="50%" src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Typography variant="h6" component="h6" style={textStyle}>Food</Typography>
            </Carousel.Item>
            </Carousel>
    </Container>
    </div>
  )
}

export default Slider