import { useState } from 'react';
import {Menu, X, Home, Car, Users, Settings, LogOut} from 'lucide-react';

export default function Sidebar({onLogout}) {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        {icon: Home, label: 'Dashboard', href: '# transition '},
        {icon: Car, label: 'Vehículos', href: '#'},
        {icon: Users, label: 'Clientes', href: '#'},
        {icon: Settings, label: 'Reportes', href: '#'},
        {icon: LogOut, label: 'Configuración', href: '#'},
    ];

    return (
        <aside className= {
            `${isOpen ? 'w-64' : 'w-20'} 
            h-screen bg-gradient-to-b-from
            from-blue-950 via-blue-950 via-blue-900 to-black
            transition-all duration-300 fixed left-0 top-0 z-50
            border-r border-cyan-500/20 shadow-xl shadow-blue-900/50
            `}>

            {/* Header del Sidebar */}

            <div className="p-4 border-b border-cyan-500/20 flex items-center justify-between">
                { isOpen && (
                    <div className="flex items-center gap-2">
                        <Car className="h-6 w-6 text-orange-500 "/>
                        <span className="text-white font-bold text-lg"> [Logo]Sustayta racing</span>
                    </div>
                )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-400 hover:text-orange-500 transition-colors"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Menú */}

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        className={`
                            group flex items-center gap-3 px-4 py-3 rounded-lg
                            transition-all duration-300
                            hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-purple-500/20
                            text-gray-300 hover:text-cyan-400
                            relative overflow-hidden
                        `}
                    >
                       {/* Glow effect al hover */}
                       <div className= "absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                        <item.icon size={20} className="relative z-10 text-cyan-400" />
                        {isOpen && <span className="relative z-10 text-sm font-medium">{item.label}</span>}
                </a>    
                ))}
            </nav>

            {/* Logout Button */}
            <div className= "p-4 border-t border-cyan-500/20" >
                <button
                    onClick={onLogout}
                    className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        bg-gradient-to-r from-red-900/40 to-red-950/40
                        hover:from-red-500/30 hover:to-red-600/30
                        text-red-400 hover:text-red-300
                        transition-all duration-300
                        border border-red-500/20 hover:border-red-500/50
                        font-medium text-sm
                    `}
                >
                    <LogOut size={20}/>
                    {isOpen && <span>Salir</span>}
                </button>
            </div>
    </aside>
    );
}