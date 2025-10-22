import { useState } from "react";
import "./App.css";
import CxContent from "./components/content";
import CxImage from "./components/image";
import Modal from "react-modal";
import { Check } from "lucide-react";

function App() {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className="w-full min-h-dvh bg-transparent flex justify-center items-center">
      {modal === false ? (
        <div className="bg-white w-dvh min-h-dvh flex flex-col-reverse justify-end items-center lg:flex-row lg:min-h-[600px] max-h-[601px] lg:rounded-3xl lg:w-[75vw]">
          <CxContent modalOpen={openModal} />
          <CxImage />
        </div>
      ) : (
        <Modal
          isOpen={modal}
          className={"bg-white outline-none w-full h-full landscape:min-h-screen"} // caixa do modal
          overlayClassName={
            "bg-black/10 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
          }
          contentLabel="modal for response" // texto descritivo
          onRequestClose={closeModal} // fecha modal ao clicar fora ou apertar 'esc'
        >
          <div className="w-full portrait:h-full landscape:min-h-full flex flex-col-reverse p-9">
            <div className="w-full h-[85%] flex flex-col justify-between landscape:gap-y-12">
              <div className="space-y-12 ">
                <Check
                  className="bg-linear-to-t from-red-400 to-red-500 from-50% text-white rounded-full p-4  size-[70px] landscape:size-[60px]"
                  strokeWidth={3}
                />
                <div className="space-y-7">
                  <h1 className="text-blue-950 text-5xl font-bold">
                    Thanks for subscribing!
                  </h1>
                  <p className="text-blue-950 text-[18px] font-medium">
                    A confirmation email has been sent to
                    <strong className="text-blue-950 font-semibold">
                      ash@loremcompany.com
                    </strong>
                    Please open it and click the button inside to confirm your
                    subscription
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="bg-[#232742] text-white rounded-[10px] landscape:mb-3 text-[18px] font-bold  p-4"
              >
                Dismiss message
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;

// ARRUMAR ESPAÇAMENTO 'LANDSCAPE' NO MOBILE
