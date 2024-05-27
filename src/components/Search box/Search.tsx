import algoliasearch from "algoliasearch";
import { Hits, InstantSearch,SearchBox ,Configure} from "react-instantsearch";
import Hit from "./Hits";
import { useState } from "react";
import { AlgoliaHit } from "../../interfaces/type";

const algoliaId = import.meta.env.VITE_REACT_ALGOLIA_ID;
const searchApi = import.meta.env.VITE_REACT_SEARCH_API_KEY;

const searchClient = algoliasearch(algoliaId, searchApi);

const Search = () => {
  const [query, setQuery] = useState("");

  const onStateChange: InstantSearchProps['onStateChange'] = ({
    uiState,
    setUiState,
  }) => {
    
    setUiState(uiState);
  };
  
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="The modern boutique"
      insights={true}
      onStateChange={onStateChange}
    >
      <Configure hitsPerPage={5} />
      <SearchBox />
      {query && <Hits hitComponent={Hit} />}
    </InstantSearch>
  );
}


export default Search;