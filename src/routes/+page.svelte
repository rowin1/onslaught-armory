<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import Item from '../components/Item.svelte';

    /** @type {any} */
    let classes = [];

    onMount(async () => {
        const res = await fetch(`${base}/armory.json`)
        classes = await res.json();
    });
</script>

{#each classes as { className, gear }}
    <span>{className}</span>
    <table>
        {#each gear as { slotName, items}}
            <tr class="slotName">
                <td>{slotName}</td>
                <td>source</td>
            </tr>
            {#each items as { itemName, link, icon, quality, enchantId, source}}
                <Item {itemName} {link} {icon} {quality} {enchantId} {source}/>
            {/each}
        {/each}
    </table>
    
{/each}

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
