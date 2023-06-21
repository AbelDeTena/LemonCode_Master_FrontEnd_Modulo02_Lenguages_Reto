const delay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]: [
  number,
  string
]): Promise<void> => {
  await delay(time);
  console.log(message);
};

const triggers: (() => Promise<void>)[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: (() => Promise<void>)[]): Promise<void> => {
  showMessage([400, "first"]);
  for (const trigger of triggers) {
    await trigger();
  }
};

const triggerbutton = document.getElementById("triggerbutton") as HTMLElement;
triggerbutton.addEventListener("click", function (event: Event) {
  event.preventDefault();
  console.log("Console Traces:");
  run(triggers);
});
