/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import NLXConnector from '../src/index'

describe('disciple-nlx-connector', () => {
  it('should present a name', async () => {
    let nlxConnector = new NLXConnector()
    expect(nlxConnector.getName()).to.equal('nlx')
  })

  it('should return the query from the mock', async () => {
    let nlxConnector = new NLXConnector()
    nlxConnector.configure('http://localhost:3131')

    let identifier = await nlxConnector.claim(null, { 'path': '/haarlem/Basisregistratiepersonen/RaadpleegIngeschrevenPersoonNAW', 'params': {} })

    let result = await nlxConnector.get(identifier)
    expect(result.verblijfsadres.woonplaatsnaam).to.equal('Haarlem')
  })
})
