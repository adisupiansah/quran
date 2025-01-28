'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import SurahPage from '@/components/SurahPage';

const Page = () => {
  const { id } = useParams(); // Ambil nomor surat dari URL
  return (
    <div>
        <SurahPage id={id}/>
    </div>
  )
}

export default Page
