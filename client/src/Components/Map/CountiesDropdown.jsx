import React, {Component} from 'react';

import judete from 'assets/data/county.json'

export default class Dropdown extends Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
            judete: [],
            
        };
    };

    showDropdownMenu=(event)=> {
        event.preventDefault();
        this.setState({displayMenu: true}, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu=()=> {
        this.setState({displayMenu: false}, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown_container">
                <div className="button" onClick={this.showDropdownMenu}>{"  "} Alege judetul:{"  "}</div>

                { this.state.displayMenu ? (
                    <div>
                        {judete.map((item, key) => {
                            return (
                                <div className="element_dropdown" key={item.id}>{item.name}</div>

                            );
                        })}
                    </div>

                ) :
                    ""
                }

            </div>

        );
    }
}