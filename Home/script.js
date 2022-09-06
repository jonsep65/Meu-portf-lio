const github = document.getElementById("github");
const linkdin = document.getElementById("linkedin");
const instagram = document.getElementById("instagram")
const ulrGit = "https://github.com/jonsep65"
const urlLink = "https://www.linkedin.com/in/jonadabe-silva-06503b200/"
const urlInsta = "https://instagram.com/jonsep._?r=nametag/"


// Função pra abrir as paginas das redes socias

// GItHUb
function openGit(){
    const git = window.open(ulrGit, "_black")
  
}
github.addEventListener("click", () => {
    openGit(ulrGit)
})

// Linkdin

function openLink(){
    const link = window.open(urlLink, "_black")
  
}

linkdin.addEventListener("click", () => {
    openLink(urlLink)
})

// Instagram
function openLink(){
    const link = window.open(urlLink, "_black")
  
}

instagram.addEventListener("click", () => {
    openLink(urlLink)
})