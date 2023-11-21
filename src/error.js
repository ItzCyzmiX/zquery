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

