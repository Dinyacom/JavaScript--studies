"use strict";
class StateMachine {
	// конструктор класса и свойства какие вы захотите сами, если они нужны
	working_with_timers = [];

	add(cb, seconds) {
		// добавляет новый таймер
		this.cb = cb;
		this.seconds = (seconds * 2000);
		this.working_with_timers.push({ cb: this.cb, seconds: this.seconds });
		return this;
	};

	run() {
		// запускает таймеры
		this.stworking_with_timersate.forEach((obj) => {
			this.timer = setTimeout(obj.cb, obj.seconds);
			obj.timer = this.timer;
		}
		);
	};

	stopAll() {
		// останавливает все таймеры и прекращает выполнение
		this.working_with_timers.forEach((obj) => {
			clearTimeout(obj.timer);
		}
		);
	};
};

const stateMachine = new StateMachine();

stateMachine.add(() => {
	// создаем новый таймер, который при вызове run выполнится через одну секунду 
	console.log("Приветствую вас через секунду");
}, 1);
stateMachine.add(() => {
	// создаем новый таймер, который при вызове run выполнится через две секунды
	console.log("Передаю привет через две секунды");
	stateMachine.stopAll()
}, 2);
stateMachine.add(() => {
	// создаем новый таймер, который при вызове run не выполнится через три секунды, но так в предыдущем таймере 
	stateMachine.stopAll()
	console.log("Это не должно вызваться никогда!");
}, 3);

stateMachine.run();