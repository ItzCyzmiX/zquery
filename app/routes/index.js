const zFetch = async (path='GET /', body=undefined) => {
    const res = await fetch('http://localhost:6969/api' + path.split(' ')[1], {
        method: path.split(' ')[0],
        body
    })
    const json = await res.json()
    return json
}
function error(info) {
    if (info.type === 'undefined') {
        console.error(`
            --------------
            |Zquery Error|
            --------------  
                            
            No element of ${info.element} with the ${info.selector} '${info.value}' has been found!
            Make sure that that element exist, if the error persists dont ask us lol! jk

        `)
    }
}




HTMLElement.prototype.css = function(str) {
    this.style.cssText = str
}

const doc = document

class Selector {
    static select(str) {
        if (str.includes('#')) {
            const elm = document.getElementById(str.split('#')[1])
            return str.split('#')[0] === elm.localName ? elm : null
        }

        if (str.includes('.')) {
            
            if (str.slice(-1) === '!') {
                return document.getElementsByClassName(str.split('.')[1].slice(0, -1))
            }
            const elm = document.getElementsByClassName(str.split('.')[1])[0]
            
            if (!elm || elm?.localName !== str.split('.')[0]) {
                error({
                    type: 'undefined',
                    element: str.split('.')[0],
                    selector: 'class',
                    value: str.split('.')[1],

                })
            }

            return elm

        }

        if (str.includes('%')) {
            if (str.slice(-1) === '!') {
                return document.getElementsByName(str.split('%')[1].slice(0, -1))
            }
            const elm = document.getElementsByClassName(str.split('%')[1])[0]
            return elm.localName === str.split('%')[0] ? elm : null

        }

        if (str.slice(-1) === '!') {
            return document.querySelectorAll(str.slice(0, -1))
        }
        
        return document.querySelector(str)
    }
}
btn = Selector.select('button')
btn.innerText = 'greet'
btn.onclick = () => {
    Selector.select('h1').innerText = 'Hello, World!'
}


