import React from 'react';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStype = {
        fontSize: '20px'
    }; 

    return  <input placeholder={searchText} style={searchStype}  />;
}

export default SearchPanel;