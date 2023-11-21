class Creator {
  static create(elm) {
    const element = document.createElement(elm)
    document.body.appendChild(element)
    return element
  }
}