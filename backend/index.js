import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes)

app.listen(5000, () => {
  console.log(`Server running at http://localhost:5000`);
});
