module.exports = {
  get AbbottFramework() { return require(__dirname + '/lib/abbott'); },
  get IntentFlowHandler() { return require(__dirname + '/lib/core/intent-flow-handler'); },
  get logging() { return require(__dirname + '/lib/logging'); }
};