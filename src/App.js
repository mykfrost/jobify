import './App.css';
import { useState } from 'react';
import JobsList from './components/JobsList';
import FilterJobs from './components/FilterJobs';

function App() {
      const [searchText , setSearchText] = useState('');
      const [showOnlyFeaturedJobs , setShowOnlyFeaturedJobs] = useState(false);
      const [showOnlyRemoteJobs , setShowOnlyRemoteJobs] = useState(false);

  return (
    <div className="App">
       <FilterJobs 
       searchText={searchText} 
       setSearchText={setSearchText}
       showOnlyFeaturedJobs={showOnlyFeaturedJobs}
       setShowOnlyFeaturedJobs={setShowOnlyFeaturedJobs}
       showOnlyRemoteJobs={showOnlyRemoteJobs}
       setShowOnlyRemoteJobs={setShowOnlyRemoteJobs}  />
        <JobsList searchText={searchText}
         showOnlyFeaturedJobs={showOnlyFeaturedJobs}
         showOnlyRemoteJobs={showOnlyRemoteJobs}/>
  
    </div>
  );
}

export default App;
