
//раскрывающийся список навигации

let navHasChildren = document.querySelector(".nav-has-children");
let dropMenu = document.querySelector(".dropdown-menu")

navHasChildren.addEventListener("click", function(){
    dropMenu.classList.toggle("open");
});


//Маска проверки номера телефона 

$(document).ready(function () {
    $('.phone').mask('(380)99-999-99-99');
});

var loading = document.getElementById('loading');
var text = document.getElementById('text');
var btnHide = document.getElementById('btn_hide');

document.getElementById('form').addEventListener('submit', function(e){
e.preventDefault();

loading.style.display = 'block';
btnHide.style.display = 'none';
setTimeout(showText, 2000);
function showText() {
    loading.style.display = 'none';
    text.style.display ='block';
}
});

//открытие модального окна резервации
    let modalWindow = document.querySelector(".modal_window");
    let closeModal = document.querySelector(".close_modal");
    
    document.querySelectorAll(".open_modal").forEach(item => {
        item.addEventListener('click', function() {
            modalWindow.classList.add("open")});
    });

    closeModal.addEventListener("click", function(){
        modalWindow.classList.remove("open"); 
    });

//кастомизация выпадающего списка
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
        if ($this.children('option').eq(i).is(':selected')){
          $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
        }
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
      $list.find('li.is-selected').removeClass('is-selected');
      $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

//дата публикаций статьи раздела blog
let updatelocale = function() {
    let k1 = moment().format('LL');
    // document.querySelector('.ldate').innerHTML = k1;
    document.querySelectorAll(".ldate").forEach(item => {
        item.innerHTML = k1
});}
updatelocale();

// рааскрывающийся список меню

let menuBtn = document.querySelector(".menu-btn");
let menuList = document.querySelector(".menu-list")

menuBtn.addEventListener("click", function(){
    menuList.classList.toggle("open");
});
