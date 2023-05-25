const BotaoServer = async (file) => {
    const chunkSize = 1204 * 1204
    function chunkSlice(file, chunkSize) {
        const fileSize = file.size
        const chunks = Math.ceil(fileSize / chunkSize);
    
        const fileChunks = [];

        for (let i = 0; i < chunks; i++) {
            const start = i * chunkSize;
         
            const end = Math.min(start + chunkSize, fileSize);
          
            const chunk = file.slice(start, end);
            fileChunks.push(chunk);
        }

        return fileChunks;
    }
    const pedacoVideos = chunkSlice(file, chunkSize)

    async function postLArge(pedadoVideos) {

        const stream = new ReadableStream({
            start(controller) {
                pedacoVideos.forEach(chunk => controller.enqueue(chunk))
                controller.close()
            }
        })

        const response = await fetch('https://large-cats-begin.loca.lt/teste',{
            method:'POST',
            body:JSON.stringify({mensagem:'alou foi'}),
          

            headers:{
                'Content-Type':'application/json'
            }
        })

        const res = await response.json()
        return res
    }

   console.log(await postLArge(pedacoVideos))
}

export default BotaoServer