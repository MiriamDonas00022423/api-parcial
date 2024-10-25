import mongoose from 'mongoose';


const URI = process.env.MONGODB_URI 
? process.env.MONGODB_URI 
: 'mongodb://localhost/databasetest';

/*mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('The database is connected');
})*/

/*mongoose.connect(URI)
  .then(() => console.log('The database is connected'))
  .catch((error) => console.error('Database connection error:', error));*/

  mongoose.connect(URI)
  .then(() => console.log('The database is connected'))
  .catch((error) => {
    console.error('Database connection error:', error);
    app.use((req, res, next) => {
      res.status(500).json({ message: 'Error connecting to the database' });
    });
  });

/*async function connectToDatabase() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('The database is connected');
  } catch (error) {
    console.error('Database connection error:', error);
  }
}

// Llama a la función de conexión
connectToDatabase();*/

