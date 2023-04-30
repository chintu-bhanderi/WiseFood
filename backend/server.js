const express = require('express');
const cors = require('cors')
const colors = require('colors')
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDb();

const app = express();

// body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.use('/api/food-item/' , require('./routes/foodItemsRoutes') )
app.use('/api/category/' , require('./routes/foodCategoryRoutes') )
app.use('/api/table/' , require('./routes/tableRoutes') )
app.use('/api/order/' , require('./routes/foodOrderRoutes') )
app.use('/api/slot/' , require('./routes/slotRoutes') )
app.use('/api/table-book/' , require('./routes/tableBookRoutes') )
app.use('/api/auth/' , require('./routes/authRoutes') )
app.use('/api/worker/' , require('./routes/workerRoutes') )
app.use('/api/worker-action/' , require('./routes/workerActionRoutes') )    
app.use('/api/test/' , require('./routes/testRoutes') )    

app.listen(port, ()=>console.log(`Server started on port ${port}`))