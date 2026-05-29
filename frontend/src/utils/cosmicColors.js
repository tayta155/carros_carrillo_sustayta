/**
 * 🌌 PALETA DE COLORES CÓSMICOS - INTERESTELAR
 * Inspirado en la película Interestelar (Gargantúa)
 */

export const cosmicColors = {

    darkblue: {
        900: '#0a1428',    // Negro azulado - Fondo sidebar
        800: '#0d1b3a',    // Azul muy oscuro
        700: '#1a2d4d',    // Azul oscuro
        600: '#2a3f66',    // Azul medio-oscuro
    },

    // 🟠 NARANJA ENERGÍA - Calor del agujero negro
    orange: {
        600: '#ff6b35',    // Naranja vibrante - Principal
        500: '#ff8c42',    // Naranja claro
        400: '#ffaa5a',    // Naranja pálido
    },

    // 🟣 PÚRPURA CÓSMICO - Transición gravitacional
    purple: {
        700: '#6a0572',
        600: '#7e0a7e',
        500: '#9d2eff',
    },

    // 🔵 CYAN/AZUL LUMINOSO - Datos y brillo
    cyan: {
        500: '#00d4ff',
        400: '#00e6ff',
        300: '#1ff9ff'
    },

    // ⚫ NEGROS - Vacío del espacio
    black: {
        950: '#000000',
        900: '#0a0a0a',
    },

    white: {
         50: '#f8f9fa',     // Gris muy claro
        100: '#f0f4f8',    // Gris claro
        900: '#ffffff',
    },

    green: {
        500: '#10b981',    // Verde vibrante
        400: '#34d399',
    },

    red: {
        500: '#ef4444',
        400: '#f87171',
    },
};

/**
 * 🎨 GRADIENTES CÓSMICOS PREDEFINIDOS
 */

export const cosmicGradients = {
    // Fondo sidebar
   sidebarBg: 'from-blue-950 via-blue-900 to-black',

   // Efecto glow naranja-púrpura
   orangePurpleGlow: 'from-orange-500/20 via-purple-500/20 to-black',

   // efecto glow
   cyanGlow: 'from-cyan-500/10 via-cyan-500/5 to-transparent',

   // fondo card
   cardBg: 'from-blue-900/40 to-black/60',

   // Hover effect
   hoverGlow: 'from-orange-500/30 via-purple-500/30 to-transparent'
};

export const cosmicEffects = {

    shadowBlue: 'shadow-lg shadow-blue-900/50',

    shadowOrangePurple: 'shadow-lg shadow-purple-900/50',

    gloworange: 'drop-shadow-lg drop-shadow-orange-500/50',

    glowCyan: 'drop-shadow-lg drop-shadow-cyan-500/50',

    borderGlow: 'border border-cyan-500/30',
};

export const cosmicAnimations = {
    fadeIn: 'animate-in fade-in duration-700',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-500',
    slideDown: 'animate-in slide-in-from-top-4 duration-500',
    pulse: 'animate-pulse',
    glow: 'animate-glow',
}

export default cosmicColors;