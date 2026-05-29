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

    );
}