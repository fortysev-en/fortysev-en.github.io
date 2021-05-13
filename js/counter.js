// counterAPI
// create new link from https://api.countapi.xyz/create?namespace=fortysev-en.github.io&key={pagename}&value=0
// check if it is working or not https://api.countapi.xyz/get/fortysev-en.github.io/{pagename}/?amount=1
// update the counter https://api.countapi.xyz/update/fortysev-en.github.io/{pagename}/?amount=1
// https://www.youtube.com/watch?v=R8GS-8nlekY

const countPortfolio = document.getElementById('counter-portfolio');
const countKeylogger = document.getElementById('counter-keylogger');
const countAbout = document.getElementById('counter-about');
const countCompleteBlog = document.getElementById('counter-completeblog');


function updatePortfolioCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/portfolio/?amount=1')
	.then(res => res.json())
	.then(res => {
		countPortfolio.innerHTML = res.value;
	})
}

function updateKeyloggerCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/keylogger/?amount=1')
	.then(res => res.json())
	.then(res => {
		countKeylogger.innerHTML = res.value;
	})
}

function updateAboutCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/about/?amount=1')
	.then(res => res.json())
	.then(res => {
		countAbout.innerHTML = res.value;
	})
}

function updateCompleteBlogCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/about/?amount=1')
	.then(res => res.json())
	.then(res => {
		countCompleteBlog.innerHTML = res.value;
	})
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
