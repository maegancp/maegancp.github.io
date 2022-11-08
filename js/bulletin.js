var cards = [{ title: 'Baby Pacifier', button: 'Take a Poll' }, { title: 'To The Beach', button: 'Take a Poll' }, { title: 'Desert Destinations', button: 'Take a Poll' }]
var area = document.getElementById('see')

for (cardd of cards){
    var c = document.createElement('div')
    c.setAttribute('class','col-4 card')
    var content = document.createElement('div')
    content.setAttribute('class','content')
    var title = document.createElement('h2')
    title.setAttribute('class','title')
    title.appendChild(document.createTextNode(cardd.title))
    content.appendChild(title)
    var btn = document.createElement('button')
    btn.setAttribute('class','btnn')
    btn.appendChild(document.createTextNode(cardd.button))
    content.appendChild(btn)
    c.appendChild(content)
    area.appendChild(c)
} 