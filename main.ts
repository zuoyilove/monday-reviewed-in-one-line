// Monday, Reviewed in One Line — entrypoint (program/v1).
// Writes a single funny one-line review of the entrant's own Monday
// to /output/entry.txt: one line, no title, no explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "My Monday earned two stars: an inbox of 47 unread emails, three meetings I never agreed to, and a coffee machine that quit before 9 a.m. — would not relive.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");
