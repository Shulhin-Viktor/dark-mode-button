const darkButton = document.querySelector('.theme-switch-btn');
const currentTheme = localStorage.getItem('theme');

if (currentTheme == 'dark') {
    document.body.classList.add('dark-theme');
}

darkButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    let theme = 'light';
    if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
        document.getElementById('grid-id1').style.border = "solid 1px white";
        document.getElementById('grid-id2').style.border = "solid 1px white";
        document.getElementById('grid-id3').style.border = "solid 1px white";
        document.getElementById('grid-id4').style.border = "solid 1px white";
        document.getElementById('grid-id5').style.border = "solid 1px white";
        document.getElementById('grid-id6').style.border = "solid 1px white";
        document.getElementById('grid-id7').style.border = "solid 1px white";
        document.getElementById('grid-id8').style.border = "solid 1px white";
        document.getElementById('grid-id9').style.border = "solid 1px white";
    }
    localStorage.setItem('theme', theme);
})
