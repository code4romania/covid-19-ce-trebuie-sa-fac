const downloadPDF = url => {
  const link = document.createElement("a");

  link.href = url;
  link.download = "declaratie_propie_raspundere.pdf";
  link.dispatchEvent(new MouseEvent("click"));

  return true;
};

export default downloadPDF;
