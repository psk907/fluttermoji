import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';
import 'fluttermojiController.dart';

/// This widget renders the Fluttermoji of the user on screen
///
/// Accepts a [radius] which defaults to 75.0
/// and a [backgroundColor] which defaults to blueAccent
///
/// Advice the users to set up their Fluttermoji first to avoid unexpected issues.
class FluttermojiCircleAvatar extends StatelessWidget {
  final double radius;
  final Color? backgroundColor;
  FluttermojiCircleAvatar({Key? key, this.radius = 75.0, this.backgroundColor})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (backgroundColor == null)
      CircleAvatar(radius: radius, child: buildGetX());
    return CircleAvatar(
        radius: radius, backgroundColor: backgroundColor, child: buildGetX());
  }

  GetX<FluttermojiController> buildGetX() {
    return GetX<FluttermojiController>(
        init: FluttermojiController(),
        autoRemove: false,
        builder: (snapshot) {
          if (snapshot.fluttermoji.value.isEmpty) {
            return CupertinoActivityIndicator();
          }
          return SvgPicture.string(
            snapshot.fluttermoji.value,
            height: radius * 1.6,
            semanticsLabel: "Your Fluttermoji",
            placeholderBuilder: (context) => Center(
              child: CupertinoActivityIndicator(),
            ),
          );
        });
  }
}
