import { UserIcon } from "@heroicons/react/24/outline";
import { LockClosedIcon } from "@heroicons/react/24/outline";



function Login() {
    return (

        // Fondo gris claro — ocupa toda la pantalla
        <div className="min-h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex items-center justify-center p-4"> 
             {/* Card centrada — máximo 400px de ancho */}
            <div className="w-full max-w-sm bg-white rounded-2xl p-8 border border border-cyan-950 shadow-[0_0_20px_rgba(125,211,252,0.7),0_0_80px_rgba(56,189,248,0.35)]">

                <div className="h-24 mb-8 flex flex-col items-center justify-center">
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


            </div>
        </div>
    )
}

export default Login;