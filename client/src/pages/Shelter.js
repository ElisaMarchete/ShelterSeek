import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { styled } from "@mui/system";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Donation from "../components/Donation";
import AddShelterFrom from "../components/ShelterInfoDialog";

const pets = [
  {
    petId: "64d2dcd0f737eeb85b86fd71",
    image: "https://i.imgur.com/HQebKXY.jpeg",
  },
  {
    petId: "64d2dcd0f737eeb85b86fd71",
    name: "test 1",
    image: "https://i.imgur.com/iiQT5Pa.jpeg",
  },
  {
    petId: "64d2dcd0f737eeb85b86fd72",
    name: "test 2",
    image: "https://i.imgur.com/q2g2rID.jpeg",
  },
  {
    petId: "64d2dcd0f737eeb85b86fd72",
    name: "test 3",
    image: "https://i.imgur.com/90Ylvl1.jpeg",
  },
  {
    petId: "64d3aab060abe4a8d7f4cd85",
    name: "test 4",
    image: "https://i.imgur.com/TQbD1c7.jpeg",
  },
  {
    petId: "64d3aab060abe4a8d7f4cd85",
    name: "test 5",
    image: "https://i.imgur.com/UAtc9KX.jpeg",
  },
];

const useStyles = styled((theme) => ({
  imageContainer: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  image: {
    maxWidth: "100%",
  },
  description: {
    marginTop: theme.spacing(2),
  },
  donateButton: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
}));
//update this when we set up back end
const ShelterInfo = () => {
  const { id } = useParams();
  const selectedShelter = pets.find((pet) => pet.petId === id);
  const classes = useStyles();
  const { loading, data } = useQuery(QUERY_CHECKOUT);

  return (
    <>
      <div className={classes.imageContainer}>
        <Container>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            Selected Shelter
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  src={`https://i.imgur.com/TQbD1c7.jpeg`}
                  alt="Description of the image"
                  className={`${classes.imgFluid} ${classes.image}`}
                />
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <Typography variant="body1" className={classes.description}>
                      Where the description will go.
                    </Typography>
                    <div className={classes.donateButton}>
                      <Donation shelterId={id} />
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
          <Typography variant="h5" style={{ textAlign: "center" }}>
            Viewing Shelter's pets!
          </Typography>
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
                        objectFit: "cover",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
      <AddShelterFrom/>
    </>
  );
};

export default ShelterInfo;