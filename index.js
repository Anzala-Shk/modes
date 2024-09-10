// document.getElementById('toggleBtn').addEventListener('click', function() {
//     let body = document.body;
//     let navbar = document.querySelector('.navbar');
//     if (body.classList.contains('light-mode')) {
//         body.classList.remove('light-mode');
//         body.classList.add('dark-mode');
//     } else if (body.classList.contains('dark-mode')) {
//         body.classList.remove('dark-mode');
//         body.classList.add('pink-mode');
//     } else if (body.classList.contains('pink-mode')) {
//         body.classList.remove('pink-mode');
//         body.classList.add('light-mode');
//     }
// });

document.getElementById('toggleBtn').addEventListener('click', function() {
    let body = document.body;
    let navbar = document.querySelector('.navbar');

    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        navbar.classList.remove('light-mode');
        navbar.classList.add('dark-mode');
    } else if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('pink-mode');
        navbar.classList.remove('dark-mode');
        navbar.classList.add('pink-mode');
    } else if (body.classList.contains('pink-mode')) {
        body.classList.remove('pink-mode');
        body.classList.add('light-mode');
        navbar.classList.remove('pink-mode');
        navbar.classList.add('light-mode');
    } else {
        body.classList.add('light-mode');
        navbar.classList.add('light-mode');
    }
});
