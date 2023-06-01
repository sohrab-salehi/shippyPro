import iAirport from "../types/iAirport";
import server from "./server";

export const getAirports = () => {
    const result = server.get("/airports").then((response) => {
        return response;
    });
    return result;
};

export const createAirport = (newAirport: iAirport) => {
    const result = server.post("/airports", newAirport).then((response) => {
        return response;
    });
    return result;
};

export default getAirports;
