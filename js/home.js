document.querySelectorAll("#landing-buttons button").forEach(el =>
{
    el.addEventListener("click", e =>
    {
        if (e.target.id === "find-deals-button")
            window.location.href = "/deals.html";
        else
            window.location.href = "/about.html";
    });
});