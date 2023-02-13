import React from 'react';
import Job from './Job';
import jobs from './Jobs';

export default function JobsList(props){
  const {searchText , showOnlyFeaturedJobs , showOnlyRemoteJobs} = props ;
  let filteredJobs = jobs.filter(job =>{
    return job.title.toLowerCase().includes(searchText.toLowerCase());
  })
  if(showOnlyFeaturedJobs){
    filteredJobs = filteredJobs.filter(job=> job.isFeatured);
  }
  if (showOnlyRemoteJobs){
    filteredJobs = filteredJobs.filter(job => job.isRemote)
  }
  return(
    <div>
      <ol>
        {filteredJobs.map(job =>(
          <Job key={job.title} job={job} />
        ))
        }
      </ol>
    </div>
  );
}
 

