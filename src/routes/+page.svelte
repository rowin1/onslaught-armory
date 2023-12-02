<script>
    import { base } from '$app/paths';

    const classList = [
        "druid",
        "hunter",
        "mage",
        "priest",
        "rogue",
        "shaman",
        "warlock",
        "warrior",
    ] 
</script>

<table>
    {#each classList as className}
    <tr>
        <td>
            <img src="class-icons/{className}.png" alt="{className} icon"/>
        </td>
        <td><a href="{base}/{className}">gear</a></td>
        <td>enchants</td>
        <td>runes</td>
    </tr>
    {/each} 
</table>

<style>
    tr {
        font-family: verdana, arial;
        font-size: 12px;
        font-weight: bold;
        -webkit-font-smoothing: antialiased;
    }
</style>
