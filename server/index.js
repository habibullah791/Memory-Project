import expess from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// Importing Modules
import routerPost from './routes/posts.js';

// Creating app
const app = expess();


// MiddleWare
app.use('/posts', routerPost);



app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());




// Connecting Database
const CONNECTION_URL = 'mongodb+srv://root:12345@cluster0.jtmj9.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server started on port: ${PORT}`)))
.catch((err) => console.log(err.message));
