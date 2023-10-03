import { writable } from 'svelte/store';

export enum InputEnum {
	ADD,
	EDIT
}

export const toDo = writable({list: [{id: 1, text: "Wash the dishes", checked: true},
{id: 2, text: "Test the soap", checked: false},
{id: 3, text: "Lick the washing machine", checked: false},
{id: 4, text: "Think of a more complex app idea to apply more Svelte concepts", checked: false}], editInputVal: '', addInputVal: ''});

export const removeTodo = (value: string) => {
        toDo.update((obj) => ({...obj, list: obj.list.filter((todo) => todo.text !== value)}));
}

export const addToDo = () => {
	toDo.update((obj) => ({...obj, addInputVal: '', list: [...obj.list, {id: obj.list.length + 1, text: obj.addInputVal, checked: false}]}));
}

export const editToDo = (id: number) => {
	toDo.update((obj) => ({...obj, editInputVal: '', list: obj.list.map((todo) => todo.id === id ? {id: todo.id, text: obj.editInputVal, checked: todo.checked} : todo)}));
}

export const updateInput = (val: string, type: InputEnum) => {
	switch (type) {
		case InputEnum.ADD :
			toDo.update((obj) => ({...obj, addInputVal: val}));
		case InputEnum.EDIT:
			toDo.update((obj) => ({...obj, editInputVal: val}));
	}
}

export const resetInput = () => {
	toDo.update((obj) => ({...obj, inputVal: ''}));
}