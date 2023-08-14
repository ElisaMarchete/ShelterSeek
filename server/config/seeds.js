const db = require("./connection");
const { Shelter } = require("../models");

db.once("open", async () => {
  await Shelter.deleteMany();

  const shelters = await Shelter.insertMany([
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
      email: "sheltertest3@gmail.com",
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
      // _id: "64d3aab060abe4a8d7f4cd934",
      name: "Shelter 4",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest5@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 5,
    },
  ]);

  return shelters;
});
