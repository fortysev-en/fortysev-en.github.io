// counterAPI
// create new link from https://api.countapi.xyz/create?namespace=fortysev-en.github.io&key={pagename}&value=0
// check if it is working or not https://api.countapi.xyz/get/fortysev-en.github.io/{pagename}/?amount=1
// update the counter https://api.countapi.xyz/update/fortysev-en.github.io/{pagename}/?amount=1
// https://www.youtube.com/watch?v=R8GS-8nlekY

const countPortfolio = document.getElementById('counter-portfolio');
const countAbout = document.getElementById('counter-about');
const countCompleteBlog = document.getElementById('counter-completeblog');
const countDonate = document.getElementById('counter-donate');


const countKeylogger = document.getElementById('counter-keylogger');
const countBrowserPasswordExtractor = document.getElementById('counter-browser-password');
const countAntiscan = document.getElementById('counter-antiscan');
const countAwSnap = document.getElementById('counter-awsnap')
const countZipping = document.getElementById('counter-zipping')


function updatePortfolioCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/portfolio/?amount=1')
	.then(res => res.json())
	.then(res => {
		countPortfolio.innerHTML = res.value;
	})
}

function updateAboutCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/about/?amount=1')
	.then(res => res.json())
	.then(res => {
		countAbout.innerHTML = res.value;
	})
}

function updateContactCount(){
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/contactMe/?amount=1')
	.then(res => res.json())
	.then(res => {
		countAbout.innerHTML = res.value;
	})
}

function updateCompleteBlogCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/completeBlog/?amount=1')
	.then(res => res.json())
	.then(res => {
		countCompleteBlog.innerHTML = res.value;
	})
}

function updateAwSnapCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/AwSnap/?amount=1')
	.then(res => res.json())
	.then(res => {
		countAwSnap.innerHTML = res.value;
	})
}

//================================ Blogs =============================================

function updateKeyloggerCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/keylogger/?amount=1')
	.then(res => res.json())
	.then(res => {
		countKeylogger.innerHTML = res.value;
	})
}

function updateBrowserPasswordExtractor() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/browserPasswordExtractor/?amount=1')
	.then(res => res.json())
	.then(res => {
		countBrowserPasswordExtractor.innerHTML = res.value;
	})
}

function updateAntiscan() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/antiScan/?amount=1')
	.then(res => res.json())
	.then(res => {
		countAntiscan.innerHTML = res.value;
	})
}

function updateZipping() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/zipping/?amount=1')
	.then(res => res.json())
	.then(res => {
		countZipping.innerHTML = res.value;
	})
}

function updateDonate() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/donatepage/?amount=1')
	.then(res => res.json())
	.then(res => {
		countDonate.innerHTML = res.value;
	})
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
