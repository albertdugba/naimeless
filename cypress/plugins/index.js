/* eslint-disable import/no-anonymous-default-export */
/// <reference types="cypress" />

import cypressReplay from '@replayio/cypress'
export default (on, config) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('cypress-log-to-output').install(on)

  cypressReplay(on, config)

  return config
}
