const io = require('socket.io')(5000, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

let workers = [];
const addWorker = (workerId, socketId, workerInfo) => {
    const checkWorker = workers.some(w => w.workerId === workerId);
    if (!checkWorker) {
        workers.push({ workerId, socketId, workerInfo });
    }
}

const removeWorker = (socketId) => {
    workers = workers.filter(w => w.socketId !== socketId);
}

const findworker = (id) => {
    return workers.find(w => w.workerId == id);
}

io.on('connection', (socket) => {
    console.log('Socket is connecting...');
    socket.on('add-worker', (workerId, workerInfo) => {
        addWorker(workerId, socket.id, workerInfo);
    })
    socket.on('remove-worker', (workerId, workerInfo) => {
        addWorker(workerId, socket.id, workerInfo);
    })
    socket.on('food-ordered', (workerId) => {
        const worker = findworker(workerId);
        if (worker) {
            io.to(worker.socketId).emit('get-order', {
                msg: "get-ordered"
            });
        }
    })
    socket.on('order-done', (workerId) => {
        const worker = findworker(workerId);
        if (worker) {
            io.to(worker.socketId).emit('order-update', {
                msg: "get-updated"
            });
        }
    })
    socket.on('disconnect', () => {
        console.log('worker is disconnected')
        removeWorker(socket.id);
    })
})
