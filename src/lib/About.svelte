<script>
    import "./About.scss";

    const me = "John Pridmore";
    const imgAlt = "A photograph taken of me in 2020, behind a sunny though obscured, Chicago skyline";
    const introText = `Hi, I'm <span class="highlighted-text">${me}</span>`
</script>
<div class="hero">
    <div class="pic">
        <img alt={imgAlt} src="DSC04172.webp">
        <div class="after-effect"></div>
    </div>
    <div class="body-text flexed-col-center">
        <h1>{@html introText}</h1>
        <h2>A Software Engineer, located in Chicago, IL</h2>
    </div>
    <div class="menu-bar flexed-row-center">
        <p>Scroll To:</p>
        <a href="/">About</a>
        <a href="/#work">Work</a>
        <a href="/#contact">Contact</a>
    </div>
</div>
