
// this code is for the functionality of the mobile phones

//game variables

let images = [1, 2, 3, 4, 5, 6 , 7, 8, 1, 2, 3, 4, 5, 6 , 7, 8];
attempts = document.querySelector('.attempts');

let paused = false,
game_attempts = 0,
seconds = 0,
minutes = 0;


attempts.innerText = 'Attempts: 0';

function update_attempts()
{
    game_attempts += 1;
    attempts.innerText = `Attempts: ${game_attempts}`;
}


for (i = 1; i < 17; i++)
{
    let image_face = document.getElementById(`image${i}`);
    let random_num_picture = Math.floor(Math.random() * (images.length-0) + 0);
    image_face.style.backgroundImage = `url(image${images[random_num_picture]}.png)`;
    images.splice(random_num_picture,1);
}

function incorrect()
{
    document.getElementById(open_cards[0]).parentElement.classList.remove('rotate_card');
    document.getElementById(open_cards[1]).parentElement.classList.remove('rotate_card');
    clearArray();
    update_attempts();
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

function clearArray() {for(i = 0 ; i < 2 ; i ++ ) open_cards.pop();}


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
        {setTimeout(incorrect, 800);}
        else{clearArray();}
    }
});