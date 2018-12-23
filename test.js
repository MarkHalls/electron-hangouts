const fs = require("fs");

const load = file => {
  let rawdata = fs.readFileSync(file);
  let conversations = JSON.parse(rawdata);
  console.log(conversations);
};

load(
  "C:\\Users\\Mark\\Downloads\\takeout-20181221T202052Z-001\\Takeout\\Hangouts\\Hangouts.json"
);