import { useState } from 'react';
import {Menu, X, Home, Car, Users, Settings, LogOut} from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);

    const menuItems = [
        {icon: Home, label: 'Dashboard', href: '#'},
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
                        <span className="text-white font-bold text-lg">AutoRent</span>
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

            <nav className="flex-1 p-4 epace-y-2">
                {menuItems.map((item, idx) => (
                    <a
                )}

            >

            </nav>
    </aside>
    );
}