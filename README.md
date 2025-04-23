# 📊 Excel Analytics Platform

🚀 A powerful full-stack MERN application that allows users to upload Excel files (📁 .csv, .xls, .xlsx), visualize the data in interactive 2D and 3D charts, download visuals as images or PDFs, and even generate AI-powered summaries using OpenAI! Admins have full visibility over user activity and uploads.

---

## 🌟 Features

🧑‍💼 User Features:
- 🔐 JWT Authentication (Login / Register)
- 📂 Upload Excel (.csv, .xls, .xlsx) files
- 📈 Generate interactive 2D charts (Bar, Line, Pie)
- 🧊 Explore data in 3D visualizations (react-three-fiber + drei)
- 📥 Download charts as PNG / PDF
- 🤖 AI-based data summary using OpenAI API
- 📁 View personal upload history

🛠️ Admin Features:
- 🧑‍💻 View all registered users
- 📦 Monitor all uploaded files across the platform

🎛 Optional:
- 🌙 Dark Mode Toggle
- ⚙️ Settings Page (theme, preferences)
- 🧑 Profile Page
- 🔐 Route Guards for protected content

---

## 🧰 Tech Stack

Frontend:
- ⚛️ React.js + React Router
- 💨 Tailwind CSS for styling
- 📊 Chart.js (2D Charts)
- 🧊 Three.js + react-three-fiber (3D Charts)
- 🧠 html2canvas, html2pdf.js (downloads)
- 🚦 PrivateRoute for route protection

Backend:
- 🌐 Node.js + Express.js
- 🗃️ MongoDB + Mongoose
- 📤 Multer + SheetJS (xlsx) for file parsing
- 🔐 JWT Auth + bcrypt
- 🤖 OpenAI API integration (optional)

---

## 📸 Screenshots

| Dashboard | 2D Chart | 3D Chart |
|----------|----------|----------|
| ![dashboard](https://via.placeholder.com/300x200?text=Dashboard) | ![2D Chart](https://via.placeholder.com/300x200?text=2D+Chart) | ![3D Chart](https://via.placeholder.com/300x200?text=3D+Chart) |

---

## 🛠️ Getting Started

Clone this repo:

```bash
git clone https://github.com/your-username/excel-analytics-platform.git
cd excel-analytics-platform
