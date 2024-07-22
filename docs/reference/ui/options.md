# Options

## initialSpec

- Optional
- Type: `LoliSpec | object | string | null`

Optional Loli specification that shall be shown
when the UI is created. This can either be a
JSON string or an object.

If it is "null", the UI assumes no specification is present yet.

Then the UI will show a "Create a new specification" screen.

## initialNavigationState

- Optional
- Type: `NavigationState | null`

Optional initial UI navigation state.

If null is supplied, the UI will show the following:
- the "create new spec" screen (if no spec is given),
- the feature flags tab (if a spec is given),
- or the JSON editor view (in case the given spec has severe issues).

## hiddenViews

- Optional
- Type: `HideableView[]`
- Default value: `[]` (empty array: all views are visible)

Optional array of views to be hidden from the user.
If all views are hidden, the user sees a "no view accessible" screen.

## specChangeListener

- Optional
- Type: `SpecChangeListener`

Optional listener that is executed by the UI
whenever a change resulted in a new and changed spec version.

The listener receives the newest spec version.

If any change in the UI causes schema or semantic issues, this listener
will never be called.

## specIssueListener

- Optional
- Type: `SpecIssueListener`

Optional listener that is executed by the UI
whenever a change made in the UI causes results in an invalid
spec. This can mean the spec has either schema or semantic issues.
This listener also receives the issue type.

## navigationStateChangeListener

- Optional
- Type: `NavigationStateChangeListener`

Optional listener that is executed by the UI whenever the user
navigates to a different tab or modal. The listener
receives the newest NavigationState. The listener
can for example serialize the state and attach it as a query
parameter to the URL or save it to the localStorage.

## floatingZIndex

- Optional
- Type: `number`
- Default value: `2000`

Optional CSS z-index to be used for all floating elements
like select dropdowns, modals, or tooltips.

You may override this to prevent conflicts with floating elements
of your host application.

## appearance

- Optional
- Type: `LoliUiAppearance`
- Default value: `system`

Optional setting which color theme to display. If this is "system",
the UI will automatically show the "light" or "dark" theme
depending on the system's appearance. If this value is "light" or "dark"
instead, the UI uses a fixed "light" respectively "dark" appearance.
