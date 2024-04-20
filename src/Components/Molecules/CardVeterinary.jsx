import { saveAs } from "file-saver";
import { PDFViewer, pdf } from "@react-pdf/renderer";
import { PdfGenerator } from "../../PdfGenerator";
import { useGet } from "../../../public/hooks/useGet";
export const CardVeterinary = ({ name, id }) => {
  //  967 159 3741 num yuri
  
  const { data } = useGet(`http://44.216.227.91:4000/enclosure/${id}`);

  const generatePdf = async () => {
    const blob = await pdf(<PdfGenerator data={data} />).toBlob();
    saveAs(blob, "encierro.pdf");
  };

  return (
    <div className="bg-white rounded-md shadow-md my-5">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWl_Jj8mn86wIMP4Qr3zEOOsfZL30oNsLry7PSyptYg&s"
        className="rounded-t-md w-full"
        alt="Encierro"
      />
      <div className="p-4">
        <h2 className="text-center font-bold text-2xl text-[#03A460]">
          {name}
        </h2>
        <div className="flex flex-col grid-cols-3 gap-4 mt-4">
          <p>
            Para obtener información un poco más detallada del encierro presione
            el boton de debajo
          </p>
          <button
            className="rounded-md p-2 bg-[#03A460] text-white hover:bg-[#065f3a]"
            onClick={generatePdf}
          >
            Desacargar PDF
          </button>
        </div>
      </div>
    </div>
  );
};
