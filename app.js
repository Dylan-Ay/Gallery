// Gallery
let buttonShowAll = document.getElementById('show-all');
let buttonCars = document.getElementById('cars');
let buttonNature = document.getElementById('nature');
let buttonPlanes = document.getElementById('plane');
let allButtons = document.querySelectorAll('.allbutons');
let rowImage = document.getElementById('row-image');
let carsColumn = document.getElementById("column-voiture");
let natureColumn = document.getElementById("column-nature");
let planesColumn = document.getElementById("column-avion");

// Fonction pour ajouter la classe active au clique pour chaque bouton
function active(){
    buttonShowAll.classList.add("active");
    allButtons.forEach(button => {
        button.addEventListener('click', function(){
            var current = document.getElementsByClassName("active");
            if (current.length > 0){
                current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
        });
    });
};
active();

// Fonction pour afficher uniquement les voitures
function showCars(){
    natureColumn.style.display = "none";
    planesColumn.style.display = "none";
    carsColumn.style.display = "block";
};

buttonCars.addEventListener("click", showCars);

// Fonction pour afficher uniquement les avions
function showPlanes(){
    natureColumn.style.display = "none";
    carsColumn.style.display = "none";
    planesColumn.style.display = "block";
};

buttonPlanes.addEventListener("click", showPlanes);

// Fonction pour afficher uniquement les images de nature
function showNature(){
    carsColumn.style.display = "none";
    planesColumn.style.display = "none";
    natureColumn.style.display = "block";
};

buttonNature.addEventListener("click", showNature);

// Fonction pour afficher toutes les images
function showAll(){
    carsColumn.style.display = "block";
    planesColumn.style.display = "block";
    natureColumn.style.display = "block";
};

buttonShowAll.addEventListener("click", showAll);

// MODAL
let modal = document.getElementById('my-modal');
let modalImg = document.getElementById("modal-image");
let allImages = document.querySelectorAll('.avion, .voiture, .nature');
let allCarImages = document.querySelectorAll('.voiture');
let allPlanesImages = document.querySelectorAll('.avion');
let allNatureImages = document.querySelectorAll('.nature');
let close = document.getElementById('close');

function displayModal(){
    modal.style.display = "block";
    modalImg.src = this.src;
};

allImages.forEach(image => {
    image.addEventListener('click', displayModal);
});

function closeModal(){
    modal.style.display = "none";
}

close.addEventListener("click", closeModal);

// SLIDER
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let current = 0;

// Afficher photo précédente

function slideLeft() {
    if (buttonCars.classList.contains('active')){
        modalImg.src = allCarImages[current - 1].src;
        current--;
    }else if(buttonNature.classList.contains('active')){
        modalImg.src = allNatureImages[current - 1].src;
        current--;
    }else if(buttonPlanes.classList.contains('active')){
        modalImg.src = allPlanesImages[current - 1].src;
        current--;
    }else if(buttonShowAll.classList.contains('active')){
        modalImg.src = allImages[current - 1].src;
        current--;
    }
}

// Afficher photo suivante
function slideRight() {
    if (buttonCars.classList.contains('active')){
        modalImg.src = allCarImages[current + 1].src;
        current++;
    }else if(buttonNature.classList.contains('active')){
        modalImg.src = allNatureImages[current + 1].src;
        current++;
    }else if(buttonPlanes.classList.contains('active')){
        modalImg.src = allPlanesImages[current + 1].src;
        current++;
    }else if(buttonShowAll.classList.contains('active')){
        modalImg.src = allImages[current + 1].src;
        current++;
    }
}

// Clique sur la flèche de gauche
prev.addEventListener("click", function () {
    if (buttonCars.classList.contains('active')){
        if (current === 0) {
        current = allCarImages.length;
        }
        slideLeft();
    }else if (buttonNature.classList.contains('active')){
        if (current === 0) {
            current = allNatureImages.length;
            }
        slideLeft();
    }else if (buttonPlanes.classList.contains('active')){
        if (current === 0) {
            current = allPlanesImages.length;
            }
        slideLeft();
    }else if (buttonShowAll.classList.contains('active')){
        if (current === 0) {
            current = allImages.length;
            }
        slideLeft();
    }
});

// Clique sur la flèche de droite
next.addEventListener("click", function () {
    if (buttonCars.classList.contains('active')){
        if (current === allCarImages.length - 1) {
            current = -1;
        }
        slideRight();
    }else if (buttonNature.classList.contains('active')){
        if (current === allNatureImages.length - 1) {
            current = -1;
        }
        slideRight();
    }else if (buttonPlanes.classList.contains('active')){
        if (current === allPlanesImages.length - 1) {
            current = -1;
        }
        slideRight();
    }else if (buttonShowAll.classList.contains('active')){
        if (current === allImages.length - 1) {
            current = -1;
        }
        slideRight();
    }
});

