import React, { Component } from 'react';
import Axios from 'axios';
import LoadingBeer from '../img/LoadingBeer.png';

class Search extends Component {
    state = {
        loading: false
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.search.value);
        this.props.setResults([]);
        this.setState({
            loading: true
        })
        Axios.get('/api/search?q='+e.target.search.value)
            .then((response) => {
                this.props.setResults(response.data)
                this.setState({
                    loading: false
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <div className="loading">
                        <img className="LoadingImg" src={LoadingBeer} alt="BeerMe! logo"></img>
                    </div>
                    
                ) : (
                    <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Enter Location: 
                        <input name="search" type="text"/>
                    </label>
                    <button type="submit">Submit</button>
                    </form>
                )}
            </div>    
        )    
    }
}

export default Search;