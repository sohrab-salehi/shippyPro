import React from "react";
import { useRouteError } from "react-router-dom";
import { Typography } from "antd";

import iError from "../../types/iError";
import "./error-page.scss";

const { Title } = Typography;

function ErrorPage(): JSX.Element {
    const error = useRouteError() as iError;

    return (
        <div id="error-page">
            <div>
                <Title>Oops!</Title>
                <p>Sorry, error {error.status} has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
}

export default ErrorPage;
