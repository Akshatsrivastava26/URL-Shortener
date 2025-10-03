# 🔗 Short URL Generator

A simple **URL Shortener** built with **Node.js, Express, and MongoDB**.  
This project allows users to shorten long URLs into compact links, making them easier to share and manage.

---

## 🚀 Features
- Shorten long URLs into unique short links
- Redirect short links to original URLs
- MongoDB integration for persistent storage
- Simple REST API for URL management
- Lightweight and easy to deploy

---

## 🛠️ Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **JavaScript**

---

## 📂 Project Structure
```
SHORT-URL/
│── index.js          # Main server file
│── connect.js        # Database connection
│── package.json      # Dependencies & scripts
│── .gitignore        # Ignored files
```

---

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/SHORT-URL.git
   cd SHORT-URL
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder and add:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```bash
   npm start
   ```
   or (if using nodemon):
   ```bash
   npm run dev
   ```

---

## 📌 Usage
- Send a POST request to `/shorten` with a long URL → Get a short link.
- Open the generated short link → Redirects to the original URL.

Example:
```json
POST /shorten
{
  "url": "https://example.com/very/long/link"
}
```
Response:
```json
{
  "shortUrl": "http://localhost:8002/abc123"
}
```

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repo and submit a pull request.

---

## 📜 License
This project is licensed under the **MIT License**.
