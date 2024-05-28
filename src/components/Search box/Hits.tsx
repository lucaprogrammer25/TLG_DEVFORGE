import React from 'react';
import { AlgoliaHit } from '../../interfaces/type';

interface HitProps {
  hit: AlgoliaHit;
  sendEvent: (eventType: string, hit: AlgoliaHit, eventName: string) => void;
}

const Hit: React.FC<HitProps> = ({ hit, sendEvent }) => {
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    sendEvent('click', hit, 'Product Clicked');
  };

  return (
    <div className="hitSearchBox" onClick={handleClick}>
      <h2>Name: {hit.name}</h2>
      <p>Price: {hit.price}</p>
    </div>
  );
};

export default Hit;


/* 
import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits, Configure } from  "react-instantsearch";
import Hit from "./Hits";
import { AlgoliaHit } from "../../interfaces/type";

const algoliaId = import.meta.env.VITE_REACT_ALGOLIA_ID;
const searchApi = import.meta.env.VITE_REACT_SEARCH_API_KEY;

const searchClient = algoliasearch(algoliaId, searchApi);

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearchStateChange = ({ query }: { query: string }) => {
    setQuery(query);
  };

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="The modern boutique"
      onSearchStateChange={handleSearchStateChange}
    >
      <Configure hitsPerPage={5} />
      <SearchBox />
      {query && <Hits hitComponent={Hit as React.ComponentType<{ hit: AlgoliaHit }>} />}
    </InstantSearch>
  );
};

export default Search; */
