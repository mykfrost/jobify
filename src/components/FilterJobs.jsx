import { React } from "react";
// import Jobs from './Jobs';
export default function FilterJobs(props){
    const {searchText ,
         setSearchText ,
        showOnlyFeaturedJobs,
        setShowOnlyFeaturedJobs,
    showOnlyRemoteJobs,
setShowOnlyRemoteJobs   } = props;

function handleChange(event){
    setSearchText(event.target.value)
}
function handleShowFeaturedOnlyChange(event){
    setShowOnlyFeaturedJobs(event.target.checked);
}
function handleShowRemoteOnlyChange(event){
    setShowOnlyRemoteJobs(event.target.checked);
}
return(

<section className="section filter-jobs"> 
    <h1>Search Jobs</h1>
    <div className="fields has-addons">
        <div className="control is-expanded">
            <input  className="input" value={searchText} onChange={handleChange}/>
        </div>
    </div>
    <div className="field"> 
        <label htmlFor="Options">Options</label>
    </div>
    <div className="field is-grouped">
        <div className="control">
            <label htmlFor="featured" className="checkbox">
                <input
                id="featured"
                type="checkbox"
                checked={showOnlyFeaturedJobs}
                onChange={handleShowFeaturedOnlyChange}/> 
                Featured
            </label>

            <div className="control">
                <label className="checkbox" htmlFor="remote"> 
                    <input
                     id="remote"
                     type="checkbox"
                     checked={showOnlyRemoteJobs}
                     onChange={handleShowRemoteOnlyChange}
                     />
                     Remote
                </label>
            </div>
        </div>
    </div>
</section>
);
}

