import { useEffect, useState } from "react";
import axios from 'axios';
import Dropdown from "./components/dropdown"
import Header from "./components/header"


function App() {
  const [data, setData] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});


  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/212ad5cc-38bb-4abc-9dbe-9b7af7bd5d58")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invoice data:", error);
      });
  }, []);

  if (!data) return <div className="min-h-screen w-full flex flex-col items-center justify-center">
    <img alt="loader" src="/images/loader/loader.svg"/>
  </div>;

  const mainInvoice = data.invoices[0];
  const otherInvoices = data.invoices.slice(1);

  function formatDate(dateString) {
    const [day, month, year] = dateString.split('-');
    const date = new Date(`${year}-${month}-${day}`);
    return `${day} ${date.toLocaleString('default', { month: 'short' })}`;
  }


  return (
    <div className="App w-full max-w-[1180px] mx-auto">
      <div className="flex justify-center lg:justify-start relative py-4 bg-white items-center">
        <img className="absolute left-4" alt="svg icon" src="/images/invoice/svgs/chevron.svg" />
        <p className="inter-600 text-lg pl-14">Invoice details</p>
      </div>
      <div className="px-4 xl:px-0 mt-4">
        <div className="bg-white px-4 py-6 rounded-2xl flex-col flex justify-center items-center">
          <div className="flex gap-2 items-center justify-start w-full">
            <img alt="svg icon" src="/images/invoice/svgs/info.svg" />
            <p className="inter-600 text-sm">Due payment</p>
          </div>
          <div className="my-4 w-full relative bg-[#F5F5F5] pt-4 pb-5">
            <img alt="background" src="/images/invoice/images/1.png" className="absolute left-0 top-0" />
            <div className="stats-section pl-[62px]">
              <p className="text-2xl text-dark">
                <span className="inter-600">{mainInvoice.amount}</span> <span className="text-sm">SAR</span>
              </p>
              <p className="mt-1.5 text-xs">
                Total due <span className="inter-600">{formatDate(mainInvoice.dueDate)}</span> incl. VAT
              </p>
            </div>
          </div>
          <div className="mb-4 w-full">
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-light">Invoice number</span>
              <span className="text-sm inter-600 text-dark">CINV24013131134</span>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between items-center w-full">
              <span className="text-sm text-light">Issue date</span>
              <span className="text-sm inter-600 text-dark">2025-01-16</span>
            </div>
          </div>
          <button className="bg-primary w-full rounded-xl text-white text-sm inter-600 py-4 max-w-[400px]">
            <div className="flex items-center justify-center space-x-2">
              <img alt="svg icon" src="/images/invoice/svgs/eye.svg" />
              <span>View invoice</span>
            </div>
          </button>
        </div>

        <div className="mt-9">
          <Header title={'Invoice items'} number={otherInvoices.length} />
          {otherInvoices.map((item, index) => {
            const isExpanded = expandedItems[index];
            return (
              <Dropdown isExpanded={isExpanded} item={item} index={index} setExpandedItems={setExpandedItems} expandedItems={expandedItems} />
            );
          })}
          <Header className="mt-[26px]" title={'Issued from'} number={0} />
          <div className="bg-white p-4 rounded-lg mt-4 flex items-start justify-between">
            <p className="text-sm inter-600 text-dark">Integrated Telecom company Ltd.</p>
            <button
            >
              <img
                alt="chevron"
                src="/images/invoice/svgs/chevrond.svg"
              />
            </button>
          </div>
          <Header className="mt-[26px]" title={'Issued to'} number={0} />
          <div className="bg-white p-4 rounded-lg mt-4 flex items-start justify-between">
            <p className="text-sm inter-600 text-dark">VistaLink Innovations</p>
            <button
            >
              <img
                alt="chevron"
                src="/images/invoice/svgs/chevrond.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
