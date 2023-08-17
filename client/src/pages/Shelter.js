import { React, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS_BY_ID, GET_PETS } from "../utils/queries";
import { styled } from "@mui/system";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useParams } from "react-router-dom";
import Donation from "../components/Donation";


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
  const classes = useStyles();
  const { id } = useParams();
  
  // State variables
  const [shelter, setShelter] = useState({});
  const [pets, setPets] = useState([]);

  // Query for shelter data
  const { loading: shelterLoading, error: shelterError, data: shelterData } = useQuery(GET_SHELTERS_BY_ID, {
    variables: { _id: id },
  });

  // Update shelter state when shelterData changes
  useEffect(() => {
    if (shelterData) {
      setShelter(shelterData.getShelter);
      console.log(shelterData.getShelter);
    }
  }, [shelterData]);

  // Query for pets data
  const { loading: petsLoading, error: petsError, data: petsData } = useQuery(GET_PETS, {
    variables: { shelterId: id },
  });

  // Update pets state when petsData changes
  useEffect(() => {
    if (petsData) {
      setPets(petsData.pets);
      console.log(petsData.pets);
    }
  }, [petsData]);


  return (
    <>
      <div className={classes.imageContainer}>
        <Container>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {shelter.name}
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Card>
                <CardMedia
                  component="img"
                  src={shelter.image}
                  alt="Description of the image"
                  className={`${classes.imgFluid} ${classes.image}`}
                />
                <CardContent>
                  <Grid container direction="column" alignItems="center">
                    <Typography variant="body1" className={classes.description}>
                      {shelter.description}
                    </Typography>
                    <div className={classes.donateButton}>
                      <Donation shelterId='3' />
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
            Viewing {shelter.name}'s pets!
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
    </>
  );
};

export default ShelterInfo; 