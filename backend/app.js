const express = require ('express');
const port = 3001
const cors = require('cors')

const taskRouter = require('./src/routes/taskRoutes');

const app = express()


// app.use(cors)
app.use(cors({
    origin: 'http://localhost:5173'
}))    // indica quien se puede conectar

app.use(express.json())

app.use('/', taskRouter);

app.listen(port, () => console.log(`aplicación coriendo de 10 en el puerto ${port}. Que te sea leve!!` ));