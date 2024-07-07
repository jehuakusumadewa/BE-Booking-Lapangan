const path = require("path");

const fileUpload = require("express-fileupload")

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const express = require("express");

const cors = require('cors')



const app = express();
const loginRouter = require('./src/routes/auth.route.js');
const rekeningRouter = require('./src/routes/rekening.route.js');
const bookingRouter = require('./src/routes/booking.route.js');
const lapanganRouter = require('./src/routes/lapangan.route.js');
const userRouter = require('./src/routes/user.route.js');


app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(express.static("public"));
app.use("/auth", loginRouter);
app.use("/rekening", rekeningRouter);
app.use("/booking", bookingRouter);
app.use("/lapangan", lapanganRouter);
app.use("/user", userRouter);



app.listen(process.env.SERVER_PORT || 3000, () => {
    console.log("Server Running");
});