

/**
 * ! my Global variables
 * These are the variables that i'll need to use all over the project
 *  
 */
const sections = Array.from(document.querySelectorAll('section'));
const numOfSections = sections.length;



// todo Helper function creating navbar
function createMyNav(){
 for (let section of sections){
   const navListItem = document.createElement('li');
   navListItem.innerHTML = `<a class ="menu__link" href = "#${section.id}">${section.id}</a>`;
  

  //  append the items inside the navbar
  document.querySelector("#navbar__list").appendChild(navListItem);
 }
}
createMyNav();












/**SET ACTIVE STATE
 * ? desctiption==> when I scroll and get into a certain section in the correct positoin to view, The class of activation will be added.But when I get away from this section to another section the activation class will be removed from the old section and added to the new section

 * functions[removeactivation, addactivation, makeActivation]
 * 
 *  */

const makeActive = ()=>{
  sections.forEach(section=>{
    // Getting [position, size] of section
  const offSet = Math.round(section.getBoundingClientRect().top);

   

  
    if(offSet < 120 && offSet >= -120){
      section.classList.add('your-active-class');
    }else{
      section.classList.remove('your-active-class');
    }

})};


window.addEventListener('scroll', makeActive)