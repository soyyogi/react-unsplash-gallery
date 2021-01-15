import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID GaisIEgGuPKfttIUTXz2L9uo9D8_EBXfOcYAHjw0U8w'
            }
        });
        console.log(response.data.results)
    }
    
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;