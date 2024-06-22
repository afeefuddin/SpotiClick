import { propertiesSelected } from "./main"

export const images = [
    'krsna.jpeg',
    '1D.jpeg',
    'arijit.jpeg',
    'drake.jpeg',
    'ta.jpeg',
    'seedhemaut.jpeg',
    'ts.jpeg',
    'generic1.png',
    'generic2.png',
    'generic3.png',
    'generic4.png',
]
export let customImage: any;

function oldOutlineReset(){
    const oldSelcted = propertiesSelected.selected
    if(oldSelcted !== null){
        const oldElem = document.getElementById(oldSelcted?.toString()!)!
        oldElem.style.outline = "none"
    }
}

function handleClick(elem: HTMLElement){
    oldOutlineReset()
    propertiesSelected.selected = Number.parseInt(elem.id,10)
    const curElem = document.getElementById(elem.id)!
    curElem.style.outline = "2px solid white"
    
}

function addCustomImage(event: any){
    const file = event.target.files[0];
    const ImageContainer = document.getElementById('1000')!
    const selectLabel = document.getElementById('addSingerButtonLabel')!
    if(file){
        const reader = new FileReader()
        reader.onload = function(e) {
            const selectedImage = document.createElement('img');
            selectedImage.src = e.target!.result as string;
            selectedImage.className = 'imageSinger'
            // ImageContainer.removeChild(selectLabel)
            ImageContainer.style.position ="relative"
            selectLabel.innerHTML= ""
            selectLabel.appendChild(selectedImage)
            // propertiesSelected.selected = null
            // ImageContainer.appendChild(selectedImage)
        };

        customImage = file;
        reader.readAsDataURL(file);
    }
}

function setupAddImageButton(div: HTMLElement){
    const buttonDiv = document.createElement('div')
    buttonDiv.id = '1000'
    const buttonToAddImageLabel = document.createElement('label')
    buttonToAddImageLabel.htmlFor =  'customfile' 
    buttonToAddImageLabel.className = "addSingerButton"
    buttonToAddImageLabel.id = "addSingerButtonLabel"

    buttonToAddImageLabel.innerHTML ="+"
    const buttonToAddImage = document.createElement('input')
    buttonToAddImage.type = 'file'
    buttonToAddImage.accept = 'image/*'
    buttonToAddImage.placeholder = ""
    buttonToAddImage.className = "customfile"
    buttonToAddImage.id = "customfile"
    
    buttonToAddImage.addEventListener('change',addCustomImage)
    buttonDiv.addEventListener('click',function(){
        const elem = this
        handleClick(elem)
    })
    buttonDiv.appendChild(buttonToAddImageLabel)
    buttonDiv.appendChild(buttonToAddImage)
    div.appendChild(buttonDiv)
}

export function initalize(){
    const div = document.getElementById('images')!
    images.forEach((img,idx)=>{
        const elem = document.createElement('div')
        const imgelem = document.createElement('img')
        imgelem.className = 'imageSinger'
        imgelem.src = img;
        elem.style.borderRadius = "5px"
        elem.appendChild(imgelem)
        elem.id  = (idx).toString()
        elem.addEventListener('click',function(){
            handleClick(this)
        })
        div.appendChild(elem)
    })
    setupAddImageButton(div)    

}