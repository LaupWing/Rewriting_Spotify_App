const navLinks = document.querySelectorAll('nav a')

const getFirsPath = ()=>{
    return window.location.pathname.split('/').filter(r=>r!=='')[0]
}

navLinks.forEach(a=>{
    const firstpath = getFirsPath()
    if(a.pathname.replace('/', '') ===  firstpath){
        a.classList.add('active')
    }
})

