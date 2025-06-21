import chalk from 'chalk';
import player from 'play-sound';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup __dirname since we are in ES module format
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Audio player
const play = player();

// Spooky sound file paths
const sounds = [
  path.join(__dirname, 'sounds', 'thunder.mp3'),
  path.join(__dirname, 'sounds', 'whisper.mp3'),
  path.join(__dirname, 'sounds', 'creak.mp3'),
  path.join(__dirname, 'sounds', 'scream.mp3'),
];

function playRandomSound() {
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  play.play(sound, (err) => {
    if (err) console.error('Sound error:', err);
  });
}

// Haunted mansion code (same as before)
const hauntedMansion = chalk.gray(`
                 |||||||
                 |     |
                 |  🕯  |
              ___|     |___
             /   |     |   \\
            /____|_____|____\\
            | [] [] [] [] [] |
            |               |
         ___|      👁️      |___
        /   |             |   \\
       /    |      🔥      |    \\
      /_____|_____________|_____\\
      |   _____   |   _____   |
      |  |     |  |  |     |  |
      |  |_____|  |  |_____|  |
      |___________|___________|
         |  |           |  |
         |__|           |__|
       ~~~~~~~~~~~~~~~~~~~~~~~
          A shadow stirs inside...
`);

const subjects = [
  "A light flickers in the attic",
  "A door creaks on its own",
  "Footsteps echo in the hall",
  "A cold breath brushes your neck",
  "The chandelier swings silently"
];

const events = [
  "the mirror cracks with no reflection",
  "a child’s laughter fills the silence",
  "your name appears in the dust",
  "the portraits begin to blink",
  "a piano plays itself"
];

const endings = [
  "do not look behind you.",
  "leave before the clock strikes 13.",
  "the house does not like guests.",
  "it remembers everyone who enters.",
  "your key won't work twice."
];

const triggers = [
  chalk.redBright("🔔 A bell tolls in the basement."),
  chalk.magenta("👻 A ghost appears briefly in the mirror."),
  chalk.yellowBright("⚡ Lightning flashes, but there’s no storm."),
  chalk.cyan("💨 A cold wind rushes under the door."),
  chalk.greenBright("🕸️ Cobwebs form instantly across the ceiling."),
  chalk.gray("🔦 Your flashlight flickers… and dies."),
  chalk.red("🔪 A knife falls from the kitchen rack."),
  chalk.whiteBright("🕯️ The candle goes out — then lights itself again.")
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateHauntedMessage() {
  const subject = getRandom(subjects);
  const event = getRandom(events);
  const ending = getRandom(endings);
  const trigger1 = getRandom(triggers);
  const trigger2 = getRandom(triggers);

  console.log(chalk.cyanBright("\n🏚 Haunted Mansion Prophecy 🏚\n"));
  console.log(hauntedMansion);
  console.log(chalk.green(`${subject}, ${event}, ${ending}\n`));
  console.log(chalk.bgBlackBright("🩸 Haunting Triggers:"));
  console.log(trigger1);
  console.log(trigger2);
  console.log();

  // Play a sound effect
  playRandomSound();
}

generateHauntedMessage();
