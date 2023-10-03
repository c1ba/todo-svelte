import '@testing-library/jest-dom'

import {render, fireEvent, screen} from '@testing-library/svelte'

import ToDoListItem from './ToDoListItem.svelte';

   let textNode: HTMLElement;

beforeEach(() => {
    render(ToDoListItem, {initialValue: 'To Do Item 1', isChecked: false, onDeleteClick: () => {}, onEditModeClose: () => {}});
    textNode = screen.getByTestId("todo-listitem-text");
});

test('shows proper to do when rendered', () => {
    const todoText = screen.getByText('To Do Item 1');
    expect(todoText).toBeInTheDocument();
    }
);

test('should change to input on text click', async () => {

    await fireEvent.click(textNode);
    const todoInput = screen.getByTestId('todo-listitem-input');
    expect(todoInput).toBeInTheDocument();
});

test('should change to text on enter key press', async () => {
    await fireEvent.click(textNode);
    const todoInput = screen.getByTestId('todo-listitem-input');

    await fireEvent.keyPress(todoInput, {key: 'Enter', code: 'Enter', keyCode: 13});
    const todoTextAfterEnter = screen.getByTestId("todo-listitem-text");
    expect(todoTextAfterEnter).toBeInTheDocument();
});