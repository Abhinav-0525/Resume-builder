"use client"
import { useState } from 'react'
import ResumeForm from '../components/ResumeForm'
import ResumeViewer from '../components/ResumeViewer'
import dynamic from "next/dynamic";

function page() {

    const ResumeViewer = dynamic(() => import("../components/ResumeViewer"), {
    ssr: false,
    });

    let [data, setData] = useState({
        name:"",
        email:"",
        objective:"",
        phone:"",
        collegeOne:"",
        collegeTwo:"",
        courseOne:"",
        courseTwo:"",
        titleOne:"",
        descOne:"",
        titleTwo:"",
        descTwo:"",
        titleThree:"",
        descThree:"",
        achOne:"",
        achTwo:"",
        achThree:"",
        tskills:"",
        sskills:"",
        accOne:"",
        accTwo:"",
        comOne:"",
        comTwo:"",
    })
  return (
    <div className='grid h-screen grid-flow-col grid-cols-2'>
        <div className='overflow-y-auto'>
        <ResumeForm data={data} setData={setData}/>
        </div>
        <ResumeViewer data={data}/>
    </div>
  )
}

export default page