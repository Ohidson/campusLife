const menu_icon = document.getElementById("menu_icon");
const menu_bar = document.getElementById("menu_bar");
const close_icon = document.getElementById("close_icon");

menu_icon.addEventListener('click', function(){
  menu_bar.style.right = "0px"
})

close_icon.addEventListener('click', function(){
  menu_bar.style.right = "-250px"
})