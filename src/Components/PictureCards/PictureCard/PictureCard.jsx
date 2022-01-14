import React from 'react'
import { Card,CardMedia,CardActions,CardContent,Grid, Typography } from '@mui/material'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { IconButton } from '@mui/material';
import {useState } from 'react';
const PictureCard = ({image,i}) => {    
    //useState to store "Like" for each Post
    //uses "useLocalStorage" Function to keep data upon reload/leaving the page
    const [LikeFlag, setLikeFlag] = useLocalStorage(i,0);

    //Function Used to "Like" or "Dislike" the post
    //Takes 1 Integer Parameter "LikeFlag"
    //Sets "LikeFlag" to opposite Value using react useState
    const updateLikeFlag = async(LikeFlag) => {
        if(LikeFlag ===1){
            setLikeFlag(0);
          }else{
              setLikeFlag(1);
          }
          
    }
    //Function used to keep data upon reload/leaving the page
    //Takes 2 parameters similar to useState but the "key" parameter is used as a reference for the data upon page reload
    function useLocalStorage(key, initialValue) {
        const [storedValue, setStoredValue] = useState(() => {
          try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
          } catch (error) {
            console.log(error);
            return initialValue;
          }
        });
        const setValue = (value) => {
          try {
            const valueToStore =
              value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
          } catch (error) {
            console.log(error);
          }
        };
        return [storedValue, setValue];
      }
    //Rendering the data for each Picture
    return (
        <Card>
            <Grid container spacing = {0} direction = "column" alignItems="center" justify = "center">
                <Grid item xs = {3}>
                    {image.hdurl &&
                    <CardMedia image = {image.url} title = {image.title} style={{ height: "250px", paddingTop: "2%" }}/>
                    }
                    {image.media_type=="video" && <iframe src={image.url} height="250px"></iframe>}
                    <CardContent>
                        <div>
                            <Typography variant = "h5" gutterBottom>
                                {image.title}
                            </Typography>
                            <Typography variant = "h7" gutterBottom>
                                Taken on : {image.date}
                            </Typography>
                            <IconButton>
                                {LikeFlag===1&&<ThumbUpIcon htmlColor='CornflowerBlue' type="button" onClick={() => updateLikeFlag(LikeFlag) } value={LikeFlag} />}
                                {LikeFlag===0&&<ThumbUpOffAltIcon type="button" onClick={() => updateLikeFlag(LikeFlag) } value={LikeFlag} />}
                            </IconButton>
                            
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
    
}

export default PictureCard
