import React, { useEffect, useState } from 'react';  // Import useState
import Navbar from '../shared/Navbar';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { useSelector } from 'react-redux';


const CompanySetup = () => {
  const [input, setInput] = useState({  // Corrected useState
    name: '',
    description: '',
    website: '',
    location: '',
    file: null,
  });

  const {singleCompany} = useSelector(store=>store.company);
  const [loading, setLoading] = useState(false);
  const params=useParams();
  const navigate= useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler=(e) =>{
    const file=e.target.files?.[0];
    setInput({...input, file});    
  }
  const submitHandler = async (e) =>{
    e.preventDefault();
   const formData = new FormData();
   formData.append("name", input.name);
   formData.append("description", input.description);
   formData.append("website", input.website);
   formData.append("location", input.location);

   if(input.file){
    formData.append("file", input.file);
   }
   try {
    setLoading(true);
    const res = await axios.put(`${COMPANY_API_END_POINT}/update/${params.id}`,formData,{
      headers:{
        'Content-Type':'multipart/form-data'
      },
      withCredentials:true,
    });
    if(res.data.success){
      toast.success(res.data.message);
      navigate('/admin/companies');
    }
   } catch (error) {
    console.log(error);
    toast.error(error.res.data.message);
   }
   finally{
    setLoading(false);
   }
  }

  useEffect(()=>{
    setInput({
      name: singleCompany.name || '',
      description: singleCompany.description || '',
      website:singleCompany.website || '',
      location:singleCompany.location || '',
      file:singleCompany.file || null
    })
  },[singleCompany])
  return (
    <div className='pt-16'>
      <Navbar />
      <div className='max-w-xl mx-auto my-10'>
        <form action='' onSubmit={submitHandler}>
          <div className='flex items-center gap-5 p-8'>
            <Button  onClick={()=>navigate("/admin/companies")}variant='outline' className='flex items-center gap-2 text-gry-500 font-semibold'>
              <ArrowLeft/>
              <span>Back</span>
            </Button>
            <h1 className='font-bold text-xl'>Company Setup</h1>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
            <Label>Company Name</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
            />
            </div>
            <div>
            <Label>Description</Label>
            <Input
              type="text"
              name="description"
              value={input.description}
              onChange={changeEventHandler}
            />
            </div>
            <div>
            <Label>Website</Label>
            <Input
              type="text"
              name="website"
              value={input.website}
              onChange={changeEventHandler}
            />
            </div>
            <div>
            <Label>Location</Label>
            <Input
              type="text"
              name="location"
              value={input.location}
              onChange={changeEventHandler}
            />
            </div>
            <div>
            <Label>Logo</Label>
            <Input
              type="file"
              accept="image/*"
              onChange={changeFileHandler}
            />
            </div>
         
          </div>
          <Button type="submit" className="w-full mt-8">Update</Button>
        </form>
      </div>
    </div>
  );
};

export default CompanySetup;
