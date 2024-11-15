let section = document.getElementById("about");

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

const main = document.createElement("main");
main.classList.add("about-main");
const h2 = document.createElement("h2");
h2.textContent = "About Me";
main.appendChild(h2);
async function displayAbout() {
    const data = await getMedia();
    const article = document.createElement("article");
    article.classList.add("about-me");
    const p = document.createElement("p")
    p.textContent = data.about;
    article.appendChild(p);
    main.appendChild(article);
    section.appendChild(main);
    const sec = document.createElement("section");
    sec.classList.add("section");
    const h22= document.createElement("h2");
    h22.textContent="Work Experience";
    sec.appendChild(h22);
    section.appendChild(sec);
     
};
displayAbout();
 



async function displayWorks() {
    const data = await getMedia();
    data.works.forEach(work => {
        const div = document.createElement("div")
        div.classList.add("job");
        const div1 =document.createElement("div");
        div1.classList.add("post"); 
        const p = document.createElement("p");
        p.classList.add("post-name");
        p.textContent = work.title;
        div1.appendChild(p);
        const span = document.createElement("span");
        span.classList.add("type");
        span.textContent = work.Type;
        div1.appendChild(span);
        div.appendChild(div1);
        const div2 = document.createElement("div");
        div2.classList.add("company-date");
        const div3 = document.createElement("div");
        div3.classList.add("company");
        const p1 = document.createElement("p");
        p1.classList.add("company-name");
        /* const i = document.createElement("i");
        i.className= "fas fa-building";
        
        //i.className="fas fa-building";
        p1.appendChild(i); */
        p1.innerHTML = `<p class="company-name"><i class="fas fa-building"></i> ${work.company}</p>`
        //p1.textContent = work.company;
        div3.appendChild(p1);
        const p2 = document.createElement("p");
        p2.classList.add("company-place");
        /* const i1 = document.createElement("i");
        //i1.classList.add("fas fa-map-marker-alt");
        p2.appendChild(i1);
        p2.textContent = work.land; */
        p2.innerHTML = `<p class="company-place"><i class="fas fa-map-marker-alt"></i> ${work.land}</p>`;
        div3.appendChild(p2);
        div2.appendChild(div3)
        const p3 = document.createElement("p");
        p3.classList.add("date");
        p3.textContent = work.date;
        div2.appendChild(p3);
        div.appendChild(div2);
        const hr = document.createElement("hr");
        section.appendChild(div);  
        section.appendChild(hr);
    });
};

async function displayEducations() {
    const data = await getMedia();

    const sec = document.createElement("section");
    sec.classList.add("section");
    const h22= document.createElement("h2");
    h22.textContent="Education";
    sec.appendChild(h22);
    section.appendChild(sec);

    data.educations.forEach(education => {
        const div = document.createElement("div")
        div.classList.add("job");
        const div1 =document.createElement("div");
        div1.classList.add("post"); 
        const p = document.createElement("p");
        p.classList.add("post-name");
        p.textContent = education.title;
        div1.appendChild(p);
        const span = document.createElement("span");
        span.classList.add("type");
        span.textContent = education.Type;
        div1.appendChild(span);
        div.appendChild(div1);
        const div2 = document.createElement("div");
        div2.classList.add("company-date");
        const div3 = document.createElement("div");
        div3.classList.add("company");
        const p1 = document.createElement("p");
        p1.classList.add("company-name");
        /* const i = document.createElement("i");
        i.className= "fas fa-building";
        
        //i.className="fas fa-building";
        p1.appendChild(i);
        p1.textContent = education.institution; */
        p1.innerHTML = `<p class="company-name"><i class="fas fa-building"></i> ${education.institution}</p>`;
        div3.appendChild(p1);
        const p2 = document.createElement("p");
        p2.classList.add("company-place");
        /* const i1 = document.createElement("i");
        //i1.classList.add("fas fa-map-marker-alt");
        p2.appendChild(i1);
        p2.textContent = education.land; */
        p2.innerHTML = `<p class="company-place"><i class="fas fa-map-marker-alt"></i> ${education.land}</p>`;
        div3.appendChild(p2);
        div2.appendChild(div3)
        const p3 = document.createElement("p");
        p3.classList.add("date");
        p3.textContent = education.date;
        div2.appendChild(p3);
        div.appendChild(div2);
        const hr = document.createElement("hr");
        section.appendChild(div);  
        section.appendChild(hr);
    });
};

displayWorks();
displayEducations();