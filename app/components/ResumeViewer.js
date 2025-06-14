"use client";

import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import SecondDocument from "./SecondDocument";
import ThirdDocument from "./ThirdDocument";
import { useEffect, useState, useRef } from "react";
import { BlobProvider } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: { padding: 30, fontSize: 12 },
  section: { marginBottom: 10 },
  heading: { fontSize:16, marginBottom: 5, marginTop: 5, fontWeight:'bold',backgroundColor:'#D3D3D3' },
  name:{fontSize: 23,marginBottom: 5, fontWeight: 'bold'},
  itemT:{marginBottom:5,flexBasis:'20%',display:'flex',flexDirection:'row', gap: 5},
  itemS:{marginBottom:5,flexBasis:'25%',display:'flex',flexDirection:'row', gap: 5},
  bullet:{marginBottom:5,display:'flex', flexDirection:'row', gap: 5}
});

function ResumeDocument({data}) {
    let tskillList = data.tskills.trim().split(/\s+/);
    let sskillList = data.sskills.trim().split(/\s+/);
    
  return (
    <Document>
      <Page style={styles.page}>
        <View style={{textAlign:"center"}}>
            <Text style={styles.name}>{data.name}</Text>
            <View style={{display:"flex", flexDirection:"row", gap:"30pt", justifyContent:"center"}}>
                <Text >{data.email}</Text>
                {data.phone!=="" && <Text>|</Text>}
                <Text style={{}}>{data.phone}</Text>
            </View>
        </View>

        {data.objective!=="" && 
            <View>
                <Text style={styles.heading}>Objective</Text>
                <Text >{data.objective}</Text>
            </View>}
        
        {(data.collegeOne!=="" || data.collegeTwo!=="" )&& 
            <View>
                <Text style={styles.heading}>Education</Text>
                <View style={{marginBottom: 5}}>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.collegeOne}</Text>
                    <Text >{data.courseOne}</Text>
                </View>
                <View>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.collegeTwo}</Text>
                    <Text >{data.courseTwo}</Text>
                </View>
            </View>}

        {(data.comOne!=="" || data.comTwo!=="" )&& 
            <View>
                <Text style={styles.heading}>Work Experience</Text>
                {data.accOne!=="" && <View style={{marginBottom: 5}}>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.comOne}</Text>
                    <View style={styles.bullet}>
                        <Text>•</Text>
                        <Text >{data.accOne}</Text>
                    </View>
                </View>}
                
                {data.accTwo!=="" && <View>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.comTwo}</Text>
                    <View style={styles.bullet}>
                        <Text>•</Text>
                        <Text>{data.accTwo}</Text>
                    </View>
                </View>}
            </View>}

        {(data.titleOne!=="" || data.titleTwo!=="" )&& 
            <View>
                <Text style={styles.heading}>Projects</Text>
                <View style={{marginBottom: 5}}>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.titleOne}</Text>
                    <Text >{data.descOne}</Text>
                </View>
                <View style={{marginBottom: 5}}>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.titleTwo}</Text>
                    <Text >{data.descTwo}</Text>
                </View>
                <View style={{marginBottom: 5}}>
                    <Text style={{fontSize:12, fontWeight: 'bold'}}>{data.titleThree}</Text>
                    <Text >{data.descThree}</Text>
                </View>
            </View>}

        {data.tskills!=="" && <View>
            <Text style={styles.heading}>Technical Skills</Text>
            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
                {tskillList.length>0 && tskillList.map((skill)=>{
                    return(
                        <View key={skill} style={styles.itemT}>
                            <Text>•</Text>
                            <Text>{skill}</Text>
                        </View>
                    )
                })}
            </View>
        </View>}
        
        {data.sskills!=="" && <View>
            <Text style={styles.heading}>Soft Skills</Text>
            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
                {sskillList.length>0 && sskillList.map((skill)=>{
                    return(
                        <View key={skill} style={styles.itemS}>
                            <Text>•</Text>
                            <Text>{skill}</Text>
                        </View>
                    )
                })}
            </View>
        </View>}
        
        {(data.achOne!=="" ||data.achTwo!=="" ||data.achThree!=="") && <View>
                <Text style={styles.heading}>Achievements</Text>
                {data.achOne!=="" && <View style={styles.bullet}>
                        <Text>•</Text>
                        <Text>{data.achOne}</Text>
                    </View>}
                
                {data.achTwo!=="" && <View style={styles.bullet}>
                        <Text>•</Text>
                        <Text>{data.achTwo}</Text>
                    </View>}

                {data.achThree!=="" && <View style={styles.bullet}>
                        <Text>•</Text>
                        <Text>{data.achThree}</Text>
                    </View>}
            </View>}
        
      </Page>
    </Document>
  );
}

export default function ResumeViewer({ data }) {
    // let [template, setTemplate] = useState("template-1")
    // setTemplate(localStorage.getItem("template"));
    let template = localStorage.getItem("template");
//     const count = useRef(0);
//   useEffect(() => {
//     count.current++;
//   }, [data]);

  let DocumentComponent =
    template === 'template-2'
      ? SecondDocument
      : template === 'template-3'
      ? ThirdDocument
      : ResumeDocument;
  return (
    <div className="h-full w-full flex">
      {/* <PDFViewer className="w-full h-full" style={{ width: "100%", height: "100%" }} key={count.current}>
        {template=='template-1' && <ResumeDocument data={data} />}
        {template=='template-2' && <SecondDocument data={data} />}
        {template=='template-3' && <ThirdDocument data={data} />}
      </PDFViewer> */}
      <BlobProvider className="h-full" document={<DocumentComponent data={data} />}>
        {({ url, loading }) =>
          loading ? (
            <div className="text-center w-full h-full flex items-center justify-center">Loading...</div>
          ) : (
            <div className="w-full h-screen flex items-center justify-center">
  <iframe
    src={url}
    className="w-[75%] md:w-full h-full border-none"
    title="Resume PDF Preview"
  />
</div>
          )
        }
      </BlobProvider>
    </div>
  );
}