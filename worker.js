const client_id=""
const client_secret=""
const tenate=""
const root="/"
const driver_id="b!"

async function handleRequest(request){
    const requestURL=new URL(request.url)
    const path=requestURL.pathname
    if (path==="/"){
        return new Response("Nothing to request",{status:400})
    } else{
    let tokenURL=await fetch("https://login.microsoftonline.com/"+tenate+"/oauth2/v2.0/token", {
          method: "POST",
          body: "client_id="+client_id+"&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default&client_secret="+client_secret+"&grant_type=client_credentials",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          }
      })
    token_text=JSON.stringify(await tokenURL.json())
    token='Bearer '+token_text.slice(79,-2)
    let redirectJSON=await fetch("https://graph.microsoft.com/v1.0/drives/"+driver_id+"/root:"+root+path+":?select=@microsoft.graph.downloadUrl",{
              method:"GET",
              headers: {
              "Authorization": token
          },
        }
    )
    if (redirectJSON.status=="200"){
    redirectinf=JSON.stringify(await redirectJSON.json())
    redirectplace=redirectinf.indexOf("microsoft.graph.downloadUrl")
    redirectURL=redirectinf.slice(redirectplace+30,-2)
    return new Response(null,{status:302,
        headers:{
          "Location":redirectURL
      }
    })}
    else{
        return new  Response("Resource not found",{status:404})
    }
  }
}

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})
