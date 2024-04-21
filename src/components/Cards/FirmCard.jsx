import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditNoteIcon from '@mui/icons-material/EditNote';


export default function FirmCard ({_id,name,address,image,phone}) {
    return (
        <Card sx={{
            height:390,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            padding:".5rem"
         }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {address}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 140, objectFit:"contain"}}
                component="img"
                image={image}
                title={name}
            />
            <CardContent>
            <Typography variant="body2" color="text.secondary">
               Phone: {phone}
            </Typography>
            </CardContent>
            <CardActions 
            sx={{
                justifyContent:"center",
                alignItems:"center", 
                gap:2
                }}
                >
                <EditNoteIcon/>
                <DeleteForeverIcon/>
            </CardActions>
        </Card>
    );
}