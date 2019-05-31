const fs = require("fs")

setInterval(async () => {
    let data = []
    const folderExists = fs.existsSync("data")
    const fileExists = fs.existsSync("/data/time.txt")

    if (!folderExists) {
        fs.mkdirSync('data')
    }
    else if (fileExists) {
        const fileData = fs.readFileSync("/data/time.txt").toString()

        data = JSON.parse(fileData)

        if (data.length === 10) {
            data = []
        }
    }

    data.push(Date())

    fs.writeFileSync('/data/time.txt', JSON.stringify(data))
}, 5000)
