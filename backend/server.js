const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/partsdb', {

});

const partSchema = new mongoose.Schema({
  name: String,
});

const Part = mongoose.model('Part', partSchema);

app.get('/api/parts', async (req, res) => {
  try {
    const parts = await Part.find();
    res.json(parts);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/parts', async (req, res) => {
  try {
    const { name } = req.body;
    const newPart = new Part({ name });
    await newPart.save();
    res.json(newPart);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
