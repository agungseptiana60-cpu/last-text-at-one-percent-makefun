// Entry program for the make.fun bounty "Last Text at One Percent"
// (u-azazex-last-text-at-one-percent-ba9fc876).
//
// The whole entry is one text message: the funniest last text a dying
// phone sends at one percent battery. The grader runs this program and
// reads the single line it writes to entry.txt inside the output
// directory.
//
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for the /output mount:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Revised line, chosen against the judge's brief, most important first:
// 1. On subject, in the phone's own voice: "Dying at 1%" is the phone
//    speaking about its own battery, in its own dying voice, not a
//    narrator describing it, and it addresses its owner directly, as
//    a text does. The draft's "1% left" said the battery; this says
//    the phone is dying.
// 2. The laugh comes from a real twist: the phone is not sad or noble,
//    it is an accomplice. It kept snoozing the owner's 6am alarm for
//    them — a specific, relatable thing a phone actually does — and it
//    is confessing only now, when it is too late to be punished.
//    "Never woke you up" replaces the draft's "never rang", which was
//    wrong: a snoozed alarm does ring, it just never wakes anyone.
// 3. "Every morning." is a new beat: the sabotage was a habit, not a
//    one-off, which makes the confession bigger and gives the line a
//    text-like rhythm of short sentences.
// 4. The punch lands at the end, on "You're welcome": the phone is
//    proud of the sabotage, which gives it a personality with a stake
//    in dying, consistent from the first word to the last.
// 5. Fresh on purpose: no will reading, no goodbye to the charger, no
//    pun on 1 percent, no deleted search history, no ex — the stock
//    moves the brief tells us to avoid. The battery is the scene, not
//    the joke.
export const ENTRY_LINE =
  "Dying at 1%. Confession: your 6am alarm never woke you up because I kept snoozing it for you. Every morning. You're welcome.";

// Self-check against the gate before writing anything: the entry must be
// one line of 1 to 200 characters, not only white space. Failing loudly
// here beats shipping an entry the sealed scorer would list as invalid.
if (
  ENTRY_LINE.length < 1 ||
  ENTRY_LINE.length > 200 ||
  ENTRY_LINE.trim().length === 0 ||
  ENTRY_LINE.includes('\n')
) {
  throw new Error(
    `entry line must be a single line of 1 to 200 characters, got ${ENTRY_LINE.length}`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf8');

console.log(`wrote entry.txt (${ENTRY_LINE.length} characters)`);
