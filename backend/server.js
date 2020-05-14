const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

//blog routes:
const blogRoutes = require('./routes/blogRoute')

//auth routes:
const authRoutes = require('./routes/authRoute')

//user routes:
const userRoutes = require('./routes/userRoute')

//user routes:
const categoryRoutes = require('./routes/categoryRoute')

//tag routes:
const tagRoutes = require('./routes/tagRoute')

//comment routes:
const commentRoutes = require('./routes/commentRoute')

//app
const app = express();

//mongoDB
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));

//middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
//cors
if (process.env.NODE_ENV === 'development')
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

// routes middleware
app.use('/api',blogRoutes)
app.use('/api',authRoutes)
app.use('/api',userRoutes)
app.use('/api',categoryRoutes)
app.use('/api',tagRoutes)
app.use('/api',commentRoutes)

//app.get() takes two arguments:
// First is the endpoint (ex '/api')
// Second is the function

//port
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
