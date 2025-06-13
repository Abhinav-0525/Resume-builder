"use client"

import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function ResumeForm({data, setData}) {

    const handleChange=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
        console.log([e.target.name]);
        console.log(e.target.value);
    }
  return (
    <div className="box-content p-7 ">
        <Card className="mb-7">
            <h2 className="text-xl  ps-5 font-bold">Personal Details</h2>
            <CardContent>
                <Label htmlFor="name" className=" text-md mb-1">Name</Label>
                <Input name="name" type="text" value={data.name} className="mb-2" onChange={handleChange}/>
                <Label htmlFor="email" className="text-md mb-1">Email</Label>
                <Input name="email" type="email" value={data.email} className="mb-2" onChange={handleChange}/>
                <Label htmlFor="phone" className="text-md mb-1">Phone Number</Label>
                <Input name="phone" type="tele" value={data.phone} className="mb-2" onChange={handleChange}/>
                <Label htmlFor="objective" className="text-md mb-1">Objective</Label>
                <Textarea name="objective" value={data.objective} onChange={handleChange} rows={5}/>
            </CardContent>
        </Card>
        <Card className="mb-7">
            <h2 className="text-xl font-bold ps-5">Educational Details</h2>
            <CardContent>
                <Label htmlFor="collegeOne" className=" text-md mb-1">Institute Name</Label>
                <Input name="collegeOne" type="text" value={data.collegeOne} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="courseOne" className=" text-md mb-1">Course</Label>
                <Input name="courseOne" type="text" value={data.courseOne} className="mb-2"  onChange={handleChange}/>
                <Separator className="mt-3 border-2 border-gray-800 rounded mb-2"/>
                <Label htmlFor="collegeTwo" className=" text-md mb-1">Institute Name</Label>
                <Input name="collegeTwo" type="text" value={data.collegeTwo} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="courseTwo" className=" text-md mb-1">Course</Label>
                <Input name="courseTwo" type="text" value={data.courseTwo} className="mb-2" onChange={handleChange}/>
            </CardContent>
        </Card>
        <Card className="mb-7">
            <h2 className="text-xl font-bold ps-5">Projects</h2>
            <CardContent>
                <Label htmlFor="titleOne" className="text-md mb-1">Title</Label>
                <Input name="titleOne" type="text" value={data.titleOne} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="descOne" className=" text-md mb-1">Description</Label>
                <Textarea name="descOne" value={data.descOne} onChange={handleChange} rows={5}/>
                <Separator className="mt-3 border-2 border-gray-600 rounded mb-2"/>
                <Label htmlFor="titleTwo" className="text-md mb-1">Title</Label>
                <Input name="titleTwo" type="text" value={data.titleTwo} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="descTwo" className=" text-md mb-1">Description</Label>
                <Textarea name="descTwo" value={data.descTwo} onChange={handleChange} rows={5}/>
                <Separator className="mt-3 border-2 border-gray-600 rounded mb-2"/>
                <Label htmlFor="titleThree" className="text-md mb-1">Title</Label>
                <Input name="titleThree" type="text" value={data.titleThree} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="descThree" className=" text-md mb-1">Description</Label>
                <Textarea name="descThree" value={data.descThree} onChange={handleChange} rows={5}/>
            </CardContent>
        </Card>
        <Card className="mb-7">
            <h2 className="text-xl font-bold ps-5">Skills</h2>
            <CardContent>
                <Label htmlFor="tskills" className="text-md mb-1">Technical Skills</Label>
                <Input name="tskills" type="text" value={data.tskills} placeholder="Enter your skills separated by space" className="mb-2"  onChange={handleChange}/>
                
                <Label htmlFor="sskills" className="text-md mb-1">Soft Skills</Label>
                <Input name="sskills" type="text" value={data.sskills} placeholder="Enter your skills separated by space" className="mb-2"  onChange={handleChange}/>
            </CardContent>
            
        </Card>
        <Card className="mb-7">
            <h2 className="text-xl font-bold ps-5">Work Experience</h2>
            <CardContent>
                <Label htmlFor="comOne" className="text-md mb-1">Company</Label>
                <Input name="comOne" type="text" value={data.comOne} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="accOne" className=" text-md mb-1">Work/Accomplishment</Label>
                <Textarea name="accOne" value={data.accOne} onChange={handleChange} rows={5}/>
                <Separator className="mt-3 border-2 border-gray-600 rounded mb-2"/>
                <Label htmlFor="comTwo" className="text-md mb-1">Company</Label>
                <Input name="comTwo" type="text" value={data.comTwo} className="mb-2"  onChange={handleChange}/>
                <Label htmlFor="accTwo" className=" text-md mb-1">Work/Accomplishment</Label>
                <Textarea name="accTwo" value={data.accTwo} onChange={handleChange} rows={5}/>
            </CardContent>
        </Card>
        <Card className="">
            <h2 className="text-xl font-bold ps-5">Achievements</h2>
            <CardContent>
                <Textarea name="achOne" value={data.achOne} className="mb-3" placeholder="First Achievement" onChange={handleChange} />
                <Textarea name="achTwo" value={data.achTwo} className="mb-3" placeholder="Second Achievement" onChange={handleChange} />
                <Textarea name="achThree" value={data.achThree} className="" placeholder="Third Achievement" onChange={handleChange} />
            </CardContent>
        </Card>
    </div>
  )
}

export default ResumeForm