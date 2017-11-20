# Get a bird's eye view of your tabs and switch between them easily

This extension is a poor man's replacement of Firefox's now defunct Tab Groups
extension. When activated (using the `Ctrl-Shift-D` keybinding), it'll display
a visual overview of all tabs in the current window, and allow switching between
them either by clicking, or using the keyboard (by typing a tab's name/url and
pressing the `Return` key).

This extension is currently in a very rough state, improvements might come if I
end up using it regularly enough.

## Installation

Use [web-ext](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext)
to generate the .zip of the extension:

```
web-ext build
```

### Firefox

Go to the Add-ons page (`Ctrl-Shift-A`), click on the small gear next to the
search field and choose "Install module from file...".

### Chrome

The extensions seems to be pretty broken on Chrome at the moment, I need to
figure that out...
