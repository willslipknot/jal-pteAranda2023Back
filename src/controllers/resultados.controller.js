import Calificacion from '../models/calificacion.models.js'

export const getCands = async (req, res) => {
    const candidatos = await Calificacion.findAll()
    res.json(candidatos)
}
