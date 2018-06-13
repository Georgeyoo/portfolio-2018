import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Aboutme extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <Cell col={12}>
                        <img
                            src={require("./ProfilePic.jpg")}
                            alt="george-profile-pic"
                            style={{height: '250px', borderRadius: '25px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum</p>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Aboutme;
