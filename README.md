# cursor-neovim

This a minimalist Cursor setup to make Cursor feel like Neovim. This is also uses my neovim distro called [Macsimus](https://github.com/sansyrox/macsimus) as the inspiration for the colorscheme and theme inspiration.

## Plan

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
   - [Install the extensions](#1-install-the-extensions)
   - [Copy/overwrite configuration files](#2-copyoverwrite-configuration-files)
   - [Reload/Restart Cursor](#3-reloadrestart-cursor)
3. [Usage](#usage)
   - [Toggle terminal (cmd+,  cmd+t or ctrl+j)](#toggle-terminal-cmd-cmdt-or-ctrlj)
   - [Git (ctrl+g)](#git-ctrlg)
   - [Search text (cmd+shift+f)](#search-text-cmdshiftf)
   - [Search file (cmdp)](#search-file-cmdp)
   - [The welcome page](#the-welcome-page)

4. [Contributing](#contributing)


## Prerequisites

Before customizing Cursor, make sure you have the following tools installed on your machine:

- [fzf](https://github.com/junegunn/fzf)
- [ripgrep](https://github.com/BurntSushi/ripgrep)
- [lazygit](https://github.com/jesseduffield/lazygit)

These tools are essential for enhancing your keyboard-first experience with Cursor.
You can install these tools using the following commands:
```bash
# Mac OS
brew install fzf
brew install ripgrep
brew install lazygit

# Windows
choco install fzf
choco install ripgrep
choco install lazygit

# Ubuntu Linux
sudo apt-get install fzf
sudo apt-get install ripgrep
LAZYGIT_VERSION=$(curl -s "https://api.github.com/repos/jesseduffield/lazygit/releases/latest" | grep -Po '"tag_name": "v\K[^"]*')
curl -Lo lazygit.tar.gz "https://github.com/jesseduffield/lazygit/releases/latest/download/lazygit_${LAZYGIT_VERSION}_Linux_x86_64.tar.gz"
tar xf lazygit.tar.gz lazygit
sudo install lazygit /usr/local/bin

# Arch Linux
sudo pacman fzf ripgrep lazygit
```

You also need to install the following fonts:
- [Fira Code](https://github.com/tonsky/FiraCode)
- [JetBrains Mono](https://www.jetbrains.com/fr-fr/lp/mono/)


Once you have installed these prerequisites, you can proceed with the customization steps.

### Installation

⚠️ **Warning:** Before customizing Cursor, it is highly recommended to make a backup of your current setup. This will allow you to revert back to your original configuration if needed.
##### on Mac OS:
```bash
> cp "${userHome}/Library/Application Support/Code/User/" "${userHome}/Library/Application Support/Code/User.bak"
```
#### on Linux:
```bash
>cp "$XDG_CONFIG_DIR/Cursor/User" "$XDG_CONFIG_DIR/Cursor/User.bak"
```

#### 1. Install the extensions
To install the extensions, run the following command:
##### on Mac OS:
```bash
> cat extensions.txt | xargs -L 1 cursor --install-extension
```
##### on Linux:
```bash
> cat extensions.txt | xargs -L 1 cursor --install-extension
```
This command installs each extension listed in the `extensions.txt` file using the `cursor --install-extension` command.

#### 2. Copy/overwrite configuration files
Now copy `keybindings.json`, `settings.json`, and `welcomePage.js` to your Cursor User folder:
##### on Mac OS:
```bash
cp -i keybindings.json settings.json welcomePage.js "${userHome}/Library/Application Support/Code/User"
```
##### on Linux:
In Linux, several additional steps are required for this configuration to run properly. First, the [APC Customize UI Plugin](https://github.com/drcika/apc-extension) needs to be able to manipulate the files in the Cursor/Codium installation. This process is described [here](https://github.com/drcika/apc-extension?tab=readme-ov-file#mac-and-linux-users). Also, Linux users should edit the 'settings_linux.json' to ensure paths are correct for your distribution.  

```bash
cp keybindings.json welcomePage.js "$XDG_CONFIG_DIR/Cursor/User/"
cp settings_linux.json "$XDG_CONFIG_DIR/Cursor/User/settings.json"
```
This command copies the mentioned files to the appropriate location in your Cursor User folder.

#### 3. Reload/Restart Cursor
Reload or restart Cursor and
now you are done! You can enjoy this minimalist Cursor setup.

### Usage  

This table shows the current keybindings, editable in "keybindings.json".  <details>
<summary>Click to view key commands</summary>

| key                | command                                      | trigger                                                                                                                                                                                     | args     |
| ------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| shift+cmd+t        | workbench.action.terminal.new                | terminalProcessSupported                                                                                                                                                                    |          |
| cmd+[KeyM]         | workbench.action.createTerminalEditor        |                                                                                                                                                                                             |          |
| cmd+b              | workbench.action.toggleActivityBarVisibility |                                                                                                                                                                                             |          |
| alt+f              | eslint.executeAutofix                        |                                                                                                                                                                                             |          |
| ctrl+shift+g       | editor.action.rename                         | editorHasRenameProvider && editorTextFocus && !editorReadonly                                                                                                                               |          |
| shift+cmd+g        | workbench.action.tasks.runTask               |                                                                                                                                                                                             | LazyGit  |
| shift+cmd+t        | extension.splitTestFile                      | editorTextFocus                                                                                                                                                                             |          |
| ctrl+t             | runCurrentTest.run                           |                                                                                                                                                                                             |          |
| ctrl+f             | runCurrentTest.runAndUpdateSnapshots         |                                                                                                                                                                                             |          |
| ctrl+g             | workbench.action.tasks.runTask               | terminalProcessSupported                                                                                                                                                                    | LazyGit  |
| cmd+8              | editor.action.marker.next                    | editorFocus                                                                                                                                                                                 |          |
| cmd+9              | editor.action.marker.nextInFiles             | editorFocus                                                                                                                                                                                 |          |
| ctrl+alt+cmd+right | workbench.action.decreaseViewSize            |                                                                                                                                                                                             |          |
| ctrl+alt+cmd+left  | workbench.action.increaseViewSize            |                                                                                                                                                                                             |          |
| ctrl+alt+cmd+up    | workbench.action.evenEditorWidths            |                                                                                                                                                                                             |          |
| alt+t              | workbench.action.terminal.toggleTerminal     |                                                                                                                                                                                             |          |
| alt+r              | workbench.action.toggleSidebarVisibility     |                                                                                                                                                                                             |          |
| alt+y              | workbench.action.toggleActivityBarVisibility |                                                                                                                                                                                             |          |
| ctrl+tab           | extension.goToTest                           |                                                                                                                                                                                             |          |
| ctrl+cmd+p         | searchEverywhere.search                      |                                                                                                                                                                                             |          |
| shift+alt          | fuzzySearch.activeTextEditor                 |                                                                                                                                                                                             |          |
| alt+cmd+p          | projectManager.listProjects                  |                                                                                                                                                                                             |          |
| cmd+u              | thunder-client.import-curl                   |                                                                                                                                                                                             |          |
| ctrl+j             | workbench.action.terminal.toggleTerminal     |                                                                                                                                                                                             |          |
| shift+alt+right    | editor.action.inlineSuggest.showNext         |                                                                                                                                                                                             |          |
| shift+alt+left     | editor.action.inlineSuggest.showPrevious     |                                                                                                                                                                                             |          |
| shift+alt+down     | editor.action.inlineSuggest.trigger          |                                                                                                                                                                                             |          |
| shift+cmd+a        | copilot-labs.use-brush-picker                | editorTextFocus                                                                                                                                                                             |          |
| shift+cmd+m        | workbench.action.toggleMaximizedPanel        |                                                                                                                                                                                             |          |
| shift+cmd+f        | workbench.action.findInFiles                 |                                                                                                                                                                                             |          |
| shift+cmd+u        | workbench.view.search                        | workbench.view.search.active && neverMatch =~ /doesNotMatch/                                                                                                                                |          |
| shift+cmd+k        | workbench.action.terminal.killAll            |                                                                                                                                                                                             |          |
| shift+cmd+g        | workbench.scm.focus                          |                                                                                                                                                                                             |          |
| ctrl+g             | lazygit-vscode.toggle                        |                                                                                                                                                                                             |          |
| ctrl+p             | binocular.customCommands                     |                                                                                                                                                                                             | pipeline |
| ctrl+shift+p       | binocular.customCommands                     |                                                                                                                                                                                             |          |
| shift+tab          | workbench.action.previousEditorInGroup       |                                                                                                                                                                                             |          |
| shift+tab          | workbench.action.previousEditor              |                                                                                                                                                                                             |          |

</details>
```

## Credits

This config was as I was unable to config [avante.nvim](https://github.com/yetone/avante.nvim) in [Macsimus](https://github.com/sansyrox/macsimus). Then I saw [EliVim-VSCode](https://github.com/EliTheSurfer/EliVim-VSCode) and I was like *"Why not just use Cursor instead of Cursor+Macsimus?"*

Shoutout to [EliTheSurfer](https://github.com/EliTheSurfer) for [EliVim-VSCode](https://github.com/EliTheSurfer/EliVim-VSCode) .

### Contributing
If you have any suggestions or improvements, feel free to open an issue or a pull request.
Note that I am currently using Mac OS, so improvements for the documentation on other OSes are more than welcome.