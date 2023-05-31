import server from "./server";

export const getFlights = () => {
    const result = server.get("/flights").then((response) => {
        return response;
    });
    return result;
};

export default getFlights;
