import React from "react";
import { ProductData } from "../../Data/Data";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './ProductCard.css'

const ProductCard = () => {
  return (
    <div className="Cards">
      {ProductData.map((card, id) => {
        return (
            <Card >
                <CardActionArea>
                <CardMedia
                    component="img"
                    height="180"
                    image={card.img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {card.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Rs {card.price}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        );
      })}
    </div>
  );
};

export default ProductCard;
