const btn = document.getElementById('menu-Btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');

});

const [text, setText] = useState("")








// const btn = document.getElementById('menu-Btn');
// const nav = document.getElementById('menu');

// btn.addEventListener('click', () => {
//     btn.classList.toggle('open');
//     nav.classList.toggle('hidden');
//     nav.classList.toggle('flex');

// });
