'use client';
import BotaoServer from "../componentServidor/pageServer";
const ClientComponent = () => {

  const clicaE = async (e) => {
   
console.log(e.target.files)
    const video = URL.createObjectURL(e.target.files[0])
    const videoo = document.createElement("video");
    videoo.setAttribute("src", video);
   const capiturar = videoo.captureStream()
   console.log(capiturar)
  }
  
  return (
    <>
<input type="file" onChange={clicaE}/>
      <button onClick={clicaE}>clicae</button>
    </>
  );
}

export default ClientComponent