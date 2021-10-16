# gg

A simple Hugo theme. Plan9-inspired palette with a simple dark mode. Content is only visible with JS disabled.

**[Demo](https://gclv.es/)**

![Blank theme screenshot](https://github.com/Vimux/blank/blob/master/images/splash.png)

## Installation

In your Hugo site `themes` directory, run:

    git submodule add https://git.sr.ht/~gg/blog-theme

Next, open `config.toml` in the base of the Hugo site and ensure the theme option is set to `gg`.

    theme = "gg"

For more information read the official [quick start guide](https://gohugo.io/getting-started/quick-start/) of Hugo.

## Configuration

The theme uses the following parameters:

- `noJsLink`: the URL that the "Please disable JS" banner will point to
- `uselessJSFile`: a script that will be executed when JS is enabled. Make it as useless as possible!
- `copyright`: copyright info to be displayed in the footer

## License

This theme is released under the [MIT license](https://git.sr.ht/~gg/blog-theme/tree/master/item/LICENSE).
