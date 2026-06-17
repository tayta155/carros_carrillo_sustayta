// frontend/src/services/authService.js

const API_BASE_URL = 'http://localhost:8080/api/auth';

// 📧 FUNCIÓN PARA REGISTRARSE

export const register = async (userData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: userData.nombre,
                email: userData.email,
                password: userData.password
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Error al registrarse');
        }

        const data = await response.json();
        return data; // Devuelve el usuario registrado
    } catch (error) {
        throw new Error(error.message || 'Error al registrarse');
    }
};  
