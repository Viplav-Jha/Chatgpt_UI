export const response =async(chat) => {
    try {
        const response = await fetch("https://chatgpt-express-code.vercel.app/",{
            method:'POST',
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                message:chat.map((message)=>message.message).join("\n")
            })
        })
  const data =await response.json()
  return data

    }catch(error){
      console.log(error)
    }
}