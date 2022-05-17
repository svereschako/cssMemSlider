const data = [
	{
		url: "https://images.unsplash.com/photo-1542261777448-23d2a287091c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
		text: "Picture 1"
	},
	{
		url: "https://images.unsplash.com/photo-1542241647-9cbbada2b309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
		text: "Picture 2"
	},
	{
		url: "https://images.unsplash.com/photo-1542137722061-efd1cbdf156c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
		text: "Picture 3"
	},
	{
		url: "https://images.unsplash.com/photo-1414438992182-69e404046f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80",
		text: "Picture 4"
	}
];

const slides = document.querySelector(".carousel_slides");
const slidesArr = document.querySelectorAll(".carousel_slide");
const buttons = document.querySelectorAll(".btn");
const buttonsContainer = document.querySelector(".carousel_indicators");
const txt = document.querySelector(".slide_text");

txt.innerText = data[0].text;
buttons[0].children[0].children[0].classList.add("carousel_indicator_active");

slidesArr.forEach(function(slide,ind,arr) {
	slide.style.backgroundImage = "url(" + data[ind].url +")";	
});

buttons.forEach(function(button,ind,arr){	
	button.onclick = function () {
		goToSlide(ind);
		changeText(ind);	
		console.log("click" + ind);
		return false;
	};
});


function goToSlide(index) {
	slides.style.transform = `translateX(${-index*slidesArr[0].offsetWidth}px)`;	
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 30);
}

function changeText(index) {	
	txt.innerText = data[index].text;
	unfade(txt);
}

function changeClass(e) {	
	if(e.target.classList.contains("btn")){
		buttons.forEach(el => el.children[0].children[0].classList.remove("carousel_indicator_active"));
		e.target.children[0].children[0].classList.add("carousel_indicator_active");
	}else if(e.target.classList.contains("carousel_indicator")){
		buttons.forEach(el => el.children[0].children[0].classList.remove("carousel_indicator_active"));
		e.target.classList.add("carousel_indicator_active");
	}
}

buttonsContainer.addEventListener("click", changeClass);
