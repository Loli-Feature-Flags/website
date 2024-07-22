# Interface

## unmount

Unmounts the Loli UI from the container, removes all injected font style tags, and
removes all injected CSS style tags.

## updateSpec

- Optional
- Parameters:
    - `spec: LoliSpec | object | string | null | undefined`
      - Loli spec to show. Either JSON string, object, or null/undefined.

Allows you to override the specification the UI shall display. This may be necessary
when polling new versions or when displaying updates from others.

If the given spec is nullish, the UI is reset and displays again the "create new spec" screen.

## updateNavigationState

- Optional
- Parameters:
    - `navigationState: NavigationState | null | undefined`
      - New navigation state to display or nullish value to reset navigation state.

This function updates the internal UI navigation state with the given one. If null is supplied,
the UI will show the following:
- the "create new spec" screen (if no spec is given),
- the feature flags tab (if a spec is given),
- the JSON editor view (in case the given spec has severe issues)

## updateAppearance

- Optional
- Parameters:
    - `newAppearance: LoliUiAppearance`
      - New appearance setting to use.

This function update's the appearance setting. This is related to
the "appearance" option you can set on mount.

If set the appearance to "system", the UI will automatically show the
"light" or "dark" theme depending on the system's appearance. If this value
is "light" or "dark" instead, the UI uses a fixed "light" respectively "dark" appearance.
