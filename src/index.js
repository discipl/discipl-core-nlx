import crypto from 'crypto-js'
import axios from 'axios'
import { BaseConnector } from 'discipl-core-baseconnector'

class NLXConnector extends BaseConnector {
  constructor () {
    super()
    this.cache = {}
    this.outwayEndpoint = ''
  }

  getName () {
    return 'nlx'
  }

  configure (outwayEndpoint) {
    this.outwayEndpoint = outwayEndpoint
  }

  async getSsidOfClaim (reference) {
    throw new TypeError('getSsidOfClaim is not implemented')
  }

  async getLatestClaim (ssid) {
    throw new TypeError('getLatestClaim is not implemented')
  }

  async newSsid () {
    throw new TypeError('newSsid is not implemented')
  }

  /**
   * Claim does a call to the requested NLX backend and saves the result to be retrieved by get
   *
   * @param {string} ssid - Unused for this connector
   * @param {object} data - Specifies the request to be made to NLX
   * @param {string} data.path - Path to be appended to the outway endpoint. This should be of the form /<organisation>/<service>/<endpoint
   * @param {object} data.params - Query parameters to be added to the request
   * @returns {Promise<string>} Identifier to retrieve the result
   */
  async claim (ssid, data) {
    let response = await axios.get(this.outwayEndpoint + data.path, { 'params': data.params })

    let index = crypto.enc.Base64.stringify(crypto.lib.WordArray.random(64))

    this.cache[index] = response.data

    return index
  }

  async get (reference, ssid = null) {
    return this.cache[reference]
  }

  async subscribe (ssid) {
    throw new TypeError('Subscribe is not implemented')
  }
}

export default NLXConnector
