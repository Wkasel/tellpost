const { PuppeteerController } = require("puppeteer-core-controller");
const ipsum = require("@earthtone/prisoner-ipsum");
const pptc = new PuppeteerController();
const textarea_tell = "textarea";
const SubmitBtn = ".css-76zvg2 ";

(async () => {
  for (let i = 0; i < 100000; i++) {
    await pptc
      .initWith({
        headless: false,
      })
      .withMaxSizeWindow()
      .withCursor()
      .navigateTo("https://tellonym.me/Clovishighconfessions")
      .hover(textarea_tell)
      .click(textarea_tell)
      .typeText(ipsum.ipsum())
      .hover(SubmitBtn)
      .click(SubmitBtn)
      .wait(3000)
      .close();
  }
})();
