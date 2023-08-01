/* import { useEffect } from 'react'; */
import bcrypt from 'bcryptjs';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './styles/styles.css';


const Login = () => {

    const URL = import.meta.env.VITE_URL_BACK;
    //console.log(URL);

    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: {
        usuario: '',
        password: ''
    }});

    /* const isLoginSuccesfull = (formInput, credentials) => {
        return formInput.usuario === credentials.usuario 
            &&
            bcrypt.compareSync(formInput.password, credentials.password);
    }; */

    const logIn = (loginData, e) => {
        
        e.preventDefault();
        
        let hashedInput = bcrypt.hashSync(loginData.password, 8);
        loginData.password = hashedInput;

        console.log(loginData);
        try {
        axios.post(`${URL}/admin`, loginData)
        .then(response => {
            console.log(response.data);
            if (response.data.loginStatus) {
                //console.log(response.data.token);
                navigate("/admin-panel")
            } else {
                //! Mensaje de Error
                console.log("Credenciales Inválidas");
            }
        })
        } catch (error) {
            console.log(error);
        }
    
    }

    return (
        <div className="formContainer">
            <h2>Acceso al Panel de Administración</h2>
            <form onSubmit={handleSubmit(logIn)}>
                <fieldset>
                    <legend>Log In</legend>
                    <div className="formField">
                        <label htmlFor="usuario"
                            className={errors.usuario && "error"}
                        >Usuario:</label>
                        <input  
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario: admin"
                            {...register('usuario', {
                                required: true
                            })}
                        />
                    </div>
                    <div className="formField">
                        <label htmlFor="password"
                            className={errors.password && "error"}
                        >Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña de acceso: admin"
                            {...register('password', {
                                required: true,
                            })}
                        />
                    </div>
                </fieldset>
                <div className="botonera">
                    <button type="submit" className="button login">LOG IN</button>
                </div>
            </form>
        </div>
    )
}

export default Login;