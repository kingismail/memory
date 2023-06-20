//coded by Ismail--2023---copyright reserved

// game variables

load_prompt_mobile = document.getElementById("loading_mobile");
play_button_mobile = document.getElementById("play_button_mobile");
load_tiles = document.getElementById("game_logo");
main_screen_buttons = document.getElementById("main_screen_buttons");

let game_not_started = true,
  on_mobile_phone = false;

let images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//load each and every image onto every tile

function clearArray() {
  for (i = 0; i < 2; i++) {
    open_cards.pop();
  }
}

function wait() {
  document
    .getElementById(open_cards[0])
    .parentElement.classList.remove("rotate_card");
  document
    .getElementById(open_cards[1])
    .parentElement.classList.remove("rotate_card");
  clearArray();
}

function turnCards() {
  const all_elements = document.getElementsByTagName("*");

  for (i = 0; i < all_elements.length; i++) {
    let curr_element = all_elements[i];

    if (curr_element.classList.contains("card")) {
      curr_element.classList.add("rotate_card");
    }
  }
}

function rotate_logo_card(number) {
  logo_card = document.getElementById(`image${number}_logo`);
  logo_card.parentElement.classList.add("rotate_card");
}

function return_logo_card_state(number) {
  logo_card = document.getElementById(`image${number}_logo`);
  logo_card.parentElement.classList.remove("rotate_card");
}

//play_button_mobile.style.display = 'none';

function returnCards() {
  const all_elements = document.getElementsByTagName("*");

  for (i = 0; i < all_elements.length; i++) {
    let curr_element = all_elements[i];

    if (curr_element.classList.contains("card")) {
      curr_element.classList.remove("rotate_card");
    }
  }
}

function main_screen_transitions() {
  all_front_faces = document.querySelectorAll(".front_face_logo");
  frame_row = document.querySelectorAll(".frame_Row_logo");
  for (let i = 0; i <= 3; i++)
    all_front_faces[i].parentElement.parentElement.style.margin = "-1.5px";
  frame_row[1].style.marginTop = "-25px";
  console.log(frame_row);
  console.log(all_front_faces[1].parentElement.parentElement);
  all_front_faces[0].style.backgroundImage = "url(welcome_tile1.png)";
  all_front_faces[1].style.backgroundImage = "url(welcome_tile2.png)";
  all_front_faces[3].style.backgroundImage = "url(welcome_tile4.png)";

  setTimeout(() => {
    frame_row[0].style.position = "relative";
    document.getElementById("welcome_image").style.display = "block";
  }, 2000);

  //all_front_faces[0].parentElement.parentElement.style.margin = '-1px';
  //all_front_faces[1].parentElement.parentElement.style.margin = '0px';
}

let open_cards = [];

const image_card = document.querySelector(".frame_container");

document.addEventListener("click", function (event) {
  if (event.target.parentElement.classList.contains("card")) {
    if (open_cards.length < 2) {
      if (event.target.classList.contains("back_face")) {
        open_cards.push(event.target.nextElementSibling.id);
      } else {
        open_cards.push(event.target.nextElementSibling.id);
      }
      event.target.parentElement.classList.add("rotate_card");
    }
  }
  if (open_cards.length === 2) {
    id_image1 = window
      .getComputedStyle(document.getElementById(open_cards[0]))
      .getPropertyValue("background-image");
    id_image2 = window
      .getComputedStyle(document.getElementById(open_cards[1]))
      .getPropertyValue("background-image");

    if (id_image1 !== id_image2) {
      setTimeout(wait, 800);
    } else {
      clearArray();
    }
  }
});

function show_final_screen(){

    document.getElementById('completed').style.display = 'block';


}

document.addEventListener("DOMContentLoaded", function () {
  //turnCards();
  //setTimeout(returnCards, 3000);

  load_prompt_mobile = document.getElementById("loading_mobile");
  play_button_mobile = document.getElementById("play_button_mobile");

  for (let i = 1; i < 5; i++) {
    (function (index) {
      setTimeout(() => {
        return_logo_card_state(index);
        rotate_logo_card(index);
        if (index > 1 && index < 5) return_logo_card_state(index - 1);
        if (index === 4) {
          setTimeout(() => return_logo_card_state(4), 1500);
          load_prompt_mobile.style.display = "none";
          play_button_mobile.style.display = "";
          play_button_mobile.classList.add("move_button");
          load_tiles.style.transform = "translateY(-100px)";
          setTimeout(() => {
            main_screen_buttons.style.transform = "translateY(-100px)";
          }, 3000);

          setTimeout(() => {
            main_screen_transitions();
            for (let c = 0; c <= 3; c++)
              document
                .querySelectorAll(".card_logo")
                [c].classList.add("rotate_card");
          }, 2500);
        }
      }, index * 1500);
    })(i);
  }
});

for (i = 1; i < 1; i++) {
  let image_face = document.getElementById(`image${i}`);
  console.log(image_face.parentElement.parentElement);
}
//Code for the mobile phones
if (window.screen.width < 768) on_mobile_phone = true;

document.getElementById("help_close").addEventListener("click", function () {
  document.getElementById("help").style.display = "none";
});

document
  .getElementById("Help_button_mobile")
  .addEventListener("click", function () {
    document.getElementById("help").style.display = "block";
  });

document
  .getElementById("Credits_button_mobile")
  .addEventListener("click", function () {
    document.getElementById("credits").style.display = "block";
  });

document.getElementById("credits_close").addEventListener("click", function () {
  document.getElementById("credits").style.display = "none";
});



