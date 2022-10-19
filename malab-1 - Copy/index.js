import express from "express";

const PORT = 2001;
const app = express();

app.get('/seasonsColor', (req, res) => {
    res.status(200).json(seasons);
})

app.listen(PORT, () => console.log('Server work(PORT:' + PORT + ')'));

const seasons = [
    {
    "number": 1,
    "color": "жёлтый",
    "word": "лето"
    },
    {
      "number": 2,
      "color": "оранжевый",
      "word": "осень"
    },
    {
      "number": 3,
      "color": "белый",
      "word": "зима"
    },
    {
      "number": 4,
      "color": "зеленый",
      "word": "весна"
    },
  ]