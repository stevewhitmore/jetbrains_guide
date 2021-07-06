import React from 'react';
import RedirectLayout from "gatsby-theme-bulmaio/src/components/layout/RedirectLayout";

const IndexPage: React.FC = () => {

    return (
        <RedirectLayout to={`https://www.jetbrains.com/help/space/tips-projects.html#private-projects`} />
    );
};

export default IndexPage;
