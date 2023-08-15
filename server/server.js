const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const cloudinary = require("cloudinary").v2; 
const multer = require("multer"); 
const cors = require('cors');

cloudinary.config({
  cloud_name: "duzi3xpjk",
  api_key: "318385577255689",
  api_secret: "NvH3PbNgv-8TR8iETj7HyITGWkE",
});

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    authMiddleware,
    cloudinary,
  }),
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post('/getimg', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No image uploaded' });
    }

    const result = await cloudinary.uploader.upload_stream({ folder: 'ShelterSeek' }, (error, result) => {
      if (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ message: 'Image upload failed' });
      } else {
        const imageUrl = result.secure_url;
        res.status(200).json({ imageUrl });
      }
    }).end(req.file.buffer);

  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Image upload failed' });
  }
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};

startApolloServer();
