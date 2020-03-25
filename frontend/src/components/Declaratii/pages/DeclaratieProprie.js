import React, { useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";
import SignatureCanvas from "react-signature-canvas";

import { useEffect, useSetState, useLocalStorage } from "../helpers/hooks";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";
import downloadPDF from "../helpers/utils";

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Section from "../components/Section";
import TextField from "../components/TextField";
import CheckboxLabel from "../components/CheckboxLabel";
import Signature from "../components/Signature";

import RendererProprie from "../pdf/RendererProprie";

const CSSReset = createGlobalStyle`
  html, body, p, ol, ul, li, hr, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size:100%;
    font-weight:normal;
  }
  textarea, input {
    border: 0;
    outline: 0;
  }
  ul {
    list-style:none;
  }
  button, input, select, textarea {
    margin: 0;
    border: 0;
    outline: 0;
  }
  html {
    box-sizing: border-box;
  }
  body {
    color: ${color.black};
    font-size: ${fontSize.medium};
    font-family: ${fontFamily.serif};
    font-weight: ${fontWeight.regular};
    background-color: ${color.white};
  }
`;

function DeclaratieProprie() {
  const [isGenerated, setIsGenerated] = useState(false);

  const emptyValues = {
    nume: undefined,
    prenume: undefined,
    zi_nastere: undefined,
    luna_nastere: undefined,
    an_nastere: undefined,
    adresa: undefined,
    destinatii: undefined,
    deplasare_profesionala: false,
    deplasare_aprovizionare: false,
    deplasare_medicala: false,
    deplasare_ajutor: false,
    deplasare_sport: false,
    deplasare_agricultura: false,
    deplasare_donatie_sange: false,
    deplasare_voluntariat: false,
    deplasare_comercializare: false,
    deplasare_aprovizionare_profesionala: false
  };

  const [initialValues, saveFormValues] = useLocalStorage(
    "cachedForm",
    emptyValues
  );
  const [form, setForm] = useSetState(initialValues);

  useEffect(() => {
    saveFormValues(form);
  }, [form, saveFormValues]);

  const onChange = ({ target }) => {
    setForm({
      [target.name]: target.value
    });
  };

  const onCheck = ({ target }) => {
    setForm({
      [target.name]: target.checked
    });
  };

  const signature = useRef();

  return (
    <Wrapper>
      <CSSReset />

      <Section textSize="large" align="center">
        <strong>DECLARAȚE PE PROPRIE RĂSPUNDERE</strong>
      </Section>

      <Section bottom="small">
        <strong>Nume, prenume:</strong>
        <TextField
          size="large"
          name="nume"
          value={form?.nume}
          onChange={onChange}
        />
        <TextField
          size="large"
          name="prenume"
          value={form?.prenume}
          onChange={onChange}
        />
      </Section>
      <Section bottom="small">
        <strong>Data nașterii:</strong>
        <TextField
          size="small"
          name="zi_nastere"
          value={form?.zi_nastere}
          onChange={onChange}
        />
        <TextField
          size="small"
          name="luna_nastere"
          value={form?.luna_nastere}
          onChange={onChange}
        />
        <TextField
          name="an_nastere"
          value={form?.an_nastere}
          onChange={onChange}
        />
      </Section>
      <Section bottom="medium">
        <strong>Adresa locuinței</strong> (Se va completa adresa locuinței în
        care persoana locuiește în fapt, indiferent dacă este identică sau nu cu
        cea menționată în actul de identitate):
        <TextField
          size="large"
          name="adresa"
          value={form?.adresa}
          onChange={onChange}
        />
      </Section>
      <Section bottom="medium">
        <strong>Locul/locurile deplasării</strong> (Se vor menționa locurile în
        care persoana se deplasează, în ordinea în care aceasta intenționează
        să-și desfășoare traseul):
        <TextField
          size="large"
          name="destinatii"
          value={form?.destinatii}
          onChange={onChange}
        />
      </Section>
      <Section bottom="large">
        <strong>Motivul deplasării</strong> (Se va bifa doar motivul/motivele
        deplasării dintre cele prevăzute în listă, nefiind permise deplasări
        realizate invocând alte motive decât cele prevăzute în Ordonanța
        Militară nr. 3/2020):
        <p>
          <CheckboxLabel
            name="deplasare_profesionala"
            checked={form?.deplasare_profesionala}
            onCheck={onCheck}
          >
            1. Interes profesional, inclusiv între locuință/gospodărie și
            locul/locurile de desfășurare a activității profesionale și înapoi
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_aprovizionare"
            checked={form?.deplasare_aprovizionare}
            onCheck={onCheck}
          >
            2. Asigurarea de bunuri care acoperă necesitățile de bază ale
            persoanelor și animalelor de companie/domestice
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_medicala"
            checked={form?.deplasare_medicala}
            onCheck={onCheck}
          >
            3. Asistență medicală care nu poate fi amânată și nici realizată de
            la distanță
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_ajutor"
            checked={form?.deplasare_ajutor}
            onCheck={onCheck}
          >
            4. Motive justificate, precum îngrijirea/ însoțirea unui
            minor/copilului, asistența persoanelor vârstnice, bolnave sau cu
            dizabilități ori deces al unui membru de familie
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_sport"
            checked={form?.deplasare_sport}
            onCheck={onCheck}
          >
            5. Activitate fizică individuală (cu excluderea oricăror activități
            sportive de echipă/ colective) sau pentru nevoile animalelor de
            companie/domestice, în apropierea locuințe
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_agricultura"
            checked={form?.deplasare_agricultura}
            onCheck={onCheck}
          >
            6. Realizarea de activități agricole
          </CheckboxLabel>
          <hr />
          <CheckboxLabel
            name="deplasare_donatie_sange"
            checked={form?.deplasare_donatie_sange}
            onCheck={onCheck}
          >
            7. Donarea de sânge, la centrele de transfuzie sanguină
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_voluntariat"
            checked={form?.deplasare_voluntariat}
            onCheck={onCheck}
          >
            8. Scopuri umanitare sau de voluntariat
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_comercializare"
            checked={form?.deplasare_comercializare}
            onCheck={onCheck}
          >
            9. Comercializarea de produse agroalimentare (în cazul
            producătorilor agricoli)
          </CheckboxLabel>
          <CheckboxLabel
            name="deplasare_aprovizionare_profesionala"
            checked={form?.deplasare_aprovizionare_profesionala}
            onCheck={onCheck}
          >
            10. Asigurarea de bunuri necesare desfășurării activității
            profesionale
          </CheckboxLabel>
        </p>
      </Section>

      <Section>
        Semnătura
        <Signature>
          <SignatureCanvas
            penColor={color.black}
            ref={signature}
            canvasProps={{ width: 760, height: 200 }}
          />
        </Signature>
      </Section>

      <Section align="center">
        <Button onClick={() => setIsGenerated(true)}>Descarcă PDF</Button>

        {isGenerated ? (
          <PDFDownloadLink
            document={
              <RendererProprie
                form={form}
                signature={signature?.current?.toDataURL()}
              />
            }
            fileName="declaratie_proprie_raspundere.pdf"
          >
            {({ url }) => {
              url && downloadPDF(url) && setIsGenerated(false);
            }}
          </PDFDownloadLink>
        ) : null}
      </Section>
    </Wrapper>
  );
}

export default DeclaratieProprie;
