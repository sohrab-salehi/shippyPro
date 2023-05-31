import server from "./server";

export const getAirports = () => {
    const result = server.get("/airports").then((response) => {
        return response;
    });
    return result;
};

export default getAirports;
