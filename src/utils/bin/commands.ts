// List of commands that do not require API calls

import themes from '../../../themes.json';
import config from '../../../config.json';
import portfolioData from '../data/portfolio.json';

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

// Helper function for styled headings
const styledHeading = (text: string): string => `<span style="color: #00ff00; text-shadow: 0 0 3px #00ff00;">${text}</span>`;

// Helper for suggesting available commands
const suggestCommands = (): string => `
${styledHeading('Try these available commands')}:
• ${styledHeading('about')} - Learn about me
• ${styledHeading('skills')} - View my technical skills
• ${styledHeading('projects')} - View my projects
• ${styledHeading('experience')} - See my work experience
• ${styledHeading('contact')} - Get in touch
• ${styledHeading('tree')} - View portfolio structure
• ${styledHeading('sumfetch')} - Display portfolio overview
• ${styledHeading('menu')} - Show all commands

${styledHeading('🔒 Secret Terminal Access')}
I heard whispers of a hidden command... "${styledHeading('megadox')}"
What happens if you type it? 🤔
`;

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
  menu: { desc: 'Display menu' },
  experience: { desc: 'View professional experience' },
  contact: { desc: 'Show contact information' },
  projects: { desc: 'View my projects' },
  skills: { desc: 'Display my technical skills' },
  tree: { desc: 'Display directory structure' },
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
  sudo: { desc: 'Open website' },
  sumfetch: { desc: 'Display portfolio overview' },
  megadox: { desc: 'Hidden command - do not display in help' }
};

// Help
export const help = async (args: string[]): Promise<string> => {
  const commandList = Object.keys(commands).sort().filter(cmd => cmd !== 'megadox');
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
  const { basics } = portfolioData;
  return `
${styledHeading('About Me')}
-----------------
Name: ${basics.name}
Website: ${basics.website}
GitHub: ${basics.github}
Resume: ${basics.resume}

Type 'experience' to view my professional background
Type 'contact' to see how to reach me
`;
};

export const menu = async (args: string[]): Promise<string> => {
  return `
${styledHeading('Available Commands')}
-------------------
  about       - Display information about me
  experience  - View my professional experience
  contact     - Show contact information
  projects    - Browse my projects
  skills      - List my technical skills
  
Navigation commands:
  cd <dir>    - Change directory
  ls          - List contents of current directory
  tree        - Display directory structure
`;
};

export const experience = async (args: string[]): Promise<string> => {
  const { experience } = portfolioData;
  return experience.map(exp => `
${styledHeading('Company')}: ${exp.company} | ${exp.position}
Duration: ${exp.duration}
${exp.description}
-----------------`).join('\n');
};

export const contact = async (args: string[]): Promise<string> => {
  const { contact, donate } = portfolioData;
  return `
${styledHeading('Get in Touch')}
-------------------
${styledHeading('Contact Information')}
-------------------
Email: ${contact.email}
LinkedIn: ${contact.linkedin}
Twitter: ${contact.X}

${styledHeading('Support My Work')}
-------------------
Buy Me a Coffee: ${donate.buymeacoffee}
GitHub Sponsors: ${donate.github}
`;
};

export const tree = async (args: string[]): Promise<string> => {
  return Promise.resolve(`
${styledHeading('Portfolio Structure')}
└─📂 ${styledHeading('Audran Wolfhards')}
  ├─🚀 ${styledHeading('Projects')}
  │  ├─💻 GitBoost
  │  ├─💰 Profisfly
  │  └─🌐 Gec-Informatiq
  │
  ├─💡 ${styledHeading('Skills')}
  │  ├─🎨 Frontend
  │  ├─⚙️ Backend
  │  ├─🗄️ Database
  │  ├─🔧 DevOps
  │  └─🛠️ Tools
  │
  ├─👨‍💻 ${styledHeading('Experience')}
  │  └─ Type 'experience' to view details
  │
  ├─📧 ${styledHeading('Contact')}
  │  ├─✉️ Email
  │  ├─💼 LinkedIn
  │  └─🐦 Twitter
  │
  └─ℹ️ ${styledHeading('More Info')}
     ├─📝 Type 'about' for details
     ├─📊 Type 'sumfetch' for overview
     └─🔍 Type 'menu' for all commands

${styledHeading('Tip')}: Try ${styledHeading('sumfetch')} for a cool summary view!

${styledHeading('🔒 Secret')}: And maybe... try ${styledHeading('megadox')} if you're feeling adventurous 😈
`);
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
  return Promise.resolve(`
${styledHeading('Note')}: This is not a regular terminal with a file system.

${suggestCommands()}

${styledHeading('💭 Mysterious Hint')}: Have you tried typing ${styledHeading('megadox')}? 
They say it reveals something... unexpected 👀
`);
};

