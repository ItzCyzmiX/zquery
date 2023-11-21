const zFetch = async (path='GET /', body=undefined) => {
    const res = await fetch('http://localhost:6969/api' + path.split(' ')[1], {
        method: path.split(' ')[0],
        body
    })
    const json = await res.json()
    return json
}