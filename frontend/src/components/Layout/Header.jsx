import {Search, Bell, User} from 'lucide-react'

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-black border-b border-cyan-500/20 shadow-lg shadow-blue-900/50 sticky top-0 z-40">

            {/* BÚSQUEDA */}
            <div className="flex-1 max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                        <input
                        type="text"
                        placeholder="Buscar vehículos..."
                        className="w-full bg-black/40 border border-cyan-500/20 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50"
                        />
                    </div>
            </div>

           {/* NOTIFICACIONES */} 
           <div className="flex items-center gap-4">
                <button className= "relative text-gray-400 hover:text-cyan-400">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
                </button>
           </div>

        </header>
);

}