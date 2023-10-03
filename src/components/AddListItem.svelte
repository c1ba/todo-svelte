<script lang="ts">
    import {checkListItemStyle, ApprovedButtonStyle} from '../constants/styles';
    import { createEventDispatcher } from 'svelte';

    let inputValue: string;

    const dispatch = createEventDispatcher();

    const addToDo = () => {
        dispatch('change', { state: inputValue });
        inputValue = '';
    }

    const addOnEnter = (e: any) => {
        if (e.keyCode === 13) {
           addToDo();
        }
    }
</script>

<div class={checkListItemStyle}>
    <input type="text" bind:value={inputValue} on:keypress={addOnEnter} style="margin-right: 10px;" />
    <button on:click={addToDo} class={ApprovedButtonStyle}>Add</button>
</div>