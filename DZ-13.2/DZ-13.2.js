// Дан массив пользователей const users = 
// [{name: ‘Ivan’, age: 18}, 
// {name: ‘Petr’, age: 12}, 
// {name: ‘Sidor’, age: 25}, 
// {name: ‘Pavel’, age: 16}, 
// {name: ‘Sasha’, age: 29}]. 
// Для каждого из этих объектов, через JS создайте отдельный div в котором будет отображать 
// информация о каждом пользователе. Создайте список из div для кажого пользователя. 
// Используйте методы создания элемента и наполнения его содержимым, добавления элемента.

"use strict";

const users = [
	{ name: "Ivan", age: 18 },
	{ name: "Petr", age: 12 },
	{ name: "Sidor", age: 25 },
	{ name: "Pavel", age: 16 },
	{ name: "Sasha", age: 29 }
];

let information_user = document.createElement("div");
document.body.before(information_user);
information_user.innerHTML = (`<ul> Информация о всех пользователей: </ul>`);

let user_list = document.createElement("ul");
document.body.prepend(user_list);

function addDiv(name, age) {
	let user_div = document.createElement("div");
	let user_li = document.createElement("li");
	user_list.prepend(user_li);
	user_li.prepend(user_div);
	user_div.innerHTML = (`<p> Имя: ${name}, Возрост: ${age}. </p>`);
}

users.forEach(function (user) {
	let name = user.name;
	let age = user.age;
	addDiv(name, age);
});

// Методы для создания узлов:
// document.createElement(tag) – создаёт элемент с заданным тегом,
// document.createTextNode(value) – создаёт текстовый узел (редко используется),
// elem.cloneNode(deep) – клонирует элемент, если deep==true, то со всеми дочерними элементами.

// Вставка и удаление:
// node.append(...nodes or strings) – вставляет в node в конец,
// node.prepend(...nodes or strings) – вставляет в node в начало,
// node.before(...nodes or strings) – вставляет прямо перед node,
// node.after(...nodes or strings) – вставляет сразу после node,
// node.replaceWith(...nodes or strings) – заменяет node.
// node.remove() – удаляет node.

// Если нужно вставить фрагмент HTML, то elem.insertAdjacentHTML(where, html) вставляет в зависимости от where:
// "beforebegin" – вставляет html прямо перед elem,
// "afterbegin" – вставляет html в elem в начало,
// "beforeend" – вставляет html в elem в конец,
// "afterend" – вставляет html сразу после elem.