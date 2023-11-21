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
Selector.select('h1').innerText = 'Contact!'