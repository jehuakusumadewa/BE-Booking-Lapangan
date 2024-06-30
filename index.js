const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");



const app = express();
const loginRouter = require('./src/routes/auth.route.js');
const rekeningRouter = require('./src/routes/rekening.route.js');
const bookingRouter = require('./src/routes/booking.route.js');
const lapanganRouter = require('./src/routes/lapangan.route.js')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/auth", loginRouter);
app.use("/rekening", rekeningRouter);
app.use("/booking", bookingRouter);
app.use("/lapangan", lapanganRouter);




app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log("Server Running");
});