import React, { useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useEffect, useSetState, useLocalStorage } from "../helpers/hooks";
import { color, fontWeight, fontFamily, fontSize } from "../helpers/constants";
import downloadPDF from "../helpers/utils";

import Button from "../components/Button";
import Wrapper from "../components/Wrapper";
import Section from "../components/Section";
import TextField from "../components/TextField";

import RendererAngajator from "../pdf/RendererAngajator";

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

function AdeverintaAngajator() {
  const [isGenerated, setIsGenerated] = useState(false);

  const emptyValues = {
    nume: undefined,
    functie: undefined,
    organizatie: undefined,
    nume_angajat: undefined,
    prenume_angajat: undefined,
    data_nasterii: undefined,
    adresa: undefined,
    domeniu_activitate: undefined,
    loc_activitate: undefined,
    traseu: undefined,
    mijloc_deplasare: undefined,
    perioada_start: undefined,
    perioada_final: undefined
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

  const signature = useRef();

  return (
    <Wrapper>
      <CSSReset />

      <Section textSize="large" align="center">
        <strong>Adeverință angajator</strong>
      </Section>

      <Section bottom="medium">
        <span
          style={{
            marginLeft: "35px"
          }}
        >
          Subsemnatul (nume, prenume),
        </span>
        <TextField
          size="large"
          name="nume"
          value={form?.nume}
          onChange={onChange}
        />
        , în calitate de (funcția)
        <TextField
          size="large"
          name="functie"
          value={form?.functie}
          onChange={onChange}
        />{" "}
        în cadrul (organizația)
        <TextField
          size="large"
          name="organizatie"
          value={form?.organizatie}
          onChange={onChange}
        />
        , confirm faptul că deplasarea persoanei menționată mai jos, între
        domiciliu și locul său de muncă, este esențială pentru activitatea
        organizației și nu poate fi organizată sub formă de telemuncă.
      </Section>

      <Section bottom="medium" left="medium">
        Datele persoanei care se deplasează:
        <div>
          {" "}
          Nume:{" "}
          <TextField
            size="large"
            name="nume_angajat"
            value={form?.nume_angajat}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Prenume:{" "}
          <TextField
            size="large"
            name="prenume_angajat"
            value={form?.prenume_angajat}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Data nașterii:{" "}
          <TextField
            size="large"
            name="data_nasterii"
            value={form?.data_nasterii}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Adresa:{" "}
          <TextField
            size="large"
            name="adresa"
            value={form?.adresa}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Domeniul activității profesionale:{" "}
          <TextField
            size="large"
            name="domeniu_activitate"
            value={form?.domeniu_activitate}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Locul de desfășurare al activității profesionale:{" "}
          <TextField
            size="large"
            name="loc_activitate"
            value={form?.loc_activitate}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Traseul deplasării:{" "}
          <TextField
            size="large"
            name="traseu"
            value={form?.traseu}
            onChange={onChange}
          />
        </div>
        <div>
          {" "}
          Mijlocul de deplasare:{" "}
          <TextField
            size="large"
            name="mijloc_deplasare"
            value={form?.mijloc_deplasare}
            onChange={onChange}
          />
        </div>
      </Section>

      <Section bottom="medium">
        <strong>
          Subsemnatul cunosc prevederile art. 326 din Codul Penal cu privire la
          falsul în declarații și art. 352 din Codul Penal cu privire la
          zădărnicirea combaterii bolilor.
        </strong>
      </Section>

      <Section bottom="small">
        Perioada:
        <div>
          De la{" "}
          <TextField
            name="perioada_start"
            value={form?.perioada_start}
            onChange={onChange}
          />{" "}
          &nbsp; până la{" "}
          <TextField
            name="perioada_final"
            value={form?.perioada_final}
            onChange={onChange}
          />
        </div>
      </Section>

      <Section align="center">
        <Button onClick={() => setIsGenerated(true)}>Descarcă PDF</Button>

        {isGenerated ? (
          <PDFDownloadLink
            document={
              <RendererAngajator
                form={form}
                signature={signature?.current?.toDataURL()}
              />
            }
            fileName="declaratie_angajator.pdf"
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

export default AdeverintaAngajator;
