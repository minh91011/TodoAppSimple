const jsonServer = require('json-server');
const cors = require('cors'); // Thêm cors module
const server = jsonServer.create();
const router = jsonServer.router('data/todoapp.json'); // Thay 'db.json' bằng tên tệp dữ liệu của bạn
const middlewares = jsonServer.defaults();

// Sử dụng CORS
server.use(cors()); // Thêm CORS middleware
server.use(middlewares);
server.use(router);

server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
