import express from 'express';
import { fileURLToPath } from 'url';
const app = express();
const movieRoutes = import('./routes/movies.Routes');
app.use(express.json());
app.use('/api', movieRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`server is running on port ${PORT}`);
})