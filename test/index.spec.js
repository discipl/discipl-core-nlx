/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import { expect } from 'chai'
import NLXConnector from '../src/index'
import axios from 'axios'
import sinon from 'sinon'

describe('disciple-nlx-connector', () => {
  it('should present a name', async () => {
    let nlxConnector = new NLXConnector()
    expect(nlxConnector.getName()).to.equal('nlx')
  })

  it('should make the correct call', async () => {
    let nlxConnector = new NLXConnector()
    nlxConnector.configure('http://localhost:1337')
    let getStub = sinon.stub(axios, 'get').returns({ 'data': { 'value': { 'woonplaats': 'Sesamstraat' } } })
    let requestSpecification = { 'path': '/haarlem/Basisregistratiepersonen/RaadpleegIngeschrevenPersoonNAW', 'params': { 'burgerservicenummer': 1337 } }

    let identifier = await nlxConnector.claim(null, requestSpecification)

    expect(getStub.callCount).to.equal(1)
    expect(getStub.args[0]).to.deep.equal(['http://localhost:1337/haarlem/Basisregistratiepersonen/RaadpleegIngeschrevenPersoonNAW', { 'params': { 'burgerservicenummer': 1337 } }])

    let result = await nlxConnector.get(identifier)
    expect(result.value.woonplaats).to.equal('Sesamstraat')
  })
})
