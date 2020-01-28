//import Raven from "raven-js";

function init() {
  // Raven.config("https://55ee4e07757b48648fe00d18fd32a59a@sentry.io/1313117", {
  //   release: "1-0-0",
  //   environment: "development-test"
  // }).install();
}

function log(error) {
  console.error(error);
  // Raven.captureException(error);
}

export default {
  init,
  log
};
