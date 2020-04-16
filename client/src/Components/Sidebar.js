import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link, withRouter, useHistory} from 'react-router-dom';
import items from '../assets/data/sidebarRoutes.json';
import return_button from '../assets/images/Icons/Back-button.svg';
import refresh_button from '../assets/images/Icons/Refresh.png';

function Sidebar() {
    let history = useHistory();
    return (
        <div className="sidebar">
            <div className="butoane_top_sidebar" style={{textAlign:"center",paddingTop:5, paddingBottom:5}}>
                <img src={return_button} style={{height:30, paddingRight:15}} alt="return" onClick={()=>history.goBack()}/>
                <img src={refresh_button} style={{height:30, paddingLeft:15}} alt="refresh"  onClick={()=>window.location.reload()}/>
            </div>
            <List disablePadding dense>
                {items.map(({label, name, items: subItems, ...rest}) => {
                    return (
                        <>
                        <React.Fragment key={name}>
                            <div className="element_lista">
                                <Link to={`/${name}`} style={{textDecoration: 'none',color: '#FFFFFF'}}>
                                    <ListItem style={{paddingLeft: 18}} button {...rest}>
                                        <ListItemText>{label}</ListItemText>
                                    </ListItem>
                                </Link>
                            </div>


                            {Array.isArray(subItems) ? (
                                <List disablePadding dense>
                                    {subItems.map((subItem) => {
                                        return (
                                            <Link to={`/${subItem.name}`}
                                                  style={{color: '#FFFFFF', textDecoration: 'none'}}>
                                                <ListItem
                                                    key={subItem.name}
                                                    style={{paddingLeft: 36}}
                                                    button
                                                    dense
                                                >

                                                    <ListItemText>
                         <span className="sidebar-subitem-text">
                            {subItem.label}
                          </span>
                                                    </ListItemText>
                                                </ListItem>
                                            </Link>
                                        )
                                    })}
                                </List>
                            ) : null}
                        </React.Fragment>

                        </>
                    )
                })}
            </List>
            <div className="titlu_app_sidebar">Piazeta</div>
        </div>
    )
}

export default withRouter(Sidebar)


