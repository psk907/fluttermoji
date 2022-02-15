# fluttermoji  <img src="https://user-images.githubusercontent.com/37346450/103101129-1b9a2100-463c-11eb-8a94-b6fbe44bf00f.png" align="right" height="150" />
![Pub Version](https://img.shields.io/pub/v/fluttermoji) [![Generic badge](https://img.shields.io/badge/demo-LIVE-green.svg)](https://psk907.github.io/fluttermoji/) [![GitHub stars](https://img.shields.io/github/stars/psk907/fluttermoji?style=social)](https://github.com/psk907/fluttermoji/stargazers) [![GitHub stars](https://img.shields.io/badge/DM-me-blue?style=flat&logo=telegram)](https://t.me/psk907)

A light-weight and highly customizable SVG graphic set for Flutter, which provides a Customizer Widget, CircleAvatar and other utility functions.

This package provides you three easy-to-use widgets -

| Name | Description | Screenshot | 
|--------|----------|---------- |
|FluttermojiCircleAvatar | Use your fluttermoji anywhere in your Flutter app with a simple customizable widget. Supports material dark theme too.| ![1608830483994](https://user-images.githubusercontent.com/37346450/103071632-009ec100-45ea-11eb-97c4-96c9ec67e204.gif)
|FluttermojiCustomizer | A comprehensize UI to customize the user's fluttermoji. Offers previews of each individual component and whose looks can be tweaked with a `FluttermojiThemeData`|![1608827561239](https://user-images.githubusercontent.com/37346450/154008536-a687828c-dc9d-4a62-aa11-b800d4fb7763.jpg)
|FluttermojiSaveWidget | Renders a save button by default OR can be used as an [InkWell] wrapper for the [child] widget.|![1608827561239](https://user-images.githubusercontent.com/37346450/154008545-8325af7b-58a2-4419-8544-929ffbdbb9ff.jpg)

******
The appearance of the widgets can be tweaked with `FluttermojiThemeData`. It let's you change things like the customizer's background colours, the box decoration etc.
******

Use the given utility functions to send and receive Fluttermoji data from your server/DB efficiently.

| Function Prototype | Description | 
|------------------|---------------|
|String decodeFluttermojifromString(String encodedData)| Decode your string containing the attributes to a SVG and render it by enclosing this string with a SvgPicture.string() | 
| Future\<Map> encodeMySVGtoMap() | Encodes the local user's fluttermoji to a Map denoting the selected attributes |
|Future\<String> encodeMySVGtoString() | Encodes the local user's fluttermoji to a Map denoting the selected attributes , and stringifies the result before returning the value. | 
| Future<List<bool>> clearFluttermoji() | Erases local user's fluttermoji SVG String and selection from local storage |
	
SVG Assets used are derived from [getavataaars.com](https://getavataaars.com/) .

## Screenshots
###  Example app
<a href="https://psk907.github.io/fluttermoji" >Try out the demo on your browser now</a>
<br />
<br />
<img src="https://user-images.githubusercontent.com/37346450/103443014-fd0dd880-4c80-11eb-8955-309bfb66fb4c.jpg" height ="400" />
<img src="https://user-images.githubusercontent.com/37346450/103443015-fed79c00-4c80-11eb-8219-5edab76c9f0f.jpg" height="400" />
<img src="https://user-images.githubusercontent.com/37346450/103443018-01d28c80-4c81-11eb-8336-ebc19de61220.jpg" height="400" />

**Use them in your games or social media apps**

<a href="https://play.google.com/store/apps/details?id=com.statefullyfidgeting.tugofwar" ><img src="https://user-images.githubusercontent.com/37346450/103443017-00a15f80-4c81-11eb-8223-3404a35079aa.jpg" height="400" /></a>

## Usage Instructions
1. Depend on it by importing your package in the ```pubspec.yaml```  file.
	```yaml
	dependencies:
          fluttermoji: latest_version
	```
2. Add the following import to your .dart file
	```dart
	import 'package:fluttermoji/fluttermoji.dart';
	```
3. Add the FluttermojiCircleAvatar widget to display your Fluttermoji where needed.
	```dart
	FluttermojiCircleAvatar();
	```
4. To allow your users to personalize their Fluttermoji, add the following widget and pair it with the above one in your page.
	```dart
	FluttermojiCustomizer();
	```

That's all it takes, simple right ? The two widgets communicate with each other and update in real-time throughout your widget tree.

##  Usage Guidelines
The package offers a ton of features in the simplest way possible, however there are some points worth noting.

- `FluttermojiCircleAvatar` only renders the local user's avatar. To display the avatar of other users', you'll have to use the `SvgPicture.string()` method from `flutter_svg` .
- `FluttermojiCircleAvatar` would render a default avatar until customized and saved by the local user for the first time.
- Use the `canvaskit` renderer when building for web, the default `html` renderer will not work with SVGs.
- The fluttermoji's attributes are saved to local app/browser storage. Clearing app/browser data would mean clearing these attributes as well.
- You can create a `FluttermojiThemeData` instance to configure the look and feel of the widgets to your liking.

## Attributions

- SVG assets from [Fang-Pen Lin](getAvataars.com)'s  [GitHub repository](https://github.com/fangpenlin/avataaars-generator)
- Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
- Animated [GIF](https://user-images.githubusercontent.com/37346450/103071632-009ec100-45ea-11eb-97c4-96c9ec67e204.gif) designed by [Reesha Shenoy](https://github.com/reeshaa) 

## Community
If you find any issues or have some feedback, please raise the same on the GitHub repo or contact me directly.

Do leave a thumbs up if you liked it.


**Happy Fluttering ; )**
