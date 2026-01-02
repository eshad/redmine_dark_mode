# Redmine Dark Mode Plugin

A dark mode UI plugin for Redmine that adds a toggle button to switch between light and dark themes.

![Redmine Dark Mode](https://img.shields.io/badge/Redmine-5.0%2B-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## Features

- Toggle button in the top menu to switch between light and dark modes
- Comprehensive dark styling for all Redmine UI elements
- Persists user preference in browser localStorage
- Automatically detects system dark mode preference
- Works with Redmine 5.0 and above

## Installation

### Method 1: Git Clone

```bash
cd /path/to/redmine/plugins
git clone https://github.com/eshad/redmine_dark_mode.git
```

### Method 2: Download ZIP

1. Download the plugin from [GitHub](https://github.com/eshad/redmine_dark_mode/archive/refs/heads/main.zip)
2. Extract the ZIP file
3. Copy the `redmine_dark_mode` folder to your Redmine's `plugins` directory

### After Installation

Restart your Redmine application:

```bash
# If using Puma
bundle exec rails server -e production

# If using Passenger
touch tmp/restart.txt

# If using systemd
sudo systemctl restart redmine
```

## Usage

After installation, you will see a moon/sun icon in the top menu bar (before "Home" link):

- Click the **moon icon** to enable dark mode
- Click the **sun icon** to switch back to light mode

Your preference is saved in your browser and will persist across sessions.

## Screenshots

### Dark Mode
The plugin provides a complete dark theme for:
- Header and navigation menus
- Sidebar
- Tables and lists
- Forms and inputs
- Issue pages
- Wiki content
- And more...

## Compatibility

- Redmine 5.0+
- Redmine 6.0+

## Uninstallation

1. Remove the plugin directory:
   ```bash
   rm -rf /path/to/redmine/plugins/redmine_dark_mode
   ```

2. Restart Redmine

## Author

**Hasan** - [GitHub](https://github.com/eshad)

## License

This plugin is released under the MIT License.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

If you encounter any issues or have suggestions, please [open an issue](https://github.com/eshad/redmine_dark_mode/issues) on GitHub.
