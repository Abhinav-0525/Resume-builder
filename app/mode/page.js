'use client'

import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {Button} from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

function page() {
    let [temp, setTemp] = useState('')
    let router = useRouter()

    useEffect(()=>{
        setTemp(localStorage.getItem('template'))
    },[])

    
  return (
    <div className="flex justify-center items-center h-screen">
        <Card className="w-120">
            <CardContent className='grid grid-flow-col grid-cols-2fr-1fr-2fr'>
              <div>
                <h2 className="text-xl font-bold mb-4">Upload old resume:</h2>
                <Input id="old-resume" size='sm' type="file" />
              </div>
              <div className="h-full w-0.5 ms-4 me-4 bg-gray-400"></div>
              <div >
                <h2 className="text-xl font-bold mb-4">Enter data manually:</h2>
                <Button onClick={()=>router.push("resume-builder")}>
                    Go! <ArrowRight />
                </Button>
              </div>
             
            </CardContent>
            
          </Card>
        </div>
  )
}

export default page