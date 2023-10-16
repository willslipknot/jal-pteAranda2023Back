import Voto from '../models/calificacion.models.js'

export const createVoto = async (req, res) => {
    const { candidato, id_candidato, comentario, estrellas, voto, partido } = req.body
    const newVoto = await Voto.create({

        candidato,
        id_candidato,
        comentario,
        estrellas,
        voto,
        partido,

    });

    console.log("Voto creado correctamente");
    res.json({ message: "Voto creado correctamente" });
}