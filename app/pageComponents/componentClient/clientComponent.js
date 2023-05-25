'use client';
import BotaoServer from "../componentServidor/pageServer";
const ClientComponent = () => {

  const clicaE = async (e) => {

    console.log(e.target.files)

  }

  return (
    <>
    <div className="flex flex-col">
      <div >
      <h1>enviar video</h1>
      </div>
      
     <div >
      <input type="file" onChange={clicaE} />
      </div> 
    </div>
     

 
    </>
  );
}

export default ClientComponent