let section = document.querySelector(".projects-container");
let menu = document.getElementById("humberger");
let container = document.querySelector(".about-nav-links");
let link = document.querySelector(".about-links");
let icon = document.getElementById("menu-icon");
let btn = document.getElementById("btn");

icon.addEventListener("click", ()=>{
    link.classList.toggle("links1");
    container.style.display="flex";
    link.style.display="flex";
    //link.classList.add("links1")
    if (link.classList.contains("links1")) {
        icon.src = "img/x.svg"; 
    } else {
        icon.src = "img/menu-svgrepo-com.svg";
        link.style.display="none";
    }
});

window.onscroll = function(){
    if(scrollY >=450)
    {
        btn.style.display ="block";
    }else{
        btn.style.display ="none";
    }
}
btn.onclick = function(){
    scroll({
        left:0,
        top: 0,
        behavior:"smooth"

    })
}

async function getMedia() {
    try {
        const response = await fetch("../json/media.json");

        if(!response.ok) {
            throw new Error("HTTP" + response.status);
        }
        const data = await response.json();
        return data;

    } catch(error) {
        console.log(error);
    }
}

async function displayProjects() {
    const data = await getMedia();
    data.projects.forEach(project => {
        const article = document.createElement('article');
        article.classList.add('project');

        article.innerHTML = `
            <picture class="container-image-project">
                <img src="${project.image}" alt="project img">
            </picture>
            <aside class="container-aside-project">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
                <p><strong>Tech Stack:</strong> ${project.techStack}</p>
                <nav class="chain-github">
                    <div class="chain">
                        <img src="img/link-chain.svg" alt="chain logo">
                        <a href="${project.live}">Live Preview</a>
                    </div>
                    <div class="github">
                        <img src="img/github-142-svgrepo-com.svg" alt="github logo">
                        <a href="${project.code}">View Code</a>
                    </div>
                </nav>
            </aside>
        `;
        section.appendChild(article);
        
    });
}

displayProjects();