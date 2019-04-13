const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/stations", require("./routes/stations"));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
