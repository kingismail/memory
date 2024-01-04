jkskfhkdjshfkh
]\

//ignore this file it includes test lines that are entirely not part of the main project itself


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


    
