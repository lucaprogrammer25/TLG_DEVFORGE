// Search.tsx
import React, { useEffect, useState } from 'react';
import algoliasearch, { SearchClient } from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
import Hit from './Hits';
import { AlgoliaHits } from '../../interfaces/type';

const Search: React.FC = () => {
  const [searchClient, setSearchClient] = useState<SearchClient | null>(null);
  const [showHits, setShowHits] = useState<boolean>(false);

  useEffect(() => {
    const client = algoliasearch("44R3Y9FKLI", "6c59b6db37660a28117943ae527cd46a");
    setSearchClient(client);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShowHits(event.target.value.trim() !== '');
  };



  return (
    <div className="searchBoxContainer">
      {searchClient && (
        <InstantSearch
          searchClient={searchClient}
          indexName="The modern boutique"
          insights={false}
        >
          <Configure hitsPerPage={5} />
          <SearchBox
            placeholder="Type here"
            searchAsYouType={true}
            onChange={handleInputChange}
          />
          {showHits && (
            <div className="hitsContainer">
              <Hits<AlgoliaHits> hitComponent={(props) => <Hit {...props} />} />
            </div>
          )}
        </InstantSearch>
      )}
    </div>
  );
};

export default Search;

