import React, { Component }from 'react';

//Functional way of declaring a component

/*const SearchBar = ()=> {
 return <input />;
 };*/

//Class way of declaring a component

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''};
    }
    render () {
        /*return (<input onChange={this.onInputChange} />);*/
        return (
            <div>
            <input
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />

                {/*Value of input text: {this.state.term}*/}
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    /* onInputChange (event) {
     console.log(event);
     }*/
}
export default SearchBar;