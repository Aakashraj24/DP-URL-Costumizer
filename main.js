let pName = prompt("Please Enter the Movie Name :- ")
let pURL = prompt("Please Past only Dangal Play or Captain Play Links")

const dangalPlayURL = (pName,pURL)=>{
    //===================  Let year ===================
    let yConener = new Date();

    // =============== Movie Name Handling  ==========
    const year = yConener.getFullYear();
    const movieName = `${pName} - ${year}`
    const quility = ["360", "480", "720"]
    const lastName = " - Dangal Play - WEB DL - TRM Bhojpuri.mp4";



    // =============== URL Handling ===================
    const firstURL = "https://dangaplay.akamaized.net/transcoded_videos/";
    const codeURL = pURL.slice(50,-23)
    const lastURL = "/media-1/video.m3u8";

    const main = document.querySelector(".main");

    for (let i = 0; i < quility.length; i++) {
        const url = `${firstURL}${codeURL}/${quility[i]}${lastURL}`
        const fileName = `${movieName} - ${quility[i]}p ${lastName}`
        const text = `${url} | ${fileName}`;
        console.log(text)
        
        main.innerHTML += `\n\`${text}\`\n`
        
    }
}

dangalPlayURL(pName,pURL)

function copyText(){
    // 1. `<div>` ke andar ka **poora text** le lo
    let text = document.getElementById("urlText").innerText;
    
    // 2. Ek **temporary textarea** create karo
    let textarea = document.createElement("textarea");
    textarea.value = text;

    // 3. Textarea ko body me add karo (hidden)
    document.body.appendChild(textarea);

    // 4. Textarea ka text select karke copy karo
    textarea.select();
    document.execCommand("copy");

    // 5. Temporary textarea ko hata do
    document.body.removeChild(textarea);

    // 6. Alert ya console me message show karo
    alert("Text vcopied successfully!");
}

let copyButton = document.querySelector(".copy")

copyButton.addEventListener("click",copyText)