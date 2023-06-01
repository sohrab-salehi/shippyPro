import React from "react";
import { Tag } from "antd";

import iAirport from "../../types/iAirport";

interface WrapperProps {
    code: string;
    airports: iAirport[];
}

function AirportDetail({ code, airports }: WrapperProps) {
    const selectedAirport = airports.find((airport) => airport.code === code);
    const element = code ? (
        <>
            <div>{selectedAirport?.name}</div>
            <div style={{ color: "GrayText", fontSize: 12 }}>{code}</div>
        </>
    ) : (
        <Tag color="orange">Direct - without stop</Tag>
    );
    return element;
}

export default AirportDetail;
