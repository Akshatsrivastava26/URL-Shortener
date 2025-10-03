const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectToMongoDB } = require('./connect');
const {restrictToLoggedinUserOnly, checkAuth} = require('./middlewares/auth');
const URL = require("./models/url");

const urlRoutes = require('./routes/url');
const staticRoutes = require('./routes/staticRouter');  
const userRoutes = require('./routes/user');

const app = express();
const PORT = 8002;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("MongoDB Connected")
);

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly,  urlRoutes);
app.use("/user",  userRoutes);
app.use("/", checkAuth, staticRoutes);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({
        shortId
    }, { $push: {
         visitHistory: { timestamp: Date.now()
         }, 
        },
    }
);
res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));