import { existsSync, readFileSync } from "node:fs";

const pages = [
  "index.html",
  "buy.html",
  "tokenomics.html",
  "transparency.html",
  "contract-readiness.html",
  "exchange-data-room.html",
  "policies.html",
  "launch-readiness.html",
  "launch-status.html",
];

const localHrefPattern = /(?:href|src)="([^"]+)"/g;
const requiredNavLabels = [
  "Home",
  "Buy guide",
  "Tokenomics",
  "Transparency",
  "Contract readiness",
  "Exchange data room",
  "Policies",
  "Launch readiness",
];

function isExternal(reference) {
  return /^(https?:|mailto:|tel:|#)/.test(reference);
}

for (const page of pages) {
  if (!existsSync(page)) {
    throw new Error(`Missing page: ${page}`);
  }

  const html = readFileSync(page, "utf8");
  const references = [...html.matchAll(localHrefPattern)].map((match) => match[1]);

  for (const reference of references) {
    if (isExternal(reference)) {
      continue;
    }

    const path = reference.split("#")[0] || "index.html";

    if (!existsSync(path)) {
      throw new Error(`${page} references missing local file: ${path}`);
    }
  }

  if (page !== "index.html") {
    for (const label of requiredNavLabels) {
      if (!html.includes(`>${label}<`)) {
        throw new Error(`${page} is missing nav label: ${label}`);
      }
    }
  }

  console.log(`${page}: ok`);
}

console.log("Static site validation passed");
