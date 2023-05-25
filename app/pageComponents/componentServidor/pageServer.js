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

        const response = await fetch(process.env.NEXT_PUBLIC_APIDEV + '/teste',{
            method:'POST',
            body:stream,
            duplex: 'half',
            headers:{
                'Content-Type':'video/mp4'
            }
        })

        const res = await response.json()
        return res
    }

   console.log(await postLArge(pedacoVideos))
}

export default BotaoServer