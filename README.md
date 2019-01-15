# discipl-core-nlx

This connector facilitates making calls to NLX.

The claim function does the actual call and stores the result in memory. The get function allows obtaining the actual result.

## Testing

Unit tests can be ran using `npm test`. A system test can be ran by using `npm run system-test`. 
The system tests require the NLX outway, which will be started using the `./system-test/start-outway.sh` script.
This requires a valid set of certificates in `./system-test/certs/`.
These can be obtained by following [these instructions](https://docs.nlx.io/preparing/certificates/).




