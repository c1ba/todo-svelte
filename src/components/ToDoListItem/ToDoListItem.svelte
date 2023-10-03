<script lang="ts">
    import {css} from '@emotion/css';
    import {RedButtonStyle, checkListItemStyle} from '../../constants/styles';
    import { createEventDispatcher } from 'svelte';

    // Styling

    const listItemTextStyle = css`
        margin-left: 5px;
        margin-right: 10px;
        cursor: pointer;
    `;

    // Exporting a variable in script makes it a prop in component
	export let initialValue: string;
    export let isChecked: boolean;
    export let onDeleteClick: () => void;
    export let onEditModeClose: () => void;

    let isInEditMode: boolean = false;
    
    const dispatch = createEventDispatcher();

    const openEditMode = () => {
        isInEditMode = !isInEditMode;
    }

    const closeEditMode = (e: any) => {
        if (e.keyCode === 13) {
            dispatch('change', { state: initialValue });
            onEditModeClose();
            isInEditMode = !isInEditMode;
        }
    }
</script>

<div class={checkListItemStyle} data-testid="todo-listitem">
    <input type="checkbox"  checked={isChecked}/>
    {#if !isInEditMode}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <h4 data-testid="todo-listitem-text" on:click={openEditMode} class={listItemTextStyle}>{initialValue}</h4>
    {:else}
        <input data-testid="todo-listitem-input" type="text" bind:value={initialValue} on:keypress={closeEditMode} />
    {/if}
    <button on:click={onDeleteClick} class={RedButtonStyle}>Remove</button>
</div>