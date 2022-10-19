import express from "express";

const PORT = 2000;
const app = express();

app.get('/rainbowColor', (req, res) => {
    res.status(200).json(rainbow);
})

app.listen(PORT, () => console.log('Server work(PORT:' + PORT + ')'));

const rainbow = [
    {
    "number": 1,
    "color": "красный",
    "word": "каждый"
    },
    {
      "number": 2,
      "color": "оранжевый",
      "word": "охотник"
    },
    {
      "number": 3,
      "color": "желтый",
      "word": "желает"
    },
    {
      "number": 4,
      "color": "зеленый",
      "word": "знать"
    },
    {
      "number": 5,
      "color": "голубой",
      "word": "где"
    },
    {
      "number": 6,
      "color": "синий",
      "word": "сидит"
    },
    {
      "number": 7,
      "color": "фиолетовый",
      "word": "фазан"
    }
  ]