import React from 'react'
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card'
import  './styles/App.css';
import CardContent from '@material-ui/core/CardContent'


export default function CardObj({info}) {

  return (
    <Card className= "card" >
      <CardContent>
      <div className = "image-center">
      <img  className = "image-pa" src="https://cdn.pixabay.com/photo/2012/04/13/13/20/postal-32383_1280.png" />
      </div>

      <div>
          <p className="parcel_id_bold"> Parcel_id: {info.parcel_id}</p>
      </div>
       
        <div>
          <p>Status: {info.status}</p>
        </div>

        <div>
          <p>Eta: {info.eta}</p>
        </div>

        <div>
          <p> Sender: {info.sender}</p>
        </div>

        <div>
          <p> Location: {info.location_name}</p>
        </div> 
      </CardContent>
    </Card>
  )
}