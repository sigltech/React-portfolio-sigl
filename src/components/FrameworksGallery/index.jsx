import React from "react";

import CssLogo from '../../imgs/frameworks-logos/icons8-css3-50.png';
import HtmlLogo from '../../imgs/frameworks-logos/icons8-html-5-50.png';
import ReactLogo from '../../imgs/frameworks-logos/icons8-react-native-48.png';

import JavascriptLogo from '../../imgs/frameworks-logos/icons8-javascript-50.png';
import NodejsLogo from '../../imgs/frameworks-logos/icons8-node-js-50.png';
import GitLogo from '../../imgs/frameworks-logos/icons8-git-50.png';
import MongodbLogo from '../../imgs/frameworks-logos/icons8-mongodb-50.png';
import PostgresqlLogo from '../../imgs/frameworks-logos/icons8-postgresql-50.png';


export default function FrameworksGallery() {
    return (
        <>
        <div className="frameworks">
                        <img src={HtmlLogo} alt="html" />
                        <img src={CssLogo} alt="css3 icon"/>
                        <img src={JavascriptLogo} alt="javascript icon"/>
                        <img src={NodejsLogo} alt="nodejs icon"/>
                        <img src={GitLogo} alt="git icon"/>
                        <img src={MongodbLogo} alt="mongodb icon"/>
                        <img src={PostgresqlLogo} alt="postgresql icon"/>
                        <img src={ReactLogo} alt="React Icon" width="50px" height="50px"/>
                    </div>
        </>
    );
}
