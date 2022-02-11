const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const apiRoutes = require("./src/modules/routes/routes");

app.use(cors());


const uri = "mongodb+srv://ProAlexandrRybalko:12345barsuk@cluster0.pr67v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use("/", apiRoutes);

app.listen(8000, () => {
  console.log('Example App');
});
