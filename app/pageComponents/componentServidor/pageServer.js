const BotaoServer = async () => {
  function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
  
  const stream = new ReadableStream({
    async start(controller) {
      await wait(1000);
      controller.enqueue('This ');
      await wait(1000);
      controller.enqueue('is ');
      await wait(1000);
      controller.enqueue('a ');
      await wait(1000);
      controller.enqueue('slow ');
      await wait(1000);
      controller.enqueue('request.');
      controller.close();
    },
  }).pipeThrough(new TextEncoderStream());
  
  const res = await fetch('https://localhost:8000/teste/', {
    method: 'POST',
    headers: {'Content-Type': 'text/plain'},
    body: stream,
    duplex: 'half',
  });
  
const response = await res.json()

return response
/*const res = await fetch('http://localhost:8000/teste/',{
  method:"POST",
  headers:{
    'Content-Type':'application/json',
    'Content-Length': 332
  },
  body:JSON.stringify({mensagem:'ola valeu'})
})
const response = await res.json()
console.log(response)*/
}

export default BotaoServer