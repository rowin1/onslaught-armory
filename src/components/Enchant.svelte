<script>
    /** @type {string} */
    export let enchantName;

    /** @type {string} */
    export let url;

</script>

<tr>
    <td>
        <a href={url} style='background-image: url("https://wow.zamimg.com/images/wow/icons/tiny/spell_holy_greaterheal.gif");'>
            {enchantName}
        </a>
    </td>
</tr>

<style>
    tr {
        font-family: verdana, Helvetica Neue, Arial;
        font-size: 10.5px;
        -webkit-font-smoothing: antialiased;
    }

    td {
        border: .5pt solid;
    }

    a {
        background: left center no-repeat;
        padding-left: 20px;
    }
</style>