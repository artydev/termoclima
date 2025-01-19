import SearchButton  from "./search-button.tsx"
 
export default function SearchInput() {
    return (
      <div style="display:flex; background:white;padding:0.5rem;border-radius:30px;height:3rem">
            <input placeholder="Cosa cerchi?"/>
            <SearchButton />
      </div>
    );
  }
   