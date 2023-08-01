import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const NuevosTurnos = () => {

    const { register, handleSubmit, formState: {errors}, getValues } = useForm({ defaultValues: {
        idModulo: '',
        fechaApertura: '',
        fechaCierre: ''
    }});

    const navigate = useNavigate();

    const [ listaModulos, setListaModulos ] = useState([]);

    const [ today, setToday ] =useState()

    const URL = import.meta.env.VITE_URL_BACK;

    useEffect(() => {
        setToday(new Date());
        axios.get(`${URL}/admin/modulos`)
        .then(response => {
            setListaModulos(response.data.listaModulos)
        })
    },[URL])

    //console.log(today)

    const publicarTurnos = (formData, e) => {
        // ? Previene que se envíen los datos?
        e.preventDefault(); 
        try {
            axios.post(`${URL}/admin/agenda`, formData)
            .then(response => {
                if (response.data.turnosPublicados) {
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
            <h4>Abrir Agenda</h4>
            <form onSubmit={handleSubmit(publicarTurnos)}>
                <fieldset>
                    <legend>Crear Nuevos Turnos</legend>
                    <div className="formField">
                        <label htmlFor="idModulo"
                            className={errors.idModulo && "error"}
                        >Seleccione el Módulo para el cual abrir agenda:
                        {errors.idModulo && <span> * </span>}
                        </label>
                        <select id="idModulo" name="idModulo" 
                            {...register('idModulo', {
                                required: true
                            })}
                        >
                            <option value={null}></option>
                            {listaModulos.map((element) => {
                                return (
                                    <option key={element._id} value={element._id}>{element.alias}</option>
                                    )
                                })}
                        </select>
                    </div>
                    <div className="formField">
                        <label htmlFor="fechaApertura"
                            className={errors.fechaApertura && "error"}
                        >Desde Fecha: 
                        {errors.fechaApertura && <span> * </span>}
                        </label>
                        <input  
                            type="date" 
                            id="fechaApertura"
                            name="fechaApertura"
                            {...register('fechaApertura', {
                                required: true,
                                valueAsDate: true,
                                min: today
                            })}
                        />
                        {errors.fechaApertura && <p className="error">La fecha es oligatoria y no puede ser anterior al día de hoy</p>}
                    </div>
                    <div className="formField">
                        <label htmlFor="fechaCierre"
                            className={errors.fechaCierre && "error"}
                        >Hasta Fecha: 
                        {errors.fechaCierre && <span> * </span>}
                        </label>
                        <input  
                            type="date" 
                            id="fechaCierre"
                            name="fechaCierre"
                            {...register('fechaCierre', {
                                required: true,
                                valueAsDate: true,
                                min: getValues("fechaApertura")
                            })}
                        />
                        {errors.fechaCierre && <p className="error">La fecha es oligatoria y no puede ser anterior a la fecha de apertura</p>}
                    </div>
                    <p>Los turnos una vez publicados no podrán ser modificados
                    </p>
                </fieldset>
                <div className="botonera">
                    <Link to="/admin-panel/agenda">
                        <button type="reset" className="button cancel">Cancelar</button>
                    </Link>
                    <button type="submit" className="button">Publicar Turnos</button>
                </div>
            </form>
        </div>
    )
}

export default NuevosTurnos;