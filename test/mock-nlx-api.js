const express = require('express')
const app = express()
const port = 3131

app.get('/haarlem/Basisregistratiepersonen/RaadpleegIngeschrevenPersoonNAW', (req, res) =>
  res.send(JSON.stringify(
    {
      'voorletterAanschrijving': 'E',
      'voornamen': 'Ernie',
      'voorvoegselGeslachtnaam': '',
      'geslachtsnaam': 'man',
      'geslachtsaanduiding': 'Dhr',
      'aanschrijfwijze': 'Dhr',
      'geboorteDatum': '2019-01-09T15:43:10Z',
      'verblijfsadres': {
        'periodeGeldigheid': {},
        'identificatieNummerAanduiding': 0,
        'postcode': '1001AB',
        'huisnummer': 23,
        'huisletter': '',
        'huisnummertoevoeging': '',
        'locatiebeschrijving': '',
        'naamOpenbareRuimte': '',
        'woonplaatsnaam': 'Haarlem',
        'woonplaatsIdentificatie': '',
        'straatnaam': 'Sesamstraat'
      },
      'adresbuitenland': {
        'landcode': {}
      },
      'burgerservicenummer': 123123123,
      'aanduidingNaamgebruik': '',
      'aanhefAanschrijving': '',
      'voornamenAanschrijving': '',
      'geslachtsnaamAanschrijving': '',
      'adelijkeTitelOfPredikant': '',
      'geboorteplaats': 'Haarlem',
      'geboorteland': 'Nederland',
      'ouder': [
        {}
      ],
      'partner': [
        {}
      ],
      'overlijden': {
        'overlijdenPlaats': '',
        'overlijdenLand': '',
        'overlijdensdatum': '2019-01-09T15:43:10Z'
      },
      'telefoonnummer': '06123123123',
      'faxnummer': '',
      'emailadres': 'ernie@example.com',
      'verblijfstitel': {
        'omschrijving': '',
        'code': '',
        'beginDatumGeldigheid': '2019-01-09T15:43:10Z',
        'eindDatumGeldigheid': '2019-01-09T15:43:10Z'
      }
    }
  ))
)

app.listen(port, () => console.log(`Mock NLX server listening on ${port}!`))
