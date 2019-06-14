// $.getJSON('test.json', data => {
//     console.log(data)
// })

$.ajax({
    url: 'test.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: data => {
        $(data.articles).each((index,value) => {
            const test2 = JSON.stringify(data)
            document.getElementById('test').innerHTML = test2
        })
    }
})

$.ajax({
    url: 'test2.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: data => {
        $(data.articles2).each((index,value) => {
            const test3 = JSON.stringify(data)
            document.getElementById('test3').innerHTML = test3
        })
    }
})