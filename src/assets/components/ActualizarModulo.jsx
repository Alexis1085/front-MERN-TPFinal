import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ActualizarModulo = () => {

    const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: {
        alias: localStorage.getItem('Alias'),
        calle: localStorage.getItem('Calle'),
        ciudad: localStorage.getItem('Ciudad'),
        diaSemana: localStorage.getItem('DiaSemana'),
        horaInicio: localStorage.getItem('HoraInicio'),
        duracionTurnos: localStorage.getItem('DuracionTurnos'),
        cantidadTurnos: localStorage.getItem('CantidadTurnos'),
        mensaje: localStorage.getItem('Mensaje')
    }});

    const navigate = useNavigate();

    let id = localStorage.getItem('ID');

    const actualizarModulo = (formData, e) => {
        
        const URL = import.meta.env.VITE_URL_BACK;
        // ? Previene que se envíen los datos?
        e.preventDefault(); 
        console.log(formData);

        try {
            axios.put(`${URL}/admin/modulos/update/${id}`, formData)
            .then(response => {
                if (response.data.moduloActualizado) {
                    e.target.reset(); //Resetea los datos del formulario.
                    navigate(-1)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="formContainer">
            <h4>Actualizar Información del Módulo</h4>
            <form onSubmit={handleSubmit(actualizarModulo)}>
                <fieldset>
                    <legend>Actualizar Módulo</legend>
                    <div>
                        <label htmlFor="direccion">Dirección del Consultorio:
                        </label>
                        <div className="formField">
                            <label htmlFor="calle"
                                className={errors.calle && "error"}
                            >Calle: 
                            {errors.calle && <span> * </span>}
                            </label>
                            <input  
                                type="text" 
                                id="calle"
                                name="calle"
                                placeholder="Calle y número"
                                maxLength={100}
                                {...register('calle', {
                                    required: true
                                })}
                            />
                        </div>
                        <div className="formField">
                            <label htmlFor="ciudad"
                                className={errors.ciudad && "error"}
                            >Localidad: 
                            {errors.ciudad && <span> * </span>}
                            </label>
                            <input  
                                type="text" 
                                id="ciudad"
                                name="ciudad"
                                placeholder="Ciudad"
                                maxLength={50}
                                {...register('ciudad', {
                                    required: true
                                })}
                            />
                        </div>
                    </div>
                    <div className="formField">
                        <label htmlFor="diaSemana"
                            className={errors.diaSemana && "error"}
                        >Día de la Semana:
                        {errors.diaSemana && <span> * </span>}
                        </label>
                        <select id="diaSemana" name="diaSemana"
                            {...register('diaSemana', {
                                required: true
                            })}
                        >
                            <option value="1">lunes</option>
                            <option value="2">martes</option>
                            <option value="3">miércoles</option>
                            <option value="4">jueves</option>
                            <option value="5">viernes</option>
                            <option value="6">sábado</option>
                        </select>
                    </div>
                    <div className="formField">
                        <label htmlFor="horaInicio"
                            className={errors.horaInicio && "error"}
                        >Hora de Inicio del Módulo: 
                        {errors.horaInicio && <span> * </span>}
                        </label>
                        <input  
                            type="time" 
                            id="horaInicio"
                            name="horaInicio"
                            {...register('horaInicio', {
                                required: true
                            })}
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="duracionTurnos"
                            className={errors.duracionTurnos && "error"}
                        >Duración de cada turno (minutos): 
                        {errors.duracionTurnos && <span> * </span>}
                        </label>
                        <input  
                            type="number" 
                            id="duracionTurnos"
                            name="duracionTurnos"
                            {...register('duracionTurnos', {
                                required: true
                            })}
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="cantidadTurnos"
                            className={errors.cantidadTurnos && "error"}
                        >Cantidad de turnos del Módulo: 
                        {errors.cantidadTurnos && <span> * </span>}
                        </label>
                        <input  
                            type="number" 
                            id="cantidadTurnos"
                            name="cantidadTurnos"
                            {...register('cantidadTurnos', {
                                required: true
                            })}
                        />
                    </div>
                    <div>
                        <label htmlFor="mensaje"
                            className={errors.mensaje && "error"}
                        >Agregue un mensaje para el paciente:
                        {errors.mensaje && <span> * </span>}
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Escriba un mensaje para el paciente"
                            rows={4}
                            maxLength={300}
                            {...register('mensaje', {
                                required: true
                            })}
                        ></textarea>  
                    </div>
                    <div className="formField">
                        <label htmlFor="alias"
                            className={errors.alias && "error"}
                        >Alias: 
                        {errors.alias && <span> * </span>}
                        </label>
                        <input  
                            type="text" 
                            id="alias"
                            name="alias"
                            placeholder="Ejemplo: lun mañana"
                            maxLength={50}
                            {...register('alias', {
                                required: true
                            })}
                        />
                        <p>El alias es una referencia con la que usted pueda identificar rápidamente al Módulo.</p>
                    </div>
                </fieldset>
                <div className="botonera">
                    <Link to="/admin-panel/modulos">
                        <button type="reset" className="button">Cancelar</button>
                    </Link>
                    <button type="submit" className="button">Actualizar Módulo</button>
                </div>
            </form>
        </div>
    )
}

export default ActualizarModulo;