let imgs = ['Updated_Homepage_book.jpeg'];

let rand = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

let imgPath = '/img/front/desktop/desktop.jpg';
let p = document.querySelector(".page-content");
p.style.background = "url(" + imgPath + ") no-repeat center center fixed";
p.style.backgroundSize = "cover";

# can use </script> tags to implement 
