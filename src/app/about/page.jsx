'use client';
import About from '@/components/About'
import React, {useState, useEffect} from 'react'

const Page = () => {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, []);
  
    if (loading) {
      return (
        <div className="loading flex justify-center items-center vh-100">
          <div className="loader"></div>
        </div>
      );
    }

  return (
    <div>
      <About/>
    </div>
  )
}

export default Page
