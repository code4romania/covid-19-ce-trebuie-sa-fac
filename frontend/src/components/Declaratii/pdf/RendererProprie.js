import React from "react";
import format from "date-format";
import PropTypes from "prop-types";
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

const styles = StyleSheet.create({
  page: {
    padding: "80pt",
    fontSize: "11pt",
    lineHeight: "1.4"
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

function RendererProprie({ form, signature }) {
  return (
    <Document>
      <Page style={styles.page}>
        <Image style={styles.logo} src={Logo} />
        <View style={styles.section}>
          <Text style={styles.title}>Declarație pe proprie răspundere</Text>
        </View>

        <View>
          <Text style={styles.text}>
            <Text>Nume, prenume:</Text>
            <Text style={styles.textBold}>
              {" "}
              {form?.nume} {form?.prenume}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            <Text>Data nașterii:</Text>
            <Text style={styles.textBold}>
              {" "}
              {form?.zi_nastere}-{form?.luna_nastere}-{form?.an_nastere}
            </Text>
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            <Text>Adresa locuinței:</Text>
            <Text style={styles.textBold}> {form?.adresa}</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            <Text>Locul/locurile deplasării:</Text>
            <Text style={styles.textBold}> {form?.destinatii}</Text>
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.text}>
            <Text>Motivul deplasării:</Text>
          </Text>
        </View>

        <View style={styles.list}>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_profesionala && styles.checked
              ]}
            />
            <Text style={styles.text}>
              Interes profesional, inclusiv între locuință/gospodărie și
              locul/locurile de desfășurare a activității profesionale și înapoi
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_aprovizionare && styles.checked
              ]}
            />
            <Text style={styles.text}>
              Asigurarea de bunuri care acoperă necesitățile de bază ale
              persoanelor și animalelor de companie/domestice
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_medicala && styles.checked
              ]}
            />
            <Text style={styles.text}>
              Asistență medicală care nu poate fi amânată și nici realizată de
              la distanță
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_ajutor && styles.checked
              ]}
            />
            <Text style={styles.text}>
              Motive justificate, precum îngrijirea/ însoțirea unui
              minor/copilului, asistența persoanelor vârstnice, bolnave sau cu
              dizabilități ori deces al unui membru de familie
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[styles.checkbox, form?.deplasare_sport && styles.checked]}
            />
            <Text style={styles.text}>
              Activitate fizică individuală (cu excluderea oricăror activități
              sportive de echipă/ colective) sau pentru nevoile animalelor de
              companie/domestice, în apropierea locuințe
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_agricultura && styles.checked
              ]}
            />
            <Text style={styles.text}>Realizarea de activități agricole</Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_donatie_sange && styles.checked
              ]}
            />
            <Text style={styles.text}>
              <Text style={styles.text}>
                {" "}
                Donarea de sânge, la centrele de transfuzie sanguină
              </Text>
              .
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_voluntariat && styles.checked
              ]}
            />
            <Text style={styles.text}>
              <Text style={styles.text}>
                {" "}
                Scopuri umanitare sau de voluntariat
              </Text>
              .
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_comercializare && styles.checked
              ]}
            />
            <Text style={styles.text}>
              <Text style={styles.text}>
                {" "}
                Comercializarea de produse agroalimentare (în cazul
                producătorilor agricoli)
              </Text>
              .
            </Text>
          </View>
          <View style={styles.block}>
            <View
              style={[
                styles.checkbox,
                form?.deplasare_aprovizionare_profesionala && styles.checked
              ]}
            />
            <Text style={styles.text}>
              <Text style={styles.text}>
                {" "}
                Asigurarea de bunuri necesare desfășurării activității
                profesionale
              </Text>
              .
            </Text>
          </View>
        </View>

        <View style={styles.grid}>
          <View>
            <Text style={styles.text}>Data</Text>
            <Text style={styles.text}>{format("dd-MM-yyyy", new Date())}</Text>
          </View>
          <View>
            <Text style={styles.text}>Semnatura</Text>
            <View style={styles.signature}>
              <Image src={signature} />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

RendererProprie.propTypes = {
  form: PropTypes.object,
  signature: PropTypes.any
};

export default RendererProprie;
