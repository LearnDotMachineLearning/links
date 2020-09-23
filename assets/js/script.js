function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) { //se tem lua
        e.classList.remove("fa-moon-o"); //remove classe icone lua
        e.classList.add("fa-sun-o"); //coloca classedo sol
        e.style.color = "rgb(225, 225, 0)";
        document.body.style.background = 'rgb(10, 10, 10)';
        document.querySelector('#userName').style.color = '#fff';


        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.backgroundColor = '#fff';
            links[i].style.color = '#111';
            links[i].style.border = 'solid #111 2px';
            links[i].addEventListener('mouseover', function () {
                links[i].style.backgroundColor = '#fad002';
                links[i].style.color = '#111';
                links[i].style.border = 'solid #111 2px';
            });
            links[i].addEventListener('mouseleave', function () {
                links[i].style.backgroundColor = 'white';
                links[i].style.color = 'black';
                links[i].style.border = 'solid #111 2px';
            });
        }


    } else { //senão
        e.classList.remove("fa-sun-o"); //remove classe icone lua
        e.classList.add("fa-moon-o"); //coloca classedo sol
        e.style.color = "#585858";
        document.body.style.background = 'rgb(243, 242, 242)';
        document.querySelector('#userName').style.color = 'rgb(99, 99, 99)';

        let links = document.querySelectorAll('.link');
        // Pega apenas o primeiro do array
        // pega todos
        for (let i = 0; i < links.length; i++) {
            links[i].style.backgroundColor = '#111';
            links[i].style.color = '#fff';
            links[i].style.border = 'solid #111 2px';
            links[i].addEventListener('mouseover', function () {
                links[i].style.backgroundColor = '#fad002';
                links[i].style.color = '#111';
                links[i].style.border = 'solid #111 2px';
            });
            links[i].addEventListener('mouseleave', function () {
                links[i].style.backgroundColor = 'black';
                links[i].style.color = '#fff';
                links[i].style.border = 'solid #111 2px';
            });
        }
    }

}