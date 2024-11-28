const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/apida')
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.log('Error de conexion a MongoDB:', err));

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
});

const Item = mongoose.model('Item', itemSchema);

app.post('/items', async (req, res) => {
    const { name, description } = req.body;

    try {
        const newItem = new Item({
            name: name,
            description: description
        });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el item', error: err.message });
    }
});


app.put('/items/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;

    try {
        const updatedItem = await Item.findByIdAndUpdate(id, { name, description }, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar el item', error: err.message });
    }
});

app.delete('/items/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: 'Item no encontrado' });
        }
        res.status(200).json({ message: 'Item eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el item', error: err.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
