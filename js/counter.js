const countEl = document.getElementById('visit-counter');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/fortysev-en.github.io/portfolio/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
