import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #1</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #2</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #3</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #1</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #2</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #3</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #1</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #2</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        <CardTitle style={{color: 'white', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #3</CardTitle>
                        <CardText> Lorem Ipsum </CardText>
                        <CardActions border>
                            <Button colored>Repository</Button>
                            <Button colored>Deployed</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name='share'/>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>Solo</Tab>
                    <Tab>Group</Tab>
                    <Tab>Open Source</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div> 
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects