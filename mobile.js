
//game variables

let images = [1, 2, 3, 4, 5, 6 , 7, 8, 1, 2, 3, 4, 5, 6 , 7, 8];
attempts = document.querySelector('.attempts');
pause_button = document.getElementById('pause');
play_button_mobile = document.getElementById('play_button_mobile');
restart_button = document.getElementById('restart');

let paused = false,
started = false,
game_attempts = 0,
game_seconds = 0,
game_minutes = 0,
success = 0;

attempts.innerText = 'Tries: 0';

function update_attempts()
{
    game_attempts += 1;
    attempts.innerText = `Tries: ${game_attempts}`;
}

function update_Time()
{
    if (!paused && started){
    document.querySelector('.time').innerText = `Time: ${(game_minutes < 9) ? "0" : ""}${game_minutes}:${(game_seconds < 9) ? "0" : ""}${game_seconds += 1}`;
    game_seconds = (game_seconds < 60) ? game_seconds : game_minutes++;}

}

function load_images(){
for (let i = 1; i < 17; i++)
{
    let image_face = document.getElementById(`image${i}`);
    let random_num_picture = Math.floor(Math.random() * (images.length-0) + 0);
    image_face.style.backgroundImage = `url(game_images\/image${images[random_num_picture]}.webp)`;
    images.splice(random_num_picture,1);
}
}

load_images();

function restart_game()
{

    images = [1, 2, 3, 4, 5, 6 , 7, 8, 1, 2, 3, 4, 5, 6 , 7, 8];

    game_attempts = 0;
    attempts.innerText = `Tries: ${game_attempts}`;
    game_minutes = 0;
    game_seconds = 0;
    document.querySelector('.time').innerText = `Time: ${(game_minutes < 9) ? "0" : ""}${game_minutes}:${(game_seconds < 9) ? "0" : ""}${game_seconds}`;
    game_seconds = (game_seconds < 60) ? game_seconds : game_minutes++;

    load_images();
    success = 0;

    const all_elements = document.getElementsByTagName('*');

    for(i = 0; i < all_elements.length; i++)
    {
        let curr_element = all_elements[i];

        if(curr_element.classList.contains('card')){ if (curr_element.classList.contains('rotate_card')) curr_element.classList.remove('rotate_card');}
    }
}


function incorrect()
{
    for (let i = 0; i <= 1 ; i++) document.getElementById(open_cards[i]).parentElement.classList.remove('rotate_card');
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
        else{
            update_attempts();
            clearArray();
            success += 1;
            
        }
    }
});

pause_button.addEventListener('click', function(){paused = true;
    const curr_time = game_seconds;
    document.getElementById('paused').style.display = 'block';
    document.querySelector('.blured_background').style.display = '';
});
setInterval(() => update_Time(), 1000);


window.addEventListener('DOMContentLoaded', function(){
    //turnCards();
    //setTimeout(returnCards, 3000);
})



document.getElementById('help_close').addEventListener('click', function(){

    document.getElementById('help').style.display = 'none';
    document.querySelector('.blured_background').style.display = 'none';
    started = true;
});

document.getElementById('resume').addEventListener('click', function(){

    document.getElementById('paused').style.display = 'none';
    document.querySelector('.blured_background').style.display = 'none';
    paused = false;
});

document.getElementById('restart_button').addEventListener('click', function(){
    document.getElementById('restart').style.display = 'block';
    document.querySelector('.blured_background').style.display = '';
});


document.getElementById('restart_yes').addEventListener('click', function(){
    restart_game();
    document.getElementById('restart').style.display = 'none';
    document.querySelector('.blured_background').style.display = 'none';

});
document.getElementById('restart_no').addEventListener('click', function () {

    document.getElementById('restart').style.display = 'none';
    document.querySelector('.blured_background').style.display = 'none';

});

if (success === 8) setInterval(() => {
    console.log('victory')
}, 2000);


// 2023 Ismail developments, all rights reserved