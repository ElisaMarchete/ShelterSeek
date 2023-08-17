import { React, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS_BY_ID, GET_PETS } from "../utils/queries";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";
import Donation from "../components/Donation";
import { DogIcon, CatIcon, RabbitIcon } from "../components/Icons";

const ShelterInfo = () => {
  const { id } = useParams();

  // State variables
  const [shelter, setShelter] = useState({});
  const [pets, setPets] = useState([]);

  // Query for shelter data
  const { loading: shelterLoading, error: shelterError, data: shelterData } =
    useQuery(GET_SHELTERS_BY_ID, {
      variables: { _id: id },
    });

  // Update shelter state when shelterData changes
  useEffect(() => {
    if (shelterData) {
      setShelter(shelterData.getShelter);
      console.log(shelterData.getShelter.rating);
    }
  }, [shelterData]);

  // Query for pets data
  const { loading: petsLoading, error: petsError, data: petsData } = useQuery(
    GET_PETS,
    {
      variables: { shelterId: id },
    }
  );

  // Update pets state when petsData changes
  useEffect(() => {
    if (petsData) {
      setPets(petsData.pets);
      console.log(petsData.pets);
    }
  }, [petsData]);
  const ratingValue = shelter.rating !== undefined ? shelter.rating : 0;

  return (
    <div style={{ padding: "20px" }}>
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
                style={{ maxWidth: "100%" }}
              />
              <CardContent>
                <Grid container direction="column" alignItems="center">
                  <Typography
                    variant="body1"
                    style={{ marginTop: "20px" }}
                  >
                    {shelter.description}
                  </Typography>
                  <div>
                    <Donation shelterId={shelter._id} />
                  </div>
                  <Rating
                    className="shelter-rating"
                    name="simple-controlled"
                    value={ratingValue}
                    readOnly
                    style={{ color: "black" }}
                    size="small"
                  />
                  <div className="animals-kept">
                    {shelter.dog ? <DogIcon /> : null}
                    {shelter.cat ? <CatIcon /> : null}
                    {shelter.rabbit ? <RabbitIcon /> : null}
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
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
                      style={{
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
    </div>
  );
};

export default ShelterInfo;