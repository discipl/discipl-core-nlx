/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import NLXConnector from '../src/index'

describe('disciple-nlx-connector', () => {
  it('should return the query from the demo nlx environment', async () => {
    // This test requires the mock outway to run.
    let nlxConnector = new NLXConnector()
    nlxConnector.configure('http://localhost:4080')

    let identifier = await nlxConnector.claim(null, { 'path': '/haarlem/Basisregistratiepersonen/RaadpleegIngeschrevenPersoonNAW', 'params': { 'burgerservicenummer': 123123123 } })

    let result = await nlxConnector.get(identifier)
    expect(result.value.verblijfsadres.woonplaatsnaam).to.equal('Haarlem')
  })
})
