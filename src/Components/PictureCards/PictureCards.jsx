import React from 'react'
import { Grid } from '@mui/material'
import PictureCard from './PictureCard/PictureCard'

const PictureCards = ({NasaData, updateLikeFlag}) => {
    return (
        <main>
            <Grid container justify = "center" spacing = {5}>
                {//Rendering a "PictureCard" which displays data for each picture
                NasaData.map((image,ikey)=>
                    <Grid item key = {ikey} xs = {12} sm = {6} md = {4} lg = {3} >
                        <PictureCard key = {ikey} image ={image} i ={ikey} />
                        
                    </Grid>
                )}
            </Grid>
        </main>
    )
}

export default PictureCards
