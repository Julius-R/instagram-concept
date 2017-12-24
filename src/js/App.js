const allBtn = document.getElementById('all');
const imgBtn = document.getElementById('images');
const vidBtn = document.getElementById('videos');
const galleryArea = document.getElementById('gallery');
const images = document.querySelectorAll("#gallery img");
const vidoes = document.querySelectorAll("#gallery .vids");
const triple = document.getElementById('multi');
const double = document.getElementById('double');
const blue = "rgb(50, 99, 141)";
const showAll = function() {
  if (images.length > -1 || videos.length > -1) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "inline-block";
    }
    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "inline-block";
    }
  }
  if (imgBtn.style.color == blue || vidBtn.style.color == blue) {
    imgBtn.style.color = "#111";
    vidBtn.style.color = "#111";
    allBtn.style.color = blue;
  } else {
    allBtn.style.color = blue;
  }
}

const showImg = function() {
  if (images.length > -1) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "inline-block";
    }
    if (allBtn.style.color == blue || vidBtn.style.color == blue) {
      imgBtn.style.color = blue;
      vidBtn.style.color = "#111";
      allBtn.style.color = "#111";
    } else {
      imgBtn.style.color = blue;
    }
  } else {
    galleryArea.innerHTML = "There are no photos";
  }
}

const showVid = function() {

  if (videos.length > -1) {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (let i = 0; i < videos.length; i++) {
        videos[i].style.display = "inline-block";
    }
    if (imgBtn.style.color == blue || allBtn.style.color == blue) {
      imgBtn.style.color = "#111";
      vidBtn.style.color = blue;
      allBtn.style.color = "#111";
    } else {
      vidBtn.style.color = blue;
    }
  } else {
    alert("There are no vidoes to show")
  }
}

const doubleUp = function() {
  if(triple.style.color == blue){
    triple.style.color = "#111";
    double.style.color = blue;
  } else {
    double.style.color = blue;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = "45%";
  }
}

const tripleUp = function() {
  if(double.style.color == blue){
    double.style.color = "#111";
    triple.style.color = blue;
  } else {
    triple.style.color = blue;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].style.width = "30%";
  }
}

document.getElementById('all').addEventListener('click', showAll);
document.getElementById('images').addEventListener('click', showImg);
document.getElementById('videos').addEventListener('click', showVid);
document.getElementById('double').addEventListener('click', doubleUp);
document.getElementById('multi').addEventListener('click', tripleUp);
