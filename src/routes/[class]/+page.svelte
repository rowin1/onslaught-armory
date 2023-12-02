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
    let gear = [];

    onMount(async () => {
        const res = await fetch(`${base}/${data.className}.json`);
        ({ enchants, runes, gear } = await res.json());
    });
</script>

<span>{data.className}</span>
<table>
    <tr>
        <td>slot</td>
        <td>source</td>
    </tr>
    {#each gear as { slotName, items}}
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
</style>
