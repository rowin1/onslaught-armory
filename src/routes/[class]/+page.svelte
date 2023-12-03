<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import Item from '../../components/Item.svelte';

    /** @type {any} */
    export let data;

    /** @type {any} */
    let enchants = [];

    /** @type {any} */
    let runes = [];

    /** @type {any} */
    let gear = {"twenty-five": []};

    onMount(async () => {
        const res = await fetch(`${base}/${data.className}.json`);
        ({ enchants, runes, gear } = await res.json());
    });

    let bracketFilter = "twenty-five";
    const filterGear = (gear, bracket) => {
        return gear[bracket];
    }

    $: bracketGear = filterGear(gear, bracketFilter)
</script>

<span>{data.className}</span>

<label for="bracket">bracket:</label>
    <select bind:value={bracketFilter} name="bracket" id="bracket">
        <option value="twenty-five">twenty-five</option>
        <option value="forty">forty</option>
        <option value="fifty">fifty</option>
        <option value="sixty">sixty</option>
    </select>

<table>
    <tr>
        <td>slot</td>
        <td>source</td>
    </tr>

    {#each bracketGear as {items, slotName}}
        <tr class="slotName">
            <td>{slotName}</td>
        </tr>

        {#each items as { itemName, link, icon, quality, enchantId, source}}
            <Item {itemName} {link} {icon} {quality} {enchantId} {source}/>
        {/each}
        <td>&nbsp</td>
    {/each}
</table>

<style>
    span {
        display: grid;
        font-family: verdana, arial;
        font-size: 14px;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
    }

    tr {
        font-family: verdana, arial;
        font-size: 12px;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
    }

    label, select {
        font-family: verdana, arial;
        font-size: 12px;
        -webkit-font-smoothing: antialiased;
    }
</style>
