import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.rnbfyj8.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");

    return mongoose.connection;
};

export default conectaNaDataBase;