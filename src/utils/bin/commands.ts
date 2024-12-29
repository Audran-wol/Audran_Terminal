// List of commands that do not require API calls

import themes from '../../../themes.json';
import config from '../../../config.json';

interface ThemeColors {
  background: string;
  foreground: string;
  yellow: string;
  green: string;
  gray: string;
  blue: string;
  red: string;
}

interface ThemeMode {
  light: ThemeColors;
  dark: ThemeColors;
}

interface Themes {
  [key: string]: ThemeMode;
}

interface Config {
  colors: {
    light: ThemeColors;
    dark: ThemeColors;
  };
  [key: string]: any;
}

const typedThemes = themes as Themes;
const typedConfig = config as Config;

// List of available commands
const commands = {
  about: { desc: 'About me' },
  banner: { desc: 'Display the header' },
  cd: { desc: 'Change directory' },
  colors: { desc: 'List available themes and modes' },
  'setcolor': { desc: 'Change terminal theme (usage: setcolor <mode> <theme>)' },
  date: { desc: 'Show current date' },
  echo: { desc: 'Print a line of text' },
  email: { desc: 'Send me an email' },
  github: { desc: 'Open GitHub profile' },
  help: { desc: 'Show this help message' },
  ls: { desc: 'List directory contents' },
  pwd: { desc: 'Print current directory' },
  repo: { desc: 'Open repository' },
  resume: { desc: 'Open resume' },
  donate: { desc: 'Donate to support the project' },
  linkedin: { desc: 'Open LinkedIn profile' },
  facebook: { desc: 'Open Facebook profile' },
  twitter: { desc: 'Open Twitter profile' },
  google: { desc: 'Search Google' },
  duckduckgo: { desc: 'Search DuckDuckGo' },
  bing: { desc: 'Search Bing' },
  reddit: { desc: 'Search Reddit' },
  vi: { desc: 'Open vi editor' },
  vim: { desc: 'Open vim editor' },
  nvim: { desc: 'Open nvim editor' },
  emacs: { desc: 'Open emacs editor' },
  sudo: { desc: 'Open website' }
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commandList = Object.keys(commands).sort();
  let output = 'Available commands:\n\n';
  
  commandList.forEach(cmd => {
    output += `${cmd.padEnd(12)} - ${commands[cmd].desc}\n`;
  });
  
  return output + '\n[tab]: trigger completion.\n[ctrl+l]/clear: clear terminal.\n\nType \'sumfetch\' to display summary.';
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open('https://github.com/audran-wol/Audran', '_blank');
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am Audran.
Welcome to my terminal website 
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open('https://audran-wol.github.io/Audran/resume.pdf', '_blank');
  return 'Opening resume...';
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `Thank you for your interest .
support my work here although this was an existing repo:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="https://www.paypal.com/paypalme/audranwol" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:audran.wol@gmail.com');
  return `Opening mailto:audran.wol@gmail.com...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open('https://github.com/audran-wol/', '_blank');

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open('https://www.linkedin.com/in/audran-wol/', '_blank');

  return 'Opening linkedin...';
};

export const facebook = async (args: string[]): Promise<string> => {
  window.open('https://www.facebook.com/audran.wol/', '_blank');

  return 'Opening facebook...';
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open('https://www.twitter.com/audran_wol/', '_blank');

  return 'Opening twitter...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `audran`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

// Theme commands
export const colors = async (args: string[]): Promise<string> => {
  const themeNames = Object.keys(themes);
  let output = 'Available themes and modes:\n\n';
  
  themeNames.forEach(themeName => {
    const theme = themes[themeName];
    output += `${themeName.toUpperCase()}\n`;
    if (theme.light) {
      output += `  ├─ light\n`;
    }
    if (theme.dark) {
      output += `  └─ dark\n`;
    }
  });
  
  output += '\nTo set a theme, use: setcolor <mode> <theme>\nExamples:\n';
  output += '  setcolor light dracula\n';
  output += '  setcolor dark nord';
  return output;
};

export const setcolor = async (args: string[]): Promise<string> => {
  const [mode, themeName] = args;
  
  if (!mode || !themeName) {
    return 'Usage: setcolor <mode> <theme>\nExamples:\n  setcolor light dracula\n  setcolor dark nord\n\nUse "colors" to see available themes and modes.';
  }

  const themeMode = mode.toLowerCase();
  if (!['light', 'dark'].includes(themeMode)) {
    return 'Mode must be either "light" or "dark"';
  }

  // Find theme name case-insensitively
  const themeKey = Object.keys(themes).find(
    key => key.toLowerCase() === themeName.toLowerCase()
  );

  if (!themeKey) {
    return `Theme "${themeName}" not found. Use 'colors' command to see available themes.`;
  }

  // Check if the theme has the requested mode
  if (!themes[themeKey][themeMode]) {
    return `Theme "${themeKey}" doesn't have a ${themeMode} mode. Use 'colors' command to see available modes for each theme.`;
  }

  try {
    // Get the selected theme colors
    const selectedTheme = themes[themeKey][themeMode];
    
    // Create updated config with new theme colors
    const updatedConfig = {
      ...config,
      colors: {
        ...config.colors,
        [themeMode]: {
          background: selectedTheme.background,
          foreground: selectedTheme.foreground,
          yellow: selectedTheme.yellow,
          green: selectedTheme.green,
          gray: selectedTheme.gray,
          blue: selectedTheme.blue,
          red: selectedTheme.red
        }
      }
    };

    // Use the browser's fetch API to update the config file
    await fetch('/api/updateConfig', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedConfig, null, 2)
    });

    // Force a page reload to apply the new theme
    window.location.reload();

    return `Theme set to ${themeKey} (${mode} mode). Reloading page to apply changes...`;
  } catch (error) {
    console.error('Error updating theme:', error);
    return 'Failed to update theme. Please try again.';
  }
};

export const pwd = async (args: string[]): Promise<string> => {
  return `You in my respository send me support for more`
}

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://audran-wol.github.io/Audran/', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
  █████╗ ██╗   ██╗██████╗ ██████╗  █████╗ ███╗   ██╗    ████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗
 ██╔══██╗██║   ██║██╔══██╗██╔══██╗██╔══██╗████╗  ██║    ╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║
 ███████║██║   ██║██║  ██║██████╔╝███████║██╔██╗ ██║       ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║
 ██╔══██║██║   ██║██║  ██║██╔══██╗██╔══██║██║╚██╗██║       ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║
 ██║  ██║╚██████╔╝██████╔╝██║  ██║██║  ██║██║ ╚████║       ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗
 ╚═╝  ╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝


Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/audran-wol/Audran" target="_blank">here</a></u> for the Github repository.
`;
};
