import algoliasearch from "algoliasearch";
import { Hits, InstantSearch,SearchBox ,Configure} from "react-instantsearch";
import Hit from "./Hits";


const algoliaId = import.meta.env.VITE_REACT_ALGOLIA_ID;
const searchApi = import.meta.env.VITE_REACT_SEARCH_API_KEY;

const searchClient = algoliasearch(algoliaId, searchApi);

const Search = () => {
  
  
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="The modern boutique"
      insights={true}
    >
      <Configure hitsPerPage={1} />
      <SearchBox />
       <Hits hitComponent={Hit} />
    </InstantSearch>
  );
}


export default Search;