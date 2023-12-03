<script>
    /** @type {string} */
    export let itemName;

    /** @type {string} */
    export let link;

    /** @type {string} */
    export let icon;

    /** @type {string} */
    export let quality;

    /** @type {string} */
    export let enchantId;

    /** @type {string} */
    export let source;

    // TODO: Move this to utility file
    const qualityColor = (quality) => {
        switch (quality) {
            case 'common':
                return '#ffffff';
            case 'uncommon':
                return '#18cc00';
            case 'rare':
                return '#0070dd';
            case 'epic':
                return '#a335ee';
            case 'legendary':
                return '#ff8000';
            case 'artifact':
                return '#e6cc80';
            case 'heirloom':
                return '#e6cc80';
            default:
                return '#ffffff';
        }
    }
</script>

<tr>
    <td>
        <!-- <a href={link} rel="ench={enchantId}"> -->
        <a href={link}>
            <span style="color:{qualityColor(quality)}" data-has-wh-touch-event="true">{itemName}</span>
        </a>
    </td>
    <td>{source}</td>
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
</style>