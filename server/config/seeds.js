const db = require("./connection");
const { Shelter } = require("../models");

db.once("open", async () => {
  await Shelter.deleteMany();

  const shelters = await Shelter.insertMany([
    {
      name: "Shelter 1",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest1@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1130?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlbHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
    },
    {
      name: "Shelter 2",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test2@gmail.com",
      password: "password12345",
      description: "This is a test shelter.",
      image:
        "https://images.unsplash.com/photo-1518791841217-8f162f1e1130?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hlbHRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
    },
  ]);
});
