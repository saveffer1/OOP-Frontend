if (localStorage.getItem("token") === "authen"){
    window.location.href = "src/page/chatboard.html";
}
else if (localStorage.getItem("token") == null) {
    window.location.href = "src/page/registry.html";
}