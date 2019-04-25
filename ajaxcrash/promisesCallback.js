//Parametros da promise
const get = (url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', url, true)
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.response))

            } else {
                reject(xhr.statusText)
            }
        }
        xhr.onerror =  () => {
            reject(xhr.statusText)
        }
        xhr.send()
    })
}
// Cadeia de callbacks
var promise = get('user.json')
promise.then((txt) => {
    document.getElementById('text').innerHTML = text
}).catch(error => {
    console.log(error)
})

