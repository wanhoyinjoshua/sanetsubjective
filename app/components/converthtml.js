import jsPDF from 'jspdf'

const convertHtmlToPdf = (htmlContent) => {
  const pdf = new jsPDF();

    pdf.convertHtmlToPdf(htmlContent, 15, 15, {
        width: 180,
      });
  

  pdf.save('report.pdf');
};

export default convertHtmlToPdf;
