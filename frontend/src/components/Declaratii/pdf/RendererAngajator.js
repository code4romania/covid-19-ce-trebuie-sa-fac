import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet
} from "@react-pdf/renderer";
import Logo from "../static/logo-fii-informat.png";

import { color, fontFamily } from "../helpers/constants";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  page: {
    padding: "80pt",
    fontSize: "11pt",
    lineHeight: "2.5"
  },
  text: {
    fontFamily: fontFamily.sansSerif
  },
  title: {
    fontFamily: fontFamily.sansSerif,
    fontSize: "14pt",
    textAlign: "center"
  },
  textBold: {
    paddingVertical: "20pt",
    textTransform: "uppercase",
    fontFamily: fontFamily.sansSerifCondensed
  },
  section: {
    marginBottom: "20pt"
  },
  notes: {
    position: "absolute",
    marginLeft: "60pt",
    bottom: "40px"
  },
  logo: {
    position: "absolute",
    right: "10pt",
    top: "10pt",
    height: "50px"
  },
  note: {
    fontSize: "9pt",
    fontFamily: fontFamily.sansSerif
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  list: {
    marginBottom: "40pt"
  },
  block: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10pt"
  },
  checkbox: {
    width: "10pt",
    height: "10pt",
    marginTop: "2pt",
    marginRight: "10pt",
    border: `1pt solid ${color.black}`
  },
  checked: {
    backgroundColor: color.black
  },
  signature: {
    width: "150pt"
  }
});

function RendererAngajator({ form, signature }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Image style={styles.logo} src={Logo} />

        <View style={styles.section}>
          <Text style={styles.title}>Declarație angajator</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Subsemnatul (nume, prenume),
            <Text style={styles.textBold}> {form?.nume}</Text>, în calitate de
            (funcția)
            <Text style={styles.textBold}> {form?.functie}</Text> în cadrul
            (organizația)
            <Text style={styles.textBold}> {form?.organizatie}</Text> , confirm
            faptul că deplasarea persoanei menționată mai jos, între domiciliu
            și locul său de muncă, este esențială pentru activitatea
            organizației și nu poate fi organizată sub formă de telemuncă.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.text}>
            Datele persoanei care se deplasează:{"\n"}
            Nume: <Text style={styles.textBold}> {form?.nume_angajat}</Text>
            {"\n"}
            Prenume:{" "}
            <Text style={styles.textBold}> {form?.prenume_angajat}</Text>
            {"\n"}
            Data nașterii:{" "}
            <Text style={styles.textBold}> {form?.data_nasterii}</Text>
            {"\n"}
            Adresa: <Text style={styles.textBold}> {form?.adresa}</Text>
            {"\n"}
            Domeniul activității profesionale:{" "}
            <Text style={styles.textBold}> {form?.domeniu_activitate}</Text>
            {"\n"}
            Locul de desfășurare al activității profesionale:{" "}
            <Text style={styles.textBold}> {form?.loc_activitate}</Text>
            {"\n"}
            Traseul deplasării:{" "}
            <Text style={styles.textBold}> {form?.traseu}</Text>
            {"\n"}
            Mijlocul de deplasare:{" "}
            <Text style={styles.textBold}> {form?.mijloc_deplasare}</Text>
            {"\n"}
          </Text>
        </View>

        <View style={styles.grid}>
          <View>
            <Text style={styles.text}>Perioada</Text>
            <Text style={styles.text}>
              {form?.perioada_start} până la {form?.perioada_final}
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Semnătura</Text>
            <View style={styles.signature}>
              <Image src={signature} />
            </View>
          </View>
        </View>

        <View style={styles.notes}>
          <Text style={styles.note}>
            Adeverința se va completa și certifica de către angajator sau alt
            reprezentant legal al acestuia.
          </Text>
        </View>
      </Page>
    </Document>
  );
}

RendererAngajator.propTypes = {
  form: PropTypes.object,
  signature: PropTypes.any
};

export default RendererAngajator;
