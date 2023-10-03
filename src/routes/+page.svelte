<script lang="ts">
	import {toDo, removeTodo, editToDo, updateInput, addToDo, InputEnum} from '../stores';
    import ToDoListItem from '../components/ToDoListItem/ToDoListItem.svelte';
    import AddListItem from '../components/AddListItem.svelte';

	let input: string = '';

	toDo.subscribe(console.log);

	function handleChange(ev: any) {
        input = ev.detail.state
    }
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<AddListItem on:change={(e) => {handleChange(e); updateInput(input, InputEnum.ADD); addToDo();}}/>
	{#each $toDo.list as todo}
		<ToDoListItem 
		    on:change={(e) => {handleChange(e); updateInput(input, InputEnum.EDIT);}}
		    onEditModeClose={() => {editToDo(todo.id)}} 
		    onDeleteClick={() => {removeTodo(todo.text)}} 
		    initialValue={todo.text} 
		    isChecked={todo.checked} 
		/>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
		border-radius: 8px;
		border: solid 2px #E14B00;
	}
</style>
