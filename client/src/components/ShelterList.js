import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Donation from "./Donation";

function ShelterList() {
  // TODO: DELETE SHELTERS ARRAY BELOW, PULL FROM DATABASE INSTEAD. BELOW ARRAY IS FOR DEVELOPMENT PURPOSES ONLY
  const shelters = [
    {
      _id: "64d2dcd0f737eeb85b86fd71",
      name: "Shelter 1",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest1@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 3,
    },
    {
      _id: "64d2dcd0f737eeb85b86fd72",
      name: "Shelter 2",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test2@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 4,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd85",
      name: "Shelter 3",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest1@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 1,
    },
    {
      _id: 4,
      name: "Shelter 4",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest1@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 5,
    },
  ];

  return (
    <div className="ShelterList">
      <h2>List of Shelters</h2>
      <div className="shelters-section">
        {shelters.map((shelter) => {
          return (
            <Card
              sx={{ maxWidth: 400 }}
              className="shelter-card"
              key={shelter._id}
              to={`/shelters/${shelter._id}`}
            >
              <Link
                to={{
                  pathname: `/shelters/${shelter._id}`,
                  state: { shelter }, // Pass shelter as state
                }}
                style={{ textDecoration: "initial", color: "initial" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image={shelter.image}
                    alt={shelter.name}
                  />
                  <CardContent className="shelter-info">
                    <Typography gutterBottom variant="h5" component="div">
                      {shelter.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {shelter.description}
                    </Typography>
                    <Rating
                      className="shelter-rating"
                      name="simple-controlled"
                      value={shelter.rating}
                      readOnly
                      style={{ color: "black" }}
                      size="small"
                    />
                  </CardContent>
                </CardActionArea>
              </Link>
              <Donation shelterId={shelter._id} />
            </Card>

            // <div className="shelter-card" key={shelter._id}>
            //   <img src={shelter.image} alt={`${shelter.name}`}></img>

            //   <div className="shelter-info">
            //     <h1>{shelter.name}</h1>
            //     <h2>{shelter.description}</h2>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShelterList;
