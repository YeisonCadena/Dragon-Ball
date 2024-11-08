import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '350px', 
  maxWidth: '600px', 
  height: '450px', 
  transition: 'transform 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    transform: 'scale(1.08)', 
  },
}));

const StyledCardMedia = styled(CardMedia)({
  backgroundImage: 'url("https://th.bing.com/th/id/OIP.pE6Dcv_5IFxkKNspkneg3wAAAA?rs=1&pid=ImgDetMain")',
  height: '250px', 
  objectFit: 'contain', 
});

const CharCard = ({ img = "https://media.istockphoto.com/id/1326506559/ko/%EB%B2%A1%ED%84%B0/%EB%96%A8%EC%96%B4%EC%A7%80%EB%8A%94-%EB%B6%88-%ED%94%BD%EC%85%80-%EC%9C%A0%EC%84%B1-%EB%B6%88%ED%83%80%EB%8A%94-%EC%86%8C%ED%96%89%EC%84%B1%EC%9D%B4-%EB%B9%9B%EB%82%98%EB%8A%94-%EC%9A%B4%EC%84%9D-%ED%95%B5%EC%9C%BC%EB%A1%9C-%EB%B6%88%ED%83%80%EB%8A%94-%EB%B6%88%EC%9D%84-%ED%96%A5%ED%95%B4-%EB%8F%8C%EC%A7%84%ED%95%A9%EB%8B%88%EB%8B%A4.jpg?s=170667a&w=0&k=20&c=yxFEfLISJv-HfqHmlOAkTXhWd-GDw0bpyZxjS12jRWA=", nombre = "_____", especie = "____" }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <StyledCardMedia
          component="img"
          image={img}
          alt="Character Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {especie}
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default CharCard;
