"use client";

import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

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
  return (
    <div className="h-full">
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        <ResumeDocument data={data} />
      </PDFViewer>
    </div>
  );
}