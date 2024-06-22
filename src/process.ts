import { customImage, images } from "./loadImages";
import { color, propertiesSelected } from "./main";

function setLyrics(lyrics: string) {
  const ssbox = document.getElementById("ss-box")!;
  const elem = document.getElementById("lyricsbox")!;
  const songname = document.getElementById("songname")! as HTMLInputElement;
  const singername = document.getElementById("singername")! as HTMLInputElement;
  if (lyrics.length === 0) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Please Enter the lyrics to generate screenshot";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  if (lyrics.length < 8) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Lyrics too short";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  if (lyrics.length > 170) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Lyrics too long";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  if (singername.value.length === 0) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Mention singer name";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  if (songname.value.length === 0) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Mention song name";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  if (propertiesSelected.selected === null) {
    const placeholder = document.getElementById("placeholder")!;
    placeholder.innerHTML = "Choose an Image";
    placeholder.style.color = "red";
    placeholder.style.display = "block";
    ssbox.style.display = "none";
    return false;
  }
  const songss = document.getElementById("songss")!;
  const singerss = document.getElementById("singerss")!;
  singerss.innerHTML = singername.value;
  songss.innerHTML = songname.value;

  ssbox.style.background = color;
  const lines = lyrics.split("\n");
  elem.innerHTML = "";
  lines.forEach((line) => {
    const div = document.createElement("div");
    div.textContent = line;
    elem.appendChild(div);
  });

  console.log(color);

  const imageBox = document.getElementById("singerImage") as HTMLImageElement;
  if (
    propertiesSelected.selected !== null &&
    propertiesSelected.selected !== 1000
  ) {
    console.log("jere");
    console.log(imageBox, images[propertiesSelected.selected]);
    imageBox.src = images[propertiesSelected.selected];
  } else {
    if (customImage) {
      const reader = new FileReader();
      reader.onload = function (e) {
        // const selectedImage = document.createElement('img');
        imageBox.src = e.target!.result as string;
        // selectedImage.className = 'imageSinger'
      };

      reader.readAsDataURL(customImage);
    }
  }
  return true;
}

function processLyrics() {
  const textbox = document.getElementById("lyricsBox") as HTMLTextAreaElement;
  const lyrics = textbox.value;
  console.log(lyrics);
  const placeholder = document.getElementById("placeholder");
  const ssbox = document.getElementById("ss-box");
  if (placeholder && ssbox) {
    document.getElementById("downloadButton")!.style.display = "none";
    if (setLyrics(lyrics)) {
      placeholder.style.display = "none";
      ssbox.style.display = "block";
      document.getElementById("downloadButton")!.style.display = "block   ";
    }
  }
}

export function initalize() {
  document.getElementById("lessgo")?.addEventListener("click", processLyrics);
}
