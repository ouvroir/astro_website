<script>
    import locales from '/src/data/locales.json'
    import { getLanguageFromURL} from '/src/data/languages.ts';

    export let currentPath
    let currentLang = getLanguageFromURL(currentPath);

    const selectOnChange = (e) => currentLang = e.target.value

    console.log('current path', getLanguageFromURL(currentPath))
    
    $: console.log(currentLang)

</script>

<select on:change={selectOnChange}>
    {#each locales.locales as lang}
        <option value={lang.locale}>{lang.language}</option>
    {/each}
</select>