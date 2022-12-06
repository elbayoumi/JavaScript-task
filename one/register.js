
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

sub.addEventListener('click', () => { displa() })

const allAtr = (e) => {
    e.addEventListener('focus', (event) => {
        event.target.style.border = '4px solid blue';
    });
    e.addEventListener('blur', (event) => {
        (event.target.value.length > 3) ? event.target.style.border = '' : event.target.style.border = '4px solid blue';
    });

}
const deleteAllAtr = (password) => {
    (password.value == repassword.value) ? password.style.border = '' : password.style.border = '4px solid blue';
}
// const deleteAllAtr = (e) => {
//     e.addEventListener('blur', (event) => {
//         event.target.style.border = '';
//     });
// }
let allElement = [password, repassword, email, submit, uname, checkbox, checkbox2, city]
repassword.addEventListener('blur', () => {
    if (!(password.value.match(/^.\w{5,}$/))) {
        console.log('password error', password.value)
        password.focus((event) => {
            // console.log(event.target)
            event.target.style.border = '4px solid blue';
        });
        return false;
    }

    if (!(repassword.value == password.value)) {
        alert("Password must be the same");
        repassword.focus((event) => {
            // console.log(event.target)
            event.target.style.border = '4px solid blue';
        });
        return false;
    }

})

const fetchAllElements = allElement.map((element) => { allAtr(element); })
// const checkAllElements = allElement.map((element) => { allAtr(element })
// allAtr(password)
// allAtr(repassword)
// allAtr(email)
// allAtr(submit)
// allAtr(uname)
// allAtr(checkbox)
// allAtr(checkbox2)
// allAtr(city)

var child
var info
const displa = () => {
    child = open("./childregister.html", "child", "_blank")
    info = child.document
    uname.value.length > 3 ? info.write(`“Thank you, ${uname.value} for registering in our website”. `) : info.write("error name min length is 3 characters")
}
// if (!(password.value.match(/^.\w{5,}$/))) {
//     alert("Invalid Password");
//     password.focus((event) => {
//         // console.log(event.target)
//         event.target.style.border = '4px solid blue';
//     });
//     return false;
// }

// if (!(repassword.value == password.value)) {
//     alert("Password must be the same");
//     repassword.focus((event) => {
//         // console.log(event.target)
//         event.target.style.border = '4px solid blue';
//     });
//     return false;
// }

// function myFunction() {

//     // Create an "li" node:
//     // const ul = document.createElement('ul')
//     const li = document.createElement("li");

//     // Create a text node:
//     const textnode = document.createTextNode("Water");
//     // ul.appendChild(li)
//     // Append the text node to the "li" node:
//     li.appendChild(textnode);

//     // Append the "li" node to the list:
//     document.getElementById("myList").appendChild(li);
// }
// function myFunction() {

//     // Create an "li" node:
//     const node = document.createElement("li");

//     // Create a text node:
//     const textnode = document.createTextNode("Water");

//     // Append the text node to the "li" node:
//     node.appendChild(textnode);


//     // Append the "li" node to the list:
//     // document.getElementById("myList").appendChild(node);
//     // console.log(node)
//     console.log(document.getElementById("myList"))

// }