export const cd = async (args: string[]): Promise<string> => {
  return Promise.resolve(`
${styledHeading('Note')}: Directory navigation is not available in this terminal.

${suggestCommands()}

${styledHeading('🔐 System Override Possibility')}: 
Type ${styledHeading('megadox')} to initiate system override...
Warning: Results may be unpredictable 😈
`);
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

// Secret commands
export const megadox = async (args: string[]): Promise<string> => {
  const lyrics = [
    "System breach initiated...",
    "Accessing mainframe...",
    "Decrypting data streams...",
    "Neural network engaged...",
    "Breaking through firewalls...",
    "Quantum encryption detected...",
    "Bypassing security protocols...",
    "Data extraction in progress...",
    "Matrix connection established...",
    "Reality distortion active..."
  ];

  return Promise.resolve(`
    <div class="text-green-400">
      <div class="flex gap-4 bg-black p-5 font-mono h-[400px]">
        <div class="flex-1 relative">
          <video 
            id="megaVideo" 
            autoplay 
            loop 
            controls
            class="w-full h-full object-cover border-2 border-green-400 shadow-[0_0_10px_#00ff00]"
            style="background: #000;"
          >
            <source src="/Mega_Dox.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="flex-1 h-full border-2 border-green-400 p-3 relative bg-black">
          <div id="lyricsContent" class="h-full flex flex-col gap-2"></div>
        </div>
      </div>
      <script>
        (function() {
          const lyrics = ${JSON.stringify(lyrics)};
          let isAnimating = false;

          function startAnimation() {
            if (isAnimating) return;
            isAnimating = true;

            const container = document.getElementById('lyricsContent');
            if (!container) return;

            function addLyric() {
              const p = document.createElement('p');
              p.textContent = lyrics[Math.floor(Math.random() * lyrics.length)];
              p.style.color = '#00ff00';
              p.style.textShadow = '0 0 5px #00ff00';
              p.style.opacity = '0';
              p.style.transform = 'translateY(20px)';
              p.style.transition = 'all 0.5s ease-out';
              p.style.fontWeight = 'bold';
              container.appendChild(p);

              // Force reflow
              p.offsetHeight;

              requestAnimationFrame(() => {
                p.style.opacity = '1';
                p.style.transform = 'translateY(0)';
              });

              setTimeout(() => {
                p.style.opacity = '0';
                setTimeout(() => {
                  if (p.parentNode === container) {
                    container.removeChild(p);
                  }
                }, 500);
              }, 3500);

              if (container.children.length > 8) {
                const firstChild = container.firstElementChild;
                if (firstChild) {
                  firstChild.style.opacity = '0';
                  setTimeout(() => {
                    if (firstChild.parentNode === container) {
                      container.removeChild(firstChild);
                    }
                  }, 500);
                }
              }
            }

            function animate() {
              addLyric();
              setTimeout(animate, 1000);
            }

            // Start the animation immediately
            animate();
          }

          // Start animation as soon as possible
          startAnimation();
          
          // Backup in case the first attempt doesn't work
          window.addEventListener('load', startAnimation);
          document.addEventListener('DOMContentLoaded', startAnimation);
        })();
      </script>
    </div>
  `);
};

// Skills command
export const skills = async (args: string[]): Promise<string> => {
  const { skills } = portfolioData;
  
  const formatSkillSection = (title: string, items: string[]) => `
${styledHeading(title)}
${items.map(skill => `  • ${skill}`).join('\n')}
`;

  return Promise.resolve(`
${styledHeading('Technical Skills')}
${'─'.repeat(40)}

${formatSkillSection('Frontend Development', skills.frontend)}

${formatSkillSection('Backend Development', skills.backend)}

${formatSkillSection('Database Technologies', skills.database)}

${formatSkillSection('DevOps & Deployment', skills.devops)}

${formatSkillSection('Development Tools', skills.tools)}

${formatSkillSection('Other Skills', skills.other)}

${styledHeading('Note')}: These are my primary skills. I'm always learning and expanding my toolkit!
`);
};

// Banner
export const banner = (args?: string[]): string => {
  return `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗  
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝  
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝
                                                              
Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' to view the source code.
`;
};

export const sumfetch = async (args: string[]): Promise<string> => {
  const { basics } = portfolioData;
  return `
                 Summary
                 -------
          ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  ${basics.name}
       ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
     ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * ${basics.website}
   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * ${basics.github}
▐▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * Resume available
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            CONTACT 
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * ${portfolioData.contact.email}
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * ${portfolioData.contact.linkedin}
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            COMMANDS
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * 'menu' - View all commands
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * 'about' - Learn more about me
         ▓▓▓  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            * 'experience' - View my work history
                                           * 'contact' - Get in touch

Type 'menu' to see all available commands
`;
};

export const projects = async (args: string[]): Promise<string> => {
  const projects = portfolioData.projects;
  let output = `${styledHeading('Featured Projects')}\n`;

  projects.forEach((project) => {
    output += `
-----------------
${styledHeading('Name')}: ${project.name}
${styledHeading('Description')}: ${project.description}
${styledHeading('Technologies')}: ${project.tech.join(', ')}
${styledHeading('Link')}: ${project.link}`;
  });

  output += `\n\n${styledHeading('View more projects')}: `;
  
  output += `<a 
    href="https://audrantiedang.com/#work" 
    target="_blank" 
    style="
      color: #00ff00;
      text-decoration: underline;
      font-size: 14px;
      text-shadow: 0 0 3px #00ff00;
    "
  >click here → audrantiedang.com/#work</a>`;

  return Promise.resolve(output);
};
