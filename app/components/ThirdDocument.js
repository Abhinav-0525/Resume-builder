import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {padding: 25,fontSize: 12,fontFamily: "Helvetica"},
  section: {marginBottom: 12},
  heading: {backgroundColor: "#0f4c81",color: "white",padding: 4,fontWeight: "bold",fontSize: 13, marginBottom: 6},
  name:{fontSize: 22,fontWeight: "bold", marginBottom: 4, color: "#0f4c81"},
  contact: {flexDirection: "row",justifyContent:"space-between", marginBottom: 10},
  bullet:{flexDirection: "row", marginBottom: 4, fontWeight: "bold"},
  item:{flexDirection: "row", marginBottom: 3,gap: 3},
  text:{ marginBottom: 3},
  itemT:{marginBottom:5,flexBasis:'20%',display:'flex',flexDirection:'row', gap: 5},
  itemS:{marginBottom:5,flexBasis:'25%',display:'flex',flexDirection:'row', gap: 5},
});

export default function ThirdDocument({ data }) {
  const tskillList = (data?.tskills || "").toString().trim().split(/\s+/);
  const sskillList = (data?.sskills || "").toString().trim().split(/\s+/);

  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.name}>{data.name}</Text>
        <View style={styles.contact}>
          <Text>{data.email}</Text>
          <Text>{data.phone}</Text>
        </View>

        {data.objective && (
          <View style={styles.section}>
            <Text style={styles.heading}>Objective</Text>
            <Text>{data.objective}</Text>
          </View>
        )}

        {(data.collegeOne || data.collegeTwo) && (
          <View style={styles.section}>
            <Text style={styles.heading}>Education</Text>
            <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={styles.bullet}>{data.collegeOne}</Text>
                <Text> : - {data.courseOne}</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={styles.bullet}>{data.collegeTwo}</Text>
                <Text> : - {data.courseTwo}</Text>
            </View>
          </View>
        )}

        {(data.titleOne || data.titleTwo) && (
          <View style={styles.section}>
            <Text style={styles.heading}>Projects</Text>
            <Text style={styles.bullet}>{data.titleOne}</Text>
            <Text style={styles.text}>• {data.descOne}</Text>
            <Text style={styles.bullet}>{data.titleTwo}</Text>
            <Text style={styles.text}>• {data.descTwo}</Text>
            <Text style={styles.bullet}>{data.titleThree}</Text>
            <Text style={styles.text}>• {data.descThree}</Text>
          </View>
        )}

        {(data.comOne || data.comTwo) && (
          <View style={styles.section}>
            <Text style={styles.heading}>Experience</Text>
            <Text style={styles.bullet}>{data.comOne}</Text>
            <Text style={styles.text}>• {data.accOne}</Text>
            <Text style={styles.bullet}>{data.comTwo}</Text>
            <Text style={styles.text}>• {data.accTwo}</Text>
          </View>
        )}

        {Array.isArray(tskillList) && tskillList.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Technical Skills</Text>
            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
                {tskillList.map((skill, index) => skill ? (
                  <View key={index} style={styles.itemT}>
                    <Text>•</Text>
                    <Text>{skill}</Text>
                  </View>
                ):null)}
            </View>
          </View>
        )}

        {sskillList.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.heading}>Soft Skills</Text>
            <View style={{flexDirection:"row", flexWrap:"wrap"}}>
            {sskillList.map((skill, index) => (
              <View key={index} style={styles.itemS}>
                    <Text>•</Text>
                    <Text>{skill}</Text>
                </View>
            ))}
            </View>
          </View>
        )}

        {(data.achOne || data.achTwo || data.achThree) && (
          <View style={styles.section}>
            <Text style={styles.heading}>Achievements</Text>
            {data.achOne && <Text style={styles.text}>• {data.achOne}</Text>}
            {data.achTwo && <Text style={styles.text}>• {data.achTwo}</Text>}
            {data.achThree && <Text style={styles.text}>• {data.achThree}</Text>}
          </View>
        )}
      </Page>
    </Document>
  );
}
