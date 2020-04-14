const pathContainer = document.querySelector('#path')
const paths = window.location.pathname.split('/').filter(p => p !== '')

if (paths.length !== 0) {
    paths.forEach((path, index) => {
        const a = document.createElement('a')
        a.textContent = path
        a.href = '/' + paths
            .filter((p, i) => {
                const findIndex = paths.indexOf(path)
                if (findIndex >= i) {
                    return p
                }
            })
            .join('/')
        pathContainer.insertAdjacentElement('beforeend', a)
        if ((index + 1) < paths.length) {
            const span = document.createElement('span')
            span.textContent = ' > '
            pathContainer.insertAdjacentElement('beforeend', span)
        }
    })
}