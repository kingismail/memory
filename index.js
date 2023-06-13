let images = [1, 2, 3, 4, 5, 6 , 7, 8, 9, 1, 2, 3, 4, 5, 6 , 7, 8, 9];

// game variables

load_prompt_mobile = document.getElementById('loading_mobile');
play_button_mobile = document.getElementById('play_button_mobile');

let game_not_started = true;
let on_mobile_phone = false;


for (i = 1; i < 19; i++)
{
    let image_face = document.getElementById(`image${i}`);
    let random_num_picture = Math.floor(Math.random() * (images.length-0) + 0);
    image_face.style.backgroundImage = `url(image${images[random_num_picture]}.png)`;
    images.splice(random_num_picture,1);
}

function clearArray(){for(i = 0 ; i < 2 ; i ++ ){open_cards.pop()}}

function wait()
{
    document.getElementById(open_cards[0]).parentElement.classList.remove('rotate_card');
    document.getElementById(open_cards[1]).parentElement.classList.remove('rotate_card');
    clearArray();
};

function turnCards()
{
    const all_elements = document.getElementsByTagName('*');

    for(i = 0; i < all_elements.length; i++)
    {
        let curr_element = all_elements[i];

        if(curr_element.classList.contains('card')){
        curr_element.classList.add('rotate_card');}
    }
}

function rotate_logo_card(number)
{
    logo_card = document.getElementById(`image${number}_logo`);
    logo_card.parentElement.classList.add('rotate_card');
}

function return_logo_card_state(number)
{
    logo_card = document.getElementById(`image${number}_logo`);
    logo_card.parentElement.classList.remove('rotate_card');
}

play_button_mobile.style.display = 'none';

function returnCards()
{
    const all_elements = document.getElementsByTagName('*');

    for(i = 0; i < all_elements.length; i++)
    {
        let curr_element = all_elements[i];

        if(curr_element.classList.contains('card')){
        curr_element.classList.remove('rotate_card');}
    }
}

let open_cards = [];

const image_card = document.querySelector('.frame_container');

document.addEventListener('click', function(event){

    if(event.target.parentElement.classList.contains('card'))
    {
        if (open_cards.length < 2)
        {
            if (event.target.classList.contains('back_face'))
            {open_cards.push(event.target.nextElementSibling.id);}
            else{open_cards.push(event.target.nextElementSibling.id);}
            event.target.parentElement.classList.add('rotate_card');
        }
    }
    if(open_cards.length === 2)
    {
        id_image1 = window.getComputedStyle(document.getElementById(open_cards[0])).getPropertyValue('background-image');
        id_image2 = window.getComputedStyle(document.getElementById(open_cards[1])).getPropertyValue('background-image');

        if(id_image1 !== id_image2)
        {setTimeout(wait, 800);}
        else{clearArray();}
    }
});

document.addEventListener('DOMContentLoaded', function() {
    //turnCards();
    //setTimeout(returnCards, 3000);

    load_prompt_mobile = document.getElementById('loading_mobile');
    play_button_mobile = document.getElementById('play_button_mobile');

    for (let i = 1; i < 5; i++) {
        (function(index) {
          setTimeout(() => {
            return_logo_card_state(index);
            rotate_logo_card(index);
            if(index > 1 && index < 5) return_logo_card_state(index - 1);
            if (index === 4)
            { setTimeout(() => return_logo_card_state(4), 1500);
                load_prompt_mobile.style.display = 'none';
                play_button_mobile.style.display = '';
                play_button_mobile.classList.add('move_button');
            }
          }, index * 1500);
        })(i);
      }
  });

for (i = 1; i < 1; i++)
{
    let image_face = document.getElementById(`image${i}`);
    console.log(image_face.parentElement.parentElement);
}

//Code for the mobile phones

if (window.screen.width < 768) on_mobile_phone = true;







