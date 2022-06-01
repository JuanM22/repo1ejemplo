$(document).ready(() => {
    loadMenuHtmlData();
});

async function loadMenuHtmlData() {
    let data = null;
    await $.ajax({
        url: '../navmenu/menu.html',
        type: 'GET',
        data: {},
        success: function (response) {
            data = response;
        }
    });
    $("#menu_container").html(data);
}