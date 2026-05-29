import { useState } from 'react';
import Sidebar from '../components/Layout/Sidebar';
import Header from '../components/Layout/Header';

export default function Dashboard() {
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    return (
        <div className="flex h-screen bg-black overflow-hidden">
            <Sidebar onLogout={handleLogout} />
            <div className="flex-1 flex flex-col overflow-hidden ml-64">
                <Header />
                <main className="flex-1 overflow-auto bg-gradient-to-b from-black via-blue-950 to-black p-8">
                    <div className="space-y-8">

                        {/* TÍTULO */}
                        <div className="border-b border-cyan-500/20 pb-6">
                            <h1 className="text-4xl font-bold text-white">
                                Bienvenido al Dashboard
                            </h1>
                            <p className="text-gray-400 mt-2">
                                Aquí puedes ver tus datos y estadísticas.
                            </p>
                        </div> 

                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-gradient-to-br from-blue-900/40 to-black/60 border border-cyan-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                                <p className="text-gray-400 text-sm">Total Vehículos</p>
                                <h2 className="text-3xl font-bold text-cyan-400 mt-2">24</h2>
                                <span className="text-green-400 text-sm mt-2 inline-block">↑ 12% este mes</span>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/40 to-black/60 border border-cyan-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                                <p className="text-gray-400 text-sm">Ventas Totales</p>
                                <h2 className="text-3xl font-bold text-orange-500 mt-2">$12,450</h2>
                                <span className="text-green-400 text-sm mt-2 inline-block">↑ 8% este mes</span>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/40 to-black/60 border border-cyan-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                                <p className="text-gray-400 text-sm">Clientes</p>
                                <h2 className="text-3xl font-bold text-cyan-400 mt-2">45</h2>
                                <span className="text-green-400 text-sm mt-2 inline-block">↑ 5% este mes</span>
                            </div>

                            <div className="bg-gradient-to-br from-blue-900/40 to-black/60 border border-cyan-500/20 rounded-lg p-6 hover:border-orange-500/50 transition-all duration-300">
                                <p className="text-gray-400 text-sm">Disponibles</p>
                                <h2 className="text-3xl font-bold text-green-400 mt-2">18</h2>
                                <span className="text-green-400 text-sm mt-2 inline-block">75% disponibilidad</span>
                            </div>
                        </div>
                        
                                {/* CONTENIDO ADICIONAL */}
                        <div className="text-gray-300">
                             <p>Aquí irán gráficos, tablas y más información...</p>
                        </div>

                    </div>
                </main>

            </div>
        </div>
    );
}
