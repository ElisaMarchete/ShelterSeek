const db = require("./connection");
const { Shelter } = require("../models");

db.once("open", async () => {
  await Shelter.deleteMany();

  const shelters = await Shelter.insertMany([
    {
      _id: "64d2dcd0f737eeb85b86fd71",
      name: "Getting Wild Rescue",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest1@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ultricies mattis",
      image:
        "https://media.istockphoto.com/id/1250060339/photo/dog-shelter.jpg?s=612x612&w=0&k=20&c=-YBjeCarIKcvzONuxHdYAr1N64DjiiDOa56QOArlvY4=",
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
      name: "Tiny Paws Foundation",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test2@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ultricies mattis, tellus",
      image:
        "https://petnewsdaily.com/wp-content/uploads/2022/02/animal-shelter.jpg",
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
      name: "Fur Baby Sanctuaries",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest3@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi elit. Phasellus maximus vitae felis eu accumsan. Nam pharetra est tortor, vitae imperdiet tortor scelerisque eget. Nam maximus, mauris at ",
      image:
        "https://static.foxnews.com/foxnews.com/content/uploads/2020/01/iStock-1085082058.jpg",
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
      name: "Big Dog Network",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "sheltertest5@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://www.pawtracks.com/wp-content/uploads/sites/2/2021/04/shelter-1.jpg?fit=1024%2C1024&p=1",
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
      name: "Domestic Pet Rescue",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test6@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://media.istockphoto.com/id/1336952559/photo/dog-shelter.jpg?s=612x612&w=0&k=20&c=A9VZxDBu_lqgn67AXAhM2rAvcA0KuZySI-MhiTTwUz0=",
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
      name: "Beloved Pet",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test7@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://www.localpetcare.com/c/assets/images/blog/Where-to-Adopt-a-Pet-in-Boston-adopting-puppy.jpg",
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
      name: "Lucky Duck Rescue",
      address: "1234 Main St.",
      phone: "555-555-5555",
      email: "test8@gmail.com",
      password: "password12345",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis arcu id justo lacinia, id feugiat elit vehicula. Maecenas non sem ut felis commodo facilisis nec in metus. Sed eget urna neque. Suspendisse potenti. Curabitu",
      image:
        "https://static.wixstatic.com/media/11062b_b6c8baa8ff984129978b3b68743fafa3~mv2.jpg/v1/fill/w_2500,h_1666,al_c/11062b_b6c8baa8ff984129978b3b68743fafa3~mv2.jpg",
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
