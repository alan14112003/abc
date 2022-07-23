const cacu = document.querySelector('.cacu')
const load = document.querySelector(".load")
function loader() {
    load.style.display = "none"
    cacu.style.display = "flex"
}
window.addEventListener("load", loader)
//  tính toán 
let result = 0, a = '', b = '', phep, check = true;
const screen = document.querySelector('.screen input')
const btns = document.querySelectorAll('.btn-group a')

function getBtn(value) {
    if (value !== 'x')
        screen.value = screen.value + value;

    if (value === '+' || value === '-' ||
        value === '*' || value === '/') {
        check = false;
        phep = value;
    } else if (value === '=') {
        if (phep === '+')
            result = sum(a, b);
        else if (phep === '-')
            result = tru(a, b);
        else if (phep === '*')
            result = nhan(a, b);
        else if (phep === '/')
            result = chia(a, b);
        else
            result = a;
        check = true;
        phep = '';
        a = result; b = '';
        result = 0;
        screen.value = a;
    } else if (value === 'x') {
        if (!check) {
            if (b === '') {
                phep = '';
                check = false;
                screen.value = screen.value.slice(0, screen.value.length - 1)
            } else {
                screen.value = screen.value.slice(0, screen.value.length - 1);
                b = b.slice(0, b.length - 1);
            }
        } else {
            screen.value = screen.value.slice(0, screen.value.length - 1);
            a = a.slice(0, a.length - 1);
            result = Number(result.toString().slice(0, result.toString().length - 1));
        }

    } else if (value === 'AC') {
        check = true;
        a = ''; b = '';
        result = 0; phep = '';
        screen.value = '';
    } else {
        if (check) {
            a += value;
        } else {
            b += value;
        }
    }
}
const sum = (a, b) => Number(a) + Number(b);
const tru = (a, b) => Number(a) - Number(b);
const nhan = (a, b) => Number(a) * Number(b);
const chia = (a, b) => Number(a) / Number(b);

btns.forEach((btn) => {
    btn.onclick = () => {
        getBtn(btn.className);
    }
})
document.onkeyup = (e) => {
    let key, kt = false;
    switch (e.which) {
        case 8: key = 'x';
            kt = true;
            break;
        case 13: key = '=';
            kt = true;
            break;
        case 96:
        case 97:
        case 98:
        case 99:
        case 100:
        case 101:
        case 102:
        case 103:
        case 104:
        case 105:
        case 106:
        case 107:
        case 109:
        case 110:
        case 111:
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
        case 187:
        case 189:
        case 190:
        case 191: key = e.key;
            kt = true;
            break;
        case 27:
        case 46: key = 'AC';
            kt = true;
            break;
        default:
    }
    if (kt) {
        getBtn(key);
    }
}