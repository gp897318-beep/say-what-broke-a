// Say What Actually Broke — "The database is gone."
// One line of software error copy that tells the brutal truth:
// the database is gone, so restore the backup and find out who did it.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry is a single line: no trailing newline, so the file is
// exactly the 112 characters the bounty asks for — nothing more.
const entry =
  "The database is gone. Not slow, not corrupt — gone. Restore last night’s backup, then ask who dropped the table.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
