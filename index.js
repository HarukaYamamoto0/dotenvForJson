import { readFileSync } from "fs";
import { resolve } from "path";

function loadJson(path = "config.json") {
  const file = readFileSync(resolve(process.cwd(), path), "utf8");
  const jsonFile = JSON.parse(file);

  for (const key in jsonFile) {
    const value = jsonFile[key];

    process.env[key] =
      typeof value === "object" ? JSON.stringify(value) : String(value);
  }
}

export default loadJson;
