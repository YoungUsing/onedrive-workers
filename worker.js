const client_id=""
const client_secret=""
const tenate=""
const root="/"
const driver_id=""
const proxyhost=""

async function handleRequest(request){
    const requestURL=new URL(request.url)
    const queryst=requestURL.searchParams
    const view=queryst.get("view")
    const proxystatus=Boolean(queryst.get("proxy"))
    console.log(requestURL)
    let path=requestURL.pathname
    console.log(path)
    if (path==="/"){
        return new Response("Nothing to request",{status:400})
    } 
    else{
        var res=await getlink(path)
        console.log(res)
        if (String(res)===String("2")) {
            return new Response(null,{status:404})
        } else {
            if (String(res)===String("1")) {
                return new Response("An error happened,please contact the server owner for further information.",{status:500})
            }
            if (proxystatus==true&&(proxyhost)) {
                var resurl=new URL(res)
                resurl.hostname=proxyhost
                res=resurl
            }
            if (view=="video") {
                return new Response('<html lang="en"><head><title>'+path+'</title></head><body><video src="'+res+'" width="100%" height="100%" controls></video></body></html>',
                {status:200,
                    headers:{
                        "Content-Type":"text/html"
                    }
                })
            }
            if (view=="videojs") {
                return new Response('<html lang="en"><head><title>'+path+'</title><link href="https://vjs.zencdn.net/8.23.3/video-js.css" rel="stylesheet" /></head><body><video class="video-js" width="100%" height="100%" controls preload="auto"><source src="'+res+'"/></video><script src="https://vjs.zencdn.net/8.23.3/video.min.js"></script></body></html>',
                {status:200,
                    headers:{
                        "Content-Type":"text/html"
                    }
                })
            }
            else{
                return new Response(null,{status:302,
                    headers:{
                      "Location":res
                    }
                })
            }
        }
    }

}

async function getlink(path) {
    let tokenURL=await fetch("https://login.microsoftonline.com/"+tenate+"/oauth2/v2.0/token", {
        method: "POST",
        body: "client_id="+client_id+"&scope=https%3A%2F%2Fgraph.microsoft.com%2F.default&client_secret="+client_secret+"&grant_type=client_credentials",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    let tokenjson=await tokenURL.json()
    let token='Bearer '+tokenjson.access_token
    let redirectJSON=await fetch("https://graph.microsoft.com/v1.0/drives/"+driver_id+"/root:"+root+path+":?select=@microsoft.graph.downloadUrl",{
        method:"GET",
        headers: {"Authorization": token},
        }
    )
    if (redirectJSON.status==Number("200")){
        let redirectinf=await redirectJSON.json()
        let redirectURL=redirectinf['@microsoft.graph.downloadUrl']
        return redirectURL
    }       
    else{
        if (redirectJSON.status==Number("404")) {
            return "2"
        } else {
            return "1"
        }
    }
}

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})