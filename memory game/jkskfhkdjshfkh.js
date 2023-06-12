jkskfhkdjshfkh

 console.log(open_cards);
        console.log(event.target)

        let first_element, second_element;
        let both_elements = [];

        let target_background1 = open_cards[0], target_background2 = open_cards[1];
        const all_elements = document.getElementsByTagName('*');

        for(i = 0 ; i < all_elements.length; i++)
        {
            let current_div = all_elements[i];

            const background = window.getComputedStyle(current_div).getPropertyValue('background-image');

            if (background.includes(target_background1))
            {
                const element_id = current_div.id;
                first_element = element_id;
            }

            if (background.includes(target_background2)) //&& !(current_div.id.includes(first_element))
            {
                const element_id = current_div.id;
                second_element = element_id;
            }
            else{}
        } 

        if (open_cards[0] === open_cards[1] && open_cards.length == 2)
        {
            
        }

        else{

            if (open_cards.length > 1){
            console.log(first_element);
            console.log(second_element);
        
            //document.getElementById(first_element).classList.toggle('rotate_card');
            document.getElementById(second_element).parentElement.classList.remove('rotate_card');
            document.getElementById(second_element).parentElement.style.transform = 'rotateY(0deg)';
            document.getElementById(first_element).parentElement.classList.remove('rotate_card');
            document.getElementById(first_element).previousElementSibling.style.backgroundColor = 'yellow';

            points.innerText += 1;
            //open_cards.splice(0, 1);
            //open_cards.splice(1, 1);
            console.log(first_element);
            console.log(second_element);
            //console.log('tello');
            //console.log(first_element);
            //console.log(second_element);
            }
        }
    }


    
// notes

// we need to have a loading screen that will show the user the countdown before the game starts and how many seconds the pictures will be shown for
// and then i guess i will have to code all the pop ups that we will need to have and use on the game 
// and also the difficulty screen that will mean chosing the number of seconds that  the pictures will be shown for
// then we also need to have a screen that shows how much brain power a user has according to the amount of time takem 
// then we need to code all the pop ups
// then we need to have a pause button that will pause the time so that the time does not go on when the person is doing something else it will help save the time 
// the other thing we need is to have the main screen of the game so that the user can see what game they are getting into 
// i then need to design the user interface for mobile phones whhich means that i have to scale everything down whcich wil be fun to do and not as StreamPipeOptions4
// then all i need to do is to have another statistics page ... to do that i will have to find a way to make users have their information saved incase they close their window 
// then we have to make sure that we make a loading then we would have to look at other similar games to see what ideas we can take and incorporate to make the site as 
// beautiful and as user friendly as we can cause at the moment all we have is a very basic front end which does nothing for us 
// and by the way the main focus of this project was not to have a good front end but it was to challenge myself to have the best problem solving skills and the best 
// knowledge that i can have when it comes to javascript
// and i am now proud to add it to my arsenal... because i can now code confidently using javascript
// which means that i can use puython c++ javascript  html css and all i need to learn now is to make sure i learn a bit of php because i want to
// to the backend side of webdevelopment and not the front end site 
// i can also make sure that i get into mobile app development using flutter , java and other languages that i can use for the apps 
// i shall be a man that is able to make many things using the knowledge that he has to make sure that he can 
// the next thing is to then have my own company that will deal with technology obviously because i need to make more money when i can no longer walk and do coding i will then 
// have to go to the bussiness side of all the things to make money and become rich i do not want to live a very basic life