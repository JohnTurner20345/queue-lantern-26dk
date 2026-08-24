const project = { name: "queue-lantern-26dk", owner: "JohnTurner20345", profile: "0035" };

export function summarize(items = []) {
  return items.reduce((total, item) => total + String(item).length, 0);
}

export function describe() {
  return project.name + " ready for " + project.owner;
}

console.log(describe(), summarize([project.name, project.owner]));
