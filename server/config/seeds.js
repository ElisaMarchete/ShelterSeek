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
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ultricies mattis",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 3,
      cat: true,
      dog: false,
      rabbit: true,
    },
    {
      _id: "64d2dcd0f737eeb85b86fd72",
      name: "Shelter 2",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test2@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ultricies mattis, tellus",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 4,
      cat: false,
      dog: true,
      rabbit: false,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd85",
      name: "Shelter 3",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest3@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ",
      image:
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 1,
      cat: true,
      dog: false,
      rabbit: true,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd81",
      name: "Shelter 4",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest5@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2948&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 4,
      cat: true,
      dog: true,
      rabbit: true,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd80",
      name: "Shelter 5",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test6@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 5,
      cat: false,
      dog: false,
      rabbit: false,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd89",
      name: "Shelter 6",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test7@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 1,
      cat: false,
      dog: true,
      rabbit: false,
    },
    {
      _id: "64d3aab060abe4a8d7f4cd90",
      name: "Shelter 7",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test8@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      BankTransitNumber: "123",
      BankInstitutionNumber: "456",
      BankAccount: "789",
      rating: 3,
      cat: true,
      dog: false,
      rabbit: false,
    },
  ]);

  return shelters;
});
