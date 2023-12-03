<script>
    import { base } from '$app/paths';
    import { onMount } from 'svelte';
    import Enchant from '../../components/Enchant.svelte';

    /** @type {any} */
    let slotEnchants = []

    onMount(async () => {
        const res = await fetch(`${base}/enchants.json`);
        slotEnchants = await res.json();
    });

    let bracketFilter = "twenty-five";
    $: professionLevel = (bracketFilter) => {
        switch (bracketFilter) {
            case 'twenty-five':
                return 225;
            case 'forty':
                return 300;
            case 'fifty':
                return 300;
            case 'sixty':
                return 300;
            default:
                return 225;
        }
    }
</script>

<span>Enchants</span>
<label for="bracket">bracket:</label>
    <select bind:value={bracketFilter} name="bracket" id="bracket">
        <option value="twenty-five">twenty-five</option>
        <option value="forty" disabled>forty</option>
        <option value="fifty" disabled>fifty</option>
        <option value="sixty" disabled>sixty</option>
    </select>

<table>
    {#each slotEnchants as {enchants, slotName}}
        <tr class="slotName">
            <td>{slotName}</td>
        </tr>

        {#each enchants as enchant}
            {#if enchant.professionLevel <= professionLevel(bracketFilter)}
                <Enchant {...enchant} />
            {/if}
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
