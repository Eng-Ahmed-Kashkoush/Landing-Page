const sections= document.querySelectorAll("section");

const secArr = Array.prototype.slice.call(sections);

function navItems(){
  const listItem = document.createElement('li');
  const  link = document.createElement('a');
  link.classList.add('menu__link');


  sectionnumber()
  link.innerText = `${document.querySelector('section').querySelector('h2').innerText}`;

  listItem.appendChild(link);
  document.querySelector('#navbar__list').appendChild(listItem)
  
}
navItems(); 




  // add new section button



  const addButton  = document.createElement('a');
  addButton.setAttribute('id', 'newSection');
  addButton.innerText = '+ new section';
  
  
  document.querySelector('h1').insertAdjacentElement('afterend', addButton);
  
  
  
  
  addButton.addEventListener('click',function(e){
   
    newss() ; 
    
  });
  function newss(){
    const newSection = document.createElement('section');
  
    newSection.innerHTML = `<div class="landing__container">
    <h2></h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
      fermentum metus faucibus lectus pharetra dapibus. Suspendisse
      potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget
      lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed
      convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla
      eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam
      nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis
      lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a
      tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus
      vitae elit. Integer nec libero venenatis libero ultricies molestie
      semper in tellus. Sed congue et odio sed euismod.
    </p>
    
    <p>
      Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar
      gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam.
      Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum
      consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget
      elementum tortor mollis non.
    </p>
    </div>`;
    document.querySelector('main').insertAdjacentElement('beforeend', newSection);
    secArr.push(newSection);
   
    sectionnumber();
    
  }
  function sectionnumber(){
    let secNum = 1
    let sectionNumber= secArr.forEach(function(section, i){
      secNum = i+1;
      section.setAttribute('id',`section${secNum}`);
      section.setAttribute('data-nav', `Section ${secNum}`)
     
      
      
      const heading = section.querySelector('h2');
      heading.innerText = `Section ${secNum}`
      
    });
    }








 

// Create a section number dinamically

