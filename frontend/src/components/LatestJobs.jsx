import React from 'react';
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';



//const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
  const {allJobs}=useSelector(store=>store.job);
  
  
  return (
    <div className='max-w-7xl mx-auto my-20 text-center'>
      <h1 className='text-4xl font-bold'>
        <span className='text-[#6A38C2]'>Latest and Top </span>Job Openings
      </h1>
      {/* Grid container with width limitation and centering */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5 w-full max-w-4xl mx-auto place-items-center'>
        {
          allJobs.length<=0?<span>NO JOB AVAILABLE</span>:allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job} />)
        }
      </div>
    </div>
  );
};

export default LatestJobs;

