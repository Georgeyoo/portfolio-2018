import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landingpage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://render.bitstrips.com/v2/cpanel/fb695398-7ef1-4461-987b-73d3a97805fd-60964186-385e-4487-8a24-1e98094b5731-v1.png?transparent=1&palette=1" 
                        alt="bitmoji-george"
                        className="avatar-img"/>

                        <div className="banner-text">
                            <h1>I'm George!</h1>
                            <h3>Full Stack Web Developer</h3>
                            <hr />

                            <p>
                                Node.js | React | Express | JavaScript | jQuery | HTML | CSS
                            </p>

                            <div className="social-links">

                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/george-yoo/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="https://github.com/Georgeyoo" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landingpage