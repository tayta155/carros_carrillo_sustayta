import { UserIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { Input } from "@material-tailwind/react";


function Login() {
    return (

        // Fondo gris claro — ocupa toda la pantalla
        <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center p-4"> 
             {/* Card centrada — máximo 400px de ancho */}
            <div className="w-full max-w-sm bg-white rounded-2xl p-8 border border border-cyan-950 shadow-[0_0_20px_rgba(125,211,252,0.7),0_0_80px_rgba(56,189,248,0.35)]">

                <div className="h-18 mb-8 flex flex-col items-center justify-center">
                    <h1 className="text-center font-semibold text-gray-900"> Bienvenido!!! </h1>
                    <p className="text-sm text-center text-gray-500 mt-1"> Inicia sesión en tu cuenta </p>
                </div>

            {/* Formulario vacío por ahora */}
            <div className="space-y-4">
                {/* Aquí van los inputs — Paso 2 */}
                 
                    <div className="flex items-center gap-1">
                    <UserIcon className="h-5 w-5 text-cyan-600" />
                    <p className="text-sm text-gray-500">Nombre de usuario</p>
                    </div>

                    <div className="h-11 bg-gray-100 rounded-lg animate-pulse"></div>

                <div className="flex items-center gap-1">
                    <LockClosedIcon className="h-5 w-5 text-cyan-600" />
                    <p className="text-sm text-gray-500">Contraseña</p>
                </div>
                <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
                

                <div>
                    <div className="h-11 bg-blue-600 rounded-lg animate-pulse" >
                        <button className="w-full h-full text-white font-medium" disabled>
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>

            {/* Espacio entre el formulario y el footer */}
            
            <p className="mt-4 text-sm text-gray-500">contraseña olvidada?
                    <a href="#" className="text-blue-600 font-medium hover:underline" > Recuperar contraseña </a>
            </p>
                 

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
                No tienes cuenta?{' '}
                <a href="#" className="text-blue-600 font-medium hover:underline" >
                    Registrate
                </a>
            </p>

            <div className=" flex items-center justify-center mt-6">
                <p className="text-b text-gray-500">confirma por correo</p>
                
            </div>

            <div className="flex items-center justify-center mt-4">

                {/* link facebook */}
                <a href="#!" role="button" className="mx-2">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                         style={{ color: "#1877f2" }}
                        viewBox="0 0 24 24"
                    >  
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                </a>

                {/* link de apple */}
                <a href="#!" role="button" className="mx-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path d="M19.665 16.913c-.297.687-.652 1.318-1.067 1.89-.566.79-1.03 1.337-1.39 1.64-.557.497-1.154.75-1.79.76-.456 0-1.007-.13-1.65-.39-.645-.26-1.237-.39-1.778-.39-.566 0-1.173.13-1.822.39-.65.26-1.174.398-1.57.417-.61.025-1.22-.24-1.83-.79-.39-.34-.875-.908-1.455-1.706-.623-.85-1.136-1.835-1.54-2.955-.433-1.21-.65-2.382-.65-3.515 0-1.297.28-2.417.84-3.36.44-.757 1.026-1.355 1.758-1.794.732-.44 1.523-.665 2.373-.678.466 0 1.078.145 1.835.435.756.29 1.242.435 1.457.435.16 0 .702-.17 1.625-.51.873-.315 1.61-.445 2.21-.39 1.626.13 2.85.773 3.67 1.93-1.455.882-2.175 2.117-2.16 3.703.013 1.236.462 2.265 1.348 3.084.4.38.847.674 1.343.885-.108.312-.222.613-.343.904zM15.54 2.25c0 .97-.355 1.874-1.065 2.71-.857.995-1.895 1.57-3.02 1.48a3.095 3.095 0 0 1-.023-.367c0-.93.404-1.926 1.123-2.74.36-.414.817-.758 1.37-1.03.55-.268 1.07-.417 1.56-.45.037.132.055.265.055.397z"/>
                        </svg>
                </a>

                {/* cuenta de google */}
                <a href="#!" role="button" className="mx-2">

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                        viewBox="0 0 48 48"
                        >
                        <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
                            />
                        <path
                            fill="#FF3D00"
                            d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
                            />
                            <path
                            fill="#4CAF50"
                            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
                            />
                        <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.4-6.5 6.8l6.2 5.2C38.7 36.5 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
                            />
                    </svg>     
                </a>
                
                {/* link de microsoft */}
                <a href="#!" role="button" className="mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            viewBox="0 0 24 24"
                        >
                            <path fill="#f25022" d="M1 1h10v10H1z"/>
                            <path fill="#00a4ef" d="M13 1h10v10H13z"/>
                            <path fill="#7fba00" d="M1 13h10v10H1z"/>
                            <path fill="#ffb900" d="M13 13h10v10H13z"/>
                        </svg>
                </a>
    
            </div>

            </div>
        </div>
    )
}

export default Login;