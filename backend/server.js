const express = require('express');
const cors = require('cors')
const colors = require('colors')
const connectDb = require('./config/db')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

connectDb();

const app = express();

// worker thread.
// const { Worker, isMainThread, workerData } = require('worker_threads');
// class ThreadPool {
//     constructor(size) {
//       this.size = size;
//       this.workers = [];
//       this.queue = [];
  
//       for (let i = 0; i < size; i++) {
//         this.workers.push(new Worker(__filename, { workerData: {} }));
//       }
  
//       this.workers.forEach((worker) => {
//         worker.on('message', (result) => {
//           const { resolve } = this.queue.shift();
//           resolve(result);
//         });
//       });
//     }
  
//     execute(task) {
//       return new Promise((resolve, reject) => {
//         if (this.queue.length < this.size) {
//           this.queue.push({ task, resolve, reject });
//           const { task } = this.queue.shift();
//           this.workers[0].postMessage({ task });
//         } else {
//           this.queue.push({ task, resolve, reject });
//         }
//       });
//     }
//   }
  
//   if (!isMainThread) {
//     const { parentPort } = require('worker_threads');
//     const tasks = [];
  
//     parentPort.on('message', ({ task }) => {
//       tasks.push(task);
  
//       if (tasks.length === 1) {
//         runTask();
//       }
//     });
  
//     async function runTask() {
//       const task = tasks[0];
//       const result = await task();
//       parentPort.postMessage(result);
  
//       tasks.shift();
  
//       if (tasks.length > 0) {
//         runTask();
//       }
//     }
//   }
  
//   // Create a thread pool with four workers
//   const pool = new ThreadPool(4);
  
// use compression.
const compression = require('compression');
app.use(
    compression({
        level: 6,
        // threshold: 100*1000,
        filter: (req, res) => {  
            if(req.headers['x-no-compression']){
                return false;
            }
            return compression.filter(req,res)
        }
    })
)

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