# Peanut

Update the `gh-pages` branch to expose the compiled output of a Dart web app.

## How to use it
1. Install
```sh
dart pub global activate peanut
```

2. Setup gh-pages branch
```shell
git update-ref refs/heads/gh-pages origin/gh-pages
```

3. Define the configuration in the `peanut.yaml` file

4. Run
```sh
peanut

# or

flutter pub global run peanut
```

5. Push
```shell
git push origin --set-upstream gh-pages
```

## Links
- [GitHub repository](https://pub.dev/packages/peanut)
- [pub.dev package](https://pub.dev/packages/peanut)
