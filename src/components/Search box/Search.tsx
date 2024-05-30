import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch';
import Hit from './Hits';
import { AlgoliaHits } from '../../interfaces/type';

const algoliaId = import.meta.env.VITE_REACT_ALGOLIA_ID as string;
const searchApi = import.meta.env.VITE_REACT_SEARCH_API_KEY as string;

const searchClient = algoliasearch(algoliaId, searchApi);

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('');

  const handleStateChange = ({ uiState }: { uiState: { [key: string]: { query: string } } }) => {
    setQuery(uiState['The modern boutique']?.query || '');
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  return (
    <div className="searchBoxContainer">
      <InstantSearch
        searchClient={searchClient}
        indexName="The modern boutique"
        insights={true}
        onStateChange={handleStateChange}
      >
        <Configure hitsPerPage={5} />
        <SearchBox 
          placeholder='Type here' 
          searchAsYouType={true} 
          onChange={handleSearchChange}
        />
        {query && (
          <div className="hitsContainer">
            <Hits<AlgoliaHits> hitComponent={Hit} />
          </div>
        )}
      </InstantSearch>
    </div>
  );
};

export default Search;
