import React from 'react'
import Modal from 'react-modal';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -140%)',
    borderRadius: "30px",
    ShadowRoot: "10px",
    boxShadow: "0 15px 15px -12px rgba(0, 0, 0, 0.25)",
   
  
    
  },

};
export default function Modals({setLang}) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
      // const buttonClosed = () => {
        
        
      //   setIsOpen(false);
      // }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = 'black';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const languges =[
    "English","French","Urdu","Deutch","Arabic","Spanich", "English","French"
   
  ]
  return (
    <div className=''>
    <button onClick={openModal}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-6 h-6 mt-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>


    </button>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    
    >
      <div className='flex m-auto justify-between items-center'> <h2 ref={(_subtitle) => (subtitle = _subtitle)} className='font-semibold    text-lg mb-4  text-center 
       '>Select Your Language </h2>
       <button onClick={() => setIsOpen(false)} className='font-bold text-lg text-[#02B1BF] ml-4'>X</button>
       </div>
     
      
      <div className='grid grid-cols-4  flex-wrap w-full justify-center '>
      {languges.map((l) => (
        <div key={l} className=" flex justify-center ">
          <button className="bg-[#dbeefd] m-[2px]  text-[#02B1BF] font-normal my-2 p-1 px-2 rounded-md  " onClick={() =>{ setLang(l)
          setIsOpen(false)}
          }>{l}</button>
        </div>
      ))}
    </div>
    </Modal>
  </div>
  
  )
}
