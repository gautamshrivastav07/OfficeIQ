This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Run the project (detailed)

Follow these steps from the project root to run OfficeIQ locally.

1. Install system prerequisites
	- Node.js (use the version specified in `package.json` engines or a recent LTS). Example with nvm:
	  ```bash
	  nvm install --lts
	  nvm use --lts
	  ```
	- Watchman (macOS recommended): `brew install watchman`
	- Java JDK and Android SDK (for Android builds)
	- Xcode and CocoaPods (for iOS builds on macOS)

2. Install JS dependencies
	```bash
	# Using npm
	npm install

	# OR using Yarn
	yarn install
	```

3. Environment configuration
	This project uses `react-native-config` for environment variables.

	- Create a `.env` file in the project root.
	- Add the required values in the following format:
		```env
		GEMINI_API_KEY=your_gemini_api_key_here
		```
	- After updating the `.env` file, restart Metro and rebuild the app so the new values are picked up.
	- Keep secrets out of version control. Make sure `.env` is listed in your `.gitignore` file.

4. iOS native dependencies (macOS only)
	```bash
	# From ios/ folder
	cd ios
	# If you use Bundler (recommended), run:
	bundle install
	bundle exec pod install

	# OR without Bundler
	pod install
	cd ..
	```

5. Start Metro with cache reset (recommended when first run or after native changes)
	```bash
	npx react-native start --reset-cache
	```

6. Run the app
	- iOS (macOS):
	  ```bash
	  npx react-native run-ios
	  ```
	  Or open `ios/OfficeIQ.xcworkspace` in Xcode and run on a simulator/device.

	- Android:
	  ```bash
	  npx react-native run-android
	  ```
	  Make sure an emulator is running or a device is connected with USB debugging enabled.

7. Common troubleshooting commands
	- Reset Metro & clear caches:
	  ```bash
	  npx react-native start --reset-cache
	  watchman watch-del-all && rm -rf $TMPDIR/react-* && rm -rf node_modules && npm install
	  ```
	- iOS clean (in ios/):
	  ```bash
	  xcodebuild clean
	  rm -rf Pods/ Podfile.lock
	  pod install
	  ```

8. Environment hints
	- If you see "AppRegistry.registerComponent" or module load errors, ensure Metro is started from the project root and rebuild the app.
	- For Apple Silicon macs, you may need to run CocoaPods under the Intel architecture if pods fail (`arch -x86_64 pod install`).

If you want, I can add a small `CONTRIBUTING.md` or `DEVELOPMENT.md` with platform-specific tips (Android emulator setup, Fastlane, code signing). 

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
