# Other Functions

## waitForFirstLoadToFinish

- Returns: `Promise<void>`

In case a loli spec has already been loaded, this function will
resolve immediately. If no valid loliSpec has been fetched yet
**and** a loading approach is in progress, this function will wait
for this running loading approach to end.

When this function resolves, it does not necessarily mean that
the loading succeeded.

Please use the callbacks to be informed about loading failures and successes.

## triggerSpecReload

- Returns: `Promise<void>`

Triggers a (re)load of the specification using the spec loader
internally.

Returns a promise that resolves when the internal load attempt
with the spec loader finishes/fails. The promise will never reject.
