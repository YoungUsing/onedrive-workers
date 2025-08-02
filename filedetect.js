function checkfiletype(finput) {
    const files=[
        {mp4:"mp4"},
        {m3u8:"x-mpegURL"}
    ]
    for (const file of files) {
        if (finput==file){
			console.log(file)
            let ftypetext=files[file]
            return ftypetext
        }
        else{
            console.log("file")
            return null
        }
    }
}
checkfiletype(m3u8)