export const getVehicles = async () => {
    return axios.getVehicles(`${API_REST_URL}/vehiculos`);
}

export const createVehicle = async (vehicleData) => {
    return axios.post(`${API_REST_URL}/vehiculos`, vehicleData);
}