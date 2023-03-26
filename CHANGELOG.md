## [1.0.2] - 26/03/2023
 * Upgrades dependencies

## [1.0.1] - 25/10/2022
 * Minor bug fix [#22](https://github.com/psk907/fluttermoji/pull/22#issue-1250729612)

## [1.0.0] - 15/02/2022
 * Adds `FluttermojiThemeData` and `FluttermojiSaveWidget` to the library.
 * Fixes some visual glithes in the appbar of the `FluttermojiCustomizer`.
 * Minor internal refactoring.
 * Updates dependency versions
 * BREAKING CHANGES 
   *  The customizer widget no longer has the top row with "Customize" and the save button, and the `showSaveWidget` property has been removed.
   *  The widget's do not set to Material light/dark system theme automatically anymore. This must be implemented using the [theme] property.
   *  Refer the doc comments for more details.

*****

## [0.2.3] - 03/12/2021

 * Updates dependency versions

## [0.2.2] - 11/10/2021

 * Adds toggle to show/hide save button widget in `FluttermojiCustomizer` widget.
  
## [0.2.1] - 03/05/2021

 * Fixes bug where preview and avatars don't revert to saved version after unsaved edits
 * Adds `clearFluttermoji()` to FluttermojiFunctions
 * Some optimizations

## [0.2.0] - 08/04/2021

 * Updates dependencies to their null-safe stable version
 * Migrates package to Null safety
 * Removes dead code

## [0.2.0-nullsafety.0] - 10/03/2021

 * Updated dependencies to their null-safe version
 * Migrated package to Null safety
 * Remove dead code

## [0.1.2+1] - 30/01/2021

 * (Hotfix) Cleared some lints for a cleaner code

## [0.1.2] - 19/01/2021

 * Fixed a bug in decodeFluttermojifromString()

## [0.1.1] - 01/01/2021

 * Added Material Dark theme support to FluttermojiCircleAvatar
 * Added screenshots to the README.md

## [0.1.0] - 24/12/2020

* Added documentation to many APIs and to the README.md as well.
* Created new utility functions to allow sharing of Fluttermojis to server/DB and decoding them for render using flutter_svg package.
* Fixed the bug on loading Fluttermoji on first launch.
* Fixed standalone customizer issues.
* Description updates
* Other minor changes and fixes.


## [0.0.1] - 23/12/2020

* Initial Release - documentation and instructions pending
