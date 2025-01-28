'use client'
import Surah from '@/components/comp-mainpage/surah/Surah'
import Titile from '@/components/comp-mainpage/Titile'
import React, {useState, useEffect} from 'react'

const Page = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) {
    return (
      <div className="loading flex justify-center items-center vh-100">
        <div className="loader"></div>
      </div>
    )
  }

  return (
    <div>
      <Titile/>
      <Surah/>
    </div>
  )
}

export default Page
