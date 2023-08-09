import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { styled } from '@mui/system';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

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
            Shelter Name {userData.savedBooks}
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  src="/save.PNG" 
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
    </>
  );
};

export default ShelterInfo;