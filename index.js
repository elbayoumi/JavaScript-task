
const password = document.querySelector('input[name="password"]');
const repassword = document.querySelector('input[name="repassword"]');
const email = document.querySelector('input[type="email"]');
const submit = document.querySelector('input[type="submit"]');
const uname = document.querySelector('#fo');
const checkbox = document.querySelector('input[name="checkbox"]');
const checkbox2 = document.querySelector('#checkbox2');
const city = document.querySelector('input[name="city"]');
const vue = document.querySelector('#vue')
const sub = document.querySelector('#sub');
var child
var info
// const displa = () => {
//     child = open("./childregister.html", "child", "_blank")
//     info = child.document
//     uname.value.length > 3 ? info.write(`“Thank you, ${uname.value} for registering in our website”. `) : info.write("error name min length is 3 characters")
// }

sub.addEventListener('click', () => allElement.map((element) => { [element.value]; }))

const allAtr = (e) => {
    e.addEventListener('focus', (event) => {
        event.target.style.border = '4px solid blue';
    });
    e.addEventListener('blur', (event) => {
        (event.target.value.length > 3) ? event.target.style.border = '' : event.target.style.border = '4px solid blue';
    });

}


let allElement = [password, repassword, email, submit, uname, checkbox, checkbox2, city]
const fetchAllElements = allElement.map((element) => { allAtr(element); })
repassword.addEventListener('blur', () => {
    if (!(password.value.match(/^.\w{5,}$/))) {
        console.log('password error', password.value)
        password.focus((event) => {
            event.target.style.border = '4px solid blue';
        });
        return false;
    }

    if (!(repassword.value == password.value)) {
        console.log('password error', password.value)
        repassword.focus((event) => {
            event.target.style.border = '4px solid blue';
        });
        return false;
    }

})
// localStorage

// storeAllElements;
// console.log(...storeAllElements)
// var x = JSON.stringify(arr);
// // var ret=JSON.parse(x);
// // console.log(ret)

// localStorage.setItem("name", "ali ahmed");
// localStorage.setItem("arr", x);

// localStorage.removeItem("name")
// function handelr() {
//     if (apiUser.readyState == 4 && apiUser.status == 200) {
//         var users = JSON.parse(apiUser.responseText).users

//         localStorage.setItem("userData", JSON.stringify(users))
//         for (var i = 0; i < users.length; i++) {
//             var div = document.createElement("div");
//             div.innerHTML = `<span>${users[i].firstName}</span>
//        <span >${users[i].gender}</span>
//        <span>${users[i].age}</span>`
//             document.body.appendChild(div)
//         }
//     }
// }




