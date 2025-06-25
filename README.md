# SyllabusSeal

SyllabusSeal is a beautifully designed, responsive web platform created to empower **TechUndergrads** — especially BSc IT and CS students — with semester-wise notes, curated guidance, feedback features, and more. Designed for clarity and convenience, it helps students **seal their success, one subject at a time.**

---

## 🚀 Features

-  **Notes Library** – View and filter notes by course, year, semester, or title.
-  **Note Uploading** – Admins can upload PDFs with associated metadata (title, course, subject, etc.).
-  **PDF Storage & Download** – Securely upload and serve notes using a backend with MongoDB GridFS.
-  **Feedback System** – Collect and display feedback from students.
-  **Student Guide** – Curated educational resources, helpful links, and portfolio access.
-  **Role-Based Access** – Admins get upload rights; users have view-only access.
-  **Aesthetic & Minimal UI** – Soft gradients and elegant minimalism, inspired by modern design trends.
-  **Deployed on Vercel + Render** – Frontend on Vercel, backend API hosted on Render.

---

## 🛠️ Tech Stack

| Layer         | Technology                                |
|---------------|--------------------------------------------|
| Frontend      | React.js (CRA), Tailwind CSS, CSS-in-JS   |
| Routing       | React Router DOM                          |
| State Mgmt    | React Hooks                               |
| UI Enhancements | Typewriter Animations, Gradient Effects  |
| Icons         | Emoji + Custom SVGs                       |
| Backend       | Node.js, Express.js                       |
| File Upload   | `multer`, `express-fileupload`            |
| Database      | MongoDB + Mongoose                        |
| File Storage  | MongoDB GridFS                            |
| Hosting       | Frontend: Vercel<br>Backend: Render       |

---

## 🚀 Live Demo

 [Visit SyllabusSeal on Vercel](https://syllabusseal-ss.vercel.app/)

---

## 🧑‍💻 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/divyasai2004/SyllabusSeal.git
```
### 2. Start the Backend

```
cd SyllabusSeal/backend
npm install
node index.js
```
### 3. Start the Frontend

```
cd ../frontend
npm install
npm start
```
### 4. Create a .env file in the backend folder with:
```
MONGODB_URI=your_mongo_connection_string
PORT=5000
```

📜 License
MIT License © 2025 Divyasai Ganti





