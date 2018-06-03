import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <img 
                            src="https://render.bitstrips.com/v2/cpanel/b0fefbc3-8522-40f4-804c-fcc99d871a23-60964186-385e-4487-8a24-1e98094b5731-v1.png?transparent=1&palette=1"
                            alt="bitmoji-george-phone"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Lorem Ipsum</p>
                    </Cell>
                    <Cell col={6}>
                        <h2> Contact Me </h2>

                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-phone-square' aria-hidden='true' />
                                        415.341.5647
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                        <i className='fa fa-envelope-square' aria-hidden='true' />
                                        gcyoo@ucla.edu
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Contact