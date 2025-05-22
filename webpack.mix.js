let mix = require("laravel-mix");
let NovaExtension = require("laravel-nova-devtool");
let tailwindcss = require("tailwindcss");

mix.extend("nova", new NovaExtension());

mix.setPublicPath("dist")
    .js("resources/js/tool.js", "js")
    .vue({ version: 3 })
    .postCss("resources/css/tool.css", "css", [
        tailwindcss("tailwind.config.js"),
    ])
    .nova("gabrielesbaiz/nova-changelog")
    .version();
