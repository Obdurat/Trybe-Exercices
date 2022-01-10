// console.log(document.getElementById('elementoOndeVoceEsta')
// VM597:1 Uncaught SyntaxError: missing ) after argument list
// console.log(document.getElementById('elementoOndeVoceEsta'))
// VM604:1 <section id=​"elementoOndeVoceEsta">​<section id=​"primeiroFilhoDoFilho">​</section>​<section id=​"segundoEUltimoFilhoDoFilho">​</section>​</section>​
// undefined
// document.getElementById('elementoOndeVoceEsta').parentNode
// <section id=​"pai">​…​</section>​<section id=​"primeiroFilho">​</section>​<section id=​"elementoOndeVoceEsta">​…​</section>​" Atenção! "<section id=​"terceiroFilho">​</section>​<section id=​"quartoEUltimoFilho">​</section>​</section>​
// document.getElementById('elementoOndeVoceEsta').parentNode.style.background = "green"
// 'green'
// document.getElementById('elementoOndeVoceEsta').parentNode.style.background = "default"
// 'default'
// document.getElementById('elementoOndeVoceEsta').parentNode.style.background = "none"
// 'none'
// document.getElementById('elementoOndeVoceEsta').parentNode.style.color = "green"
// 'green'
// document.getElementById('elementoOndeVoceEsta').parentNode.firstSibling
// undefined
// document.getElementById('pai').firstSibling
// undefined
// document.getElementById('pai').firstChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('pai').firstChild.firstChild
// null
// document.getElementById('pai').firstChild.firstChild.innerText = "Aloha"
// VM1213:1 Uncaught TypeError: Cannot set properties of null (setting 'innerText')
//     at <anonymous>:1:64
// (anonymous) @ VM1213:1
// document.getElementById('pai').firstChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('pai').firstChild.innerText = "Aloha"
// 'Aloha'
// document.getElementById('pai').firstChild
// #textinnerText: "Aloha"assignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('pai').firstChild
// #textinnerText: "Aloha"assignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('pai').firstChild.firstChild
// null
// document.getElementById('primeiroFilhoDoFilho').innerText = "Aloha"
// 'Aloha'
// document.getElementById('pai').firstChild
// #textinnerText: "Aloha"assignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('elementoOndeVoceEsta').firstChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n        "firstChild: nullisConnected: truelastChild: nulllength: 9nextElementSibling: section#primeiroFilhoDoFilhonextSibling: section#primeiroFilhoDoFilhonodeName: "#text"nodeType: 3nodeValue: "\n        "ownerDocument: documentparentElement: section#elementoOndeVoceEstaparentNode: section#elementoOndeVoceEstapreviousElementSibling: nullpreviousSibling: nulltextContent: "\n        "wholeText: "\n        "[[Prototype]]: Text
// document.getElementById('elementoOndeVoceEsta').previousSibling
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#elementoOndeVoceEstanextSibling: section#elementoOndeVoceEstanodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: section#primeiroFilhopreviousSibling: section#primeiroFilhotextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('elementoOndeVoceEsta').nextSibling
// " Atenção! "
// document.getElementById('elementoOndeVoceEsta').parentNode.firstChild
// #textinnerText: "Aloha"assignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n      "firstChild: nullisConnected: truelastChild: nulllength: 7nextElementSibling: section#primeiroFilhonextSibling: section#primeiroFilhonodeName: "#text"nodeType: 3nodeValue: "\n      "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: nullpreviousSibling: nulltextContent: "\n      "wholeText: "\n      "[[Prototype]]: Text
// document.getElementById('elementoOndeVoceEsta').nex
// undefined
// document.getElementById('elementoOndeVoceEsta').nextSibling
// " Atenção! "
// document.getElementById('elementoOndeVoceEsta').nextElementSibling
// <section id=​"terceiroFilho">​</section>​
// document.getElementById('pai').lastChild
// #textassignedSlot: nullbaseURI: "http://127.0.0.1:5500/fixing-Knowledge1.html"childNodes: NodeList []data: "\n    "firstChild: nullisConnected: truelastChild: nulllength: 5nextElementSibling: nullnextSibling: nullnodeName: "#text"nodeType: 3nodeValue: "\n    "ownerDocument: documentparentElement: section#paiparentNode: section#paipreviousElementSibling: section#quartoEUltimoFilhopreviousSibling: section#quartoEUltimoFilhotextContent: "\n    "wholeText: "\n    "[[Prototype]]: Text
// document.getElementById('pai').lastChild.previousSibling
// <section id=​"quartoEUltimoFilho">​</section>​
// document.getElementById('pai').lastChild.previousElement
// undefined
// document.getElementById('pai').lastChild.previousElementSibling
// <section id=​"quartoEUltimoFilho">​</section>​

