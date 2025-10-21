import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listarAutores = await autor.find({});
            res.status(200).json(listarAutores);
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisicao` })
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na requisicao do autor` })
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso!", autor: novoAutor });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao cadastrar autor` })
        }
    }

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "autor atualizado" });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha na atualizacao do autor` })
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id)
            res.status(200).json({ message: "autor removido com sucesso" });
        } catch (err) {
            res.status(500).json({ message: `${err.message} - falha ao excluir autor`})
        }
    }

};

export default AutorController;