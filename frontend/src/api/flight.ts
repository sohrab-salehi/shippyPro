import server from "./server";

import iFlight from "../types/iFlight";

export const getFlights = () => {
    const result = server.get("/flights").then((response) => {
        return response;
    });
    return result;
};

export const createFlight = (newFlight: iFlight) => {
    const result = server.post("/flights", newFlight).then((response) => {
        return response;
    });
    return result;
};

export const findBestFlight = (
    depAirportCode: string,
    arrAirportCode: string
) => {
    const result = server
        .get(`/flights/most-convenient/${depAirportCode}/${arrAirportCode}`)
        .then((response) => {
            return response;
        });
    return result;
};

export default getFlights;
