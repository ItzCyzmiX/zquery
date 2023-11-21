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
            //console.log(str.split('.')[0], elm.localName)
            //return elm.localName === str.split('.')[0] ? elm : null
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
let h1 = Selector.select('h1')

h1.innerText = 'Hello World!'
h1.css(`
    color: tomato;
`)

Selector.select('style').innerHTML = `
    #container {
        margin-right: 10px;
        text-align: center;
        border: 1.8px solid black;
        border-radius: 10px;
        padding: 0.1rem;
        box-shadow: 5px 5px 0px black, 10px 10px 0px grey;

        transition: all 0.25s ease;
    }

    #container:hover {
        border-radius: 25px;
        box-shadow: 10px 10px 0px black, 15px 15px 2px grey;
        transform: translateY(3px)
    }
`