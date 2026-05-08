function Login() {
    return (

        // Fondo gris claro — ocupa toda la pantalla
        <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
             {/* Card centrada — máximo 400px de ancho */}
            <div className="w-full max-w-sm bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:blur-md before:-z-10">

                <div className="mb-8">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl mb-6" />
                    <h1 className="text-2x1 font-semibold text-gray-900"> Bienvenido!!! </h1>
                    <p className="text-sm text-gray-500 mt-1"> Inicia sesión en tu cuenta andale mi perro jjjjdd </p>
                </div>

            {/* Formulario vacío por ahora */}
            <div className="space-y-4">
                {/* Aquí van los inputs — Paso 2 */}
                <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-11 bg-gray-100 rounded-lg animate-pulse" />
                <div className="h-11 bg-blue-600 rounded-lg animate-pulse" />
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
                No tienes cuenta?{' '}
                <a href="#" className="text-blue-600 font-medium hover:underline" >
                    Registrate
                </a>
            </p>
            </div>
        </div>
    )
}

export default Login;