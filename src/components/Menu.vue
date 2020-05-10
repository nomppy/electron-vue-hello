<template>
<div>
    <p> hey </p>
</div>
</template>

<script>
const { app, Menu } = require("electron");
const ismac = process.platform === "darwin";
const template  = [
    {
        label: "File",
        submenu: [isMac ? { role: "close" } : { role: "quit" }],
    },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
export default {
    menu,
};
</script>