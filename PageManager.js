const GotoPage = (pageId) => {
    window.location.href = pageId > 0
        ? `./page-${pageId}.html`
        : "./index.html"
}