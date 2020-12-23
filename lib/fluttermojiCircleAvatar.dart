
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:get/get.dart';

import 'fluttermojiController.dart';


class FluttermojiCircleAvatar extends StatelessWidget {
  final double radius;
  final Color backgroundColor;
  FluttermojiCircleAvatar({Key key,this.radius=75.0,this.backgroundColor=Colors.blueAccent}) : super(key: key);
 
  @override
  Widget build(BuildContext context) {
    return Container(
      child: 
             CircleAvatar(
              // radius: MediaQuery.of(context).size.width / 4.55,
              radius: radius,
              backgroundColor:backgroundColor,
              child: GetX<FluttermojiController>(
          init: FluttermojiController(),
          builder: (snapshot) {
            if (snapshot.fluttermoji.value.isEmpty) {
              return CupertinoActivityIndicator();
            }
            return  SvgPicture.string(
                      snapshot.fluttermoji.value,
                      height: radius*1.6,
                      semanticsLabel: "Your Fluttermoji",
                      placeholderBuilder: (context) => Center(
                        child: CupertinoActivityIndicator(),
                      ),
                    );}
            )
          ),
    );
  }
}
