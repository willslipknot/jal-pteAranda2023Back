import Candidato from '../models/candidato.models.js';

export const getCandidato = async (req, res) => {
  const { partido } = req.params;
  try {
    const candidatos = await Candidato.findAll({
      where: {
        partido: partido,
      },
    });

    if (candidatos.length === 0) {
      return res.status(404).json({ message: "No existen candidatos para el partido proporcionado." });
    }

    res.json(candidatos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener candidatos por partido.' });
  }
};

export const getCand = async (req, res) => {
  const candidatoFound = await Candidato.findByPk(req.params.id)
  if (!candidatoFound) return res.status(404).json(["No existe el candidato"])
  res.json(candidatoFound)
}
