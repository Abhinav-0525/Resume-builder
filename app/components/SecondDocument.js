import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {flexDirection: "row",fontSize: 13},
  sidebar: {width: "32%",backgroundColor: "#f0f0f0",padding: 15},
  main: {width: "68%", padding: 20},
  name: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  heading: { fontSize: 14, fontWeight: "bold", marginBottom: 5, marginTop: 10, color: "#444" },
  item: { marginBottom: 5, marginRight: 10, flexDirection: 'row' },
  bullet: { marginBottom: 4, marginTop: 4 },
  text: { marginLeft: 4 },
  title: {fontSize: 13, fontWeight: "bold", marginBottom: 4, marginTop: 4}
});

export default function SecondDocument({ data }) {
  const tskillList = (data?.tskills || "").toString().trim().split(/\s+/);
  const sskillList = (data?.sskills || "").toString().trim().split(/\s+/);

  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.sidebar}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={{marginBottom:5}}>{data.email}</Text>
          <Text>{data.phone}</Text>

          {tskillList.length > 0 && (
            <View>
              <Text style={styles.heading}>Technical Skills</Text>
              {tskillList.map((skill, index) => (
                <View key={index} style={styles.item}>
                    <Text>•</Text>
                    <Text style={styles.text}>{skill}</Text>
                </View>
              ))}
            </View>
          )}

          {sskillList.length > 0 && (
            <View>
              <Text style={styles.heading}>Soft Skills</Text>
              {sskillList.map((skill) => (
                <Text key={skill} style={styles.item}>• {skill}</Text>
              ))}
            </View>
          )}
        </View>
        <View style={styles.main}>
          {data.objective && (
            <View>
              <Text style={styles.heading}>Objective</Text>
              <Text>{data.objective}</Text>
            </View>
          )}

          {(data.collegeOne || data.collegeTwo) && ( <View>
              <Text style={styles.heading}>Education</Text>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={styles.title}>{data.collegeOne}</Text>
                <Text style={styles.bullet}>: - {data.courseOne}</Text>
              </View>
              <View style={{display:'flex', flexDirection:'row'}}>
                <Text style={styles.title}>{data.collegeTwo}</Text>
                <Text style={styles.bullet}>: - {data.courseTwo}</Text>
              </View>
              </View>
          )}

          {(data.titleOne|| data.titleTwo) && ( <View>
              <Text style={styles.heading}>Projects</Text>
              <Text style={styles.title}>{data.titleOne}</Text>
              <Text style={styles.item}>• {data.descOne}</Text>
              <Text style={styles.title}>{data.titleTwo}</Text>
              <Text style={styles.item}>• {data.descTwo}</Text>
              <Text style={styles.title}>{data.titleThree}</Text>
              <Text style={styles.item}>• {data.descThree}</Text>
                </View>)}

          {(data.comOne || data.comTwo) && (<View>
              <Text style={styles.heading}>Experience</Text>
              {data.comOne && <View>
                    <Text style={styles.title}>{data.comOne}</Text>
                    <Text style={styles.item}>• {data.accOne}</Text>
                    </View>}
              {data.comTwo && <View>
                    <Text style={styles.title}>{data.comTwo}</Text>
                    <Text style={styles.item}>• {data.accTwo}</Text>
                    </View>}
            </View>
          )}
          {(data.achOne||data.achTwo||data.achThree) && (<View>
            <Text style={styles.heading}>Achievements</Text>
            {data.achOne && <Text style={styles.item}>• {data.achOne}</Text>}
            {data.achTwo && <Text style={styles.item}>• {data.achTwo}</Text>}
            {data.achThree && <Text style={styles.item}>• {data.achThree}</Text>}
        </View>
          )}
        </View>
      </Page>
    </Document>
  );
}
