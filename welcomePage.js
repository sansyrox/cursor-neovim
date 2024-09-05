const neovim = `
  ███▄    █ ▓█████  ▒█████   ██▒   █▓ ██▓ ███▄ ▄███▓ 
  ██ ▀█   █ ▓█   ▀ ▒██▒  ██▒▓██░   █▒▓██▒▓██▒▀█▀ ██▒ 
  ▓██  ▀█ ██▒▒███   ▒██░  ██▒ ▓██  █▒░▒██▒▓██    ▓██░ 
  ▓██▒  ▐▌██▒▒▓█  ▄ ▒██   ██░  ▒██ █░░░██░▒██    ▒██  
  ▒██░   ▓██░░▒████▒░ ████▓▒░   ▒▀█░  ░██░▒██▒   ░██▒ 
  ░ ▒░   ▒ ▒ ░░ ▒░ ░░ ▒░▒░▒░    ░ ▐░  ░▓  ░ ▒░   ░  ░ 
  ░ ░░   ░ ▒░ ░ ░  ░  ░ ▒ ▒░    ░ ░░   ▒ ░░  ░      ░ 
    ░   ░ ░    ░   ░ ░ ░ ▒       ░░   ▒ ░░      ░    
          ░    ░  ░    ░ ░        ░   ░         ░    
                                 ░                   
`;


const vim = `
                    .                    
    ##############..... ##############   
    ##############......##############   
      ##########..........##########     
      ##########........##########       
      ##########.......##########        
      ##########.....##########..        
      ##########....##########.....      
    ..##########..##########.........    
  ....##########.#########.............  
    ..################JJJ............    
      ################.............      
      ##############.JJJ.JJJJJJJJJJ      
      ############...JJ...JJ..JJ  JJ     
      ##########....JJ...JJ..JJ  JJ      
      ########......JJJ..JJJ JJJ JJJ     
      ######    .........                
                  .....                  
                    .`;

const macsimus = `
          __  __                _                     
         |  \\/  |              (_)                    
         | \\  / | __ _  ___ ___ _ _ __ ___  _   _ ___ 
         | |\\/| |/ _\` |/ __/ __| | '_ \` _ \\| | | / __|
         | |  | | (_| | (__\\__ \\ | | | | | | |_| \\__ \\
         |_|  |_|\\__,_|\\___|___/_|_| |_| |_|\\__,_|___/
                              By sansyrox a.k.a TLS(The Leader Supreme)
`;

const logoList = [  neovim, macsimus,  vim ];
const randomLogo = logoList[Math.floor(Math.random() * logoList.length)];                
const highlightedLogo = randomLogo === vim 
  ? randomLogo.replace(/J/g,'#').replace(/[#J]/g, '<span style="color: limegreen;">$&</span>')
  : randomLogo == neovim ? randomLogo.replace(/[█]/g, '<span style="color: limegreen;">$&</span>')
  : randomLogo.replace(/./g, '<span style="color: limegreen;">$&</span>') 
  
// inside the editorCursorMainDiv, find the first cursor-button and add a div before it.
const editorCursorMainDiv = document.querySelector('.editorCursorMainDiv');
const firstCursorButton = editorCursorMainDiv.querySelectorAll('.cursor-button')[0];
// get the first cursor-button's parent div
const firstCursorButtonParentDiv = firstCursorButton.parentElement;

const newDiv = document.createElement('div');
newDiv.innerHTML = `<pre>${highlightedLogo}</pre>`;

// add as the first child of the firstCursorButtonParentDiv
firstCursorButtonParentDiv.insertBefore(newDiv, firstCursorButton);
