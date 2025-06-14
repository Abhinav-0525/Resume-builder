'use client'

import Image from "next/image";
import Link from "next/link";
import ResumeUploader from "./components/ResumeUploader";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';

export default function Home() {
  let router = useRouter();
  // const handleClick = (template) => {
  //   sessionStorage.setItem('template', template);
  //   localStorage.setItem('template', template)
  //   router.push('/mode');
  // };
  return (
    <div style={{display:"flex", justifyContent:"center", flexDirection:"column"}}>
      <h1 className="pt-5 pb-2 text-center text-4xl font-bold first:mt-0">Resume Builder</h1>
      <p className="text-muted-foreground pb-5 text-md text-center">A user friendly tool for building resumes faster!</p>
      <div>
        <h4 className="text-center pb-2 text-lg font-semibold">Pick a template:</h4>
      </div>
      <div className="flex justify-center items-center mt-5 gap-10">
          <Card className="w-65 gap-0 p-2">
            <CardContent className="p-0 h-80">
              <Image src="/template-1.png" width={200} height={200} alt="img" className="w-full h-auto object-cover"></Image>
            </CardContent>
            <CardFooter className="grid justify-items-end mb-2">
              <Link href="/mode">
              <Button onClick={()=>localStorage.setItem('template', 'template-1')}>
                Try out!
              </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-65 gap-0 p-2">
            <CardContent className="p-0 h-80">
              <Image src="/template-2.png" width={200} height={200} alt="img" className="w-full h-auto object-cover"></Image>
            </CardContent>
            <CardFooter className="grid justify-items-end mb-2">
              <Link href="/mode">
              <Button onClick={()=>localStorage.setItem('template', 'template-2')}>
                Try out!
              </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-65 gap-0 p-2">
            <CardContent className="p-0 h-80">
              <Image src="/template-3.png" width={200} height={200} alt="img" className="w-full h-auto object-cover"></Image>
            </CardContent>
            <CardFooter className="grid justify-items-end mb-2">
              <Link href="/mode">
              <Button onClick={()=>localStorage.setItem('template', 'template-3')}>
                Try out!
              </Button>
              </Link>
            </CardFooter>
          </Card>
      </div>
      
    </div>
  );
}
