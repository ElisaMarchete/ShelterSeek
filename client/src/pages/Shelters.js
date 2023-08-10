import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { styled } from '@mui/system';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const pets = [
  {
    petId : "0",
    image: "https://i.imgur.com/HQebKXY.jpeg",
  },
  {
    petId : "1",
    image: "https://i.imgur.com/iiQT5Pa.jpeg",
  },
  {
    petId : "2",
    image: "https://i.imgur.com/q2g2rID.jpeg",
  },
  {
    petId : "3",
    image: "https://i.imgur.com/90Ylvl1.jpeg",
  },
  {
    petId : "4",
    image: "https://i.imgur.com/TQbD1c7.jpeg",
  },
  {
    petId : "5",
    image: "https://i.imgur.com/UAtc9KX.jpeg",
  },
];

const useStyles = styled((theme) => ({
  imageContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  image: {
    maxWidth: '100%',
  },
  description: {
    marginTop: theme.spacing(2),
  },
  donateButton: {
    marginTop: theme.spacing(1),
    textAlign: 'center', 
  },
}));

const ShelterInfo = () => {
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_CHECKOUT);

  return (
    <>
      <div className={classes.imageContainer}>
        <Container>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Shelter Name 
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  src="https://static.wixstatic.com/media/06af3a_feeb0b4a58ed4898b1b4876e680c11c5~mv2.jpg/v1/crop/x_0,y_57,w_5577,h_1877/fill/w_795,h_265,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Website%20Header%20Artwork.jpg" 
                  alt="Description of the image"
                  className={`${classes.imgFluid} ${classes.image}`}
                />
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <Typography variant="body1" className={classes.description}>
                      Where the description will go.
                    </Typography>
                    <div className={classes.donateButton}>
                      <Button variant="contained" color="primary">
                        Donate
                      </Button>
                    </div>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="p-5">
        <Container>
          <Typography variant="h5" style={{ textAlign: 'center' }}>Viewing Shelter's pets!</Typography>
        </Container>
      </div>
      <Container>
        <div>
          <Grid container spacing={3} justifyContent="center">
            {pets?.map((pet) => (
              <Grid item xs={12} sm={6} md={4} key={pet.petId}>
                <Card variant="outlined">
                  {pet.image && (
                    <CardMedia
                      component="img"
                      src={pet.image}
                      alt={`A Pet`}
                      sx={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '300px', 
                      }}
                    />
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
};

export default ShelterInfo;