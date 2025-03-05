const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// เชื่อมต่อกับ MongoDB
connectDB();

app.use(cors());
app.use(express.json()); // ใช้ JSON parser เพื่อรับข้อมูลจาก Body

// ใช้งาน API Routes
app.use('/api/items', require('./routes/items'));

const PORT = process.env.PORT || 5000; // ใช้ PORT ที่ตั้งไว้ใน .env หรือพอร์ต 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
