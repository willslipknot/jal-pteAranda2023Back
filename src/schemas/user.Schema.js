import {z} from "zod"

export const registerSchema = z.object({
    nombre: z.string({required_error: "Nombre requerido"}),
    correo:  z.string({required_error: "Correo requerido"}).email({message:"Correo invalido"}),

})
