import React, { Component } from 'react'

class Form extends Component {
    state = {
        query: '',
    }
    handleInputChange = () => {
        this.setState({
            query: this.searchvalue
        })
    }
    render() {
        return (
            <form>
                <input
                    placeholder="Search"
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                    />
                    <p>{this.state.query}</p>
            </form>
        )
    }
}

export default Form;