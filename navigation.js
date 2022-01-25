


function toggleMenu (menu){
  console.log("change");
    let listClass = document.querySelector("nav ul").classList;
    if (listClass.contains("active")) {
      document.querySelector("nav ul").innerHTML = "";
      document.querySelector("nav ul").classList.toggle("nav-list");
    } else {
      document.querySelector("nav ul").innerHTML = menu;
      document.querySelector("nav ul").classList.toggle("nav-list");
    }
    document.querySelector("nav ul").classList.toggle("active");
    
};

