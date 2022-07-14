import './Search.css';

export function Search ({onSearchChange}) {
    return(
        <>
            <input 
                type="text" 
                placeholder="Search" 
                onChange={({target})=>onSearchChange(target.value)}
            ></input> 
        </>
    );
}