# React Native Put API Update User Data Demo App

This React Native project is a comprehensive demonstration of integrating and utilizing the PUT API method to update user data. The application fetches user data from a server and allows users to edit their details seamlessly. The code features a clean and modular structure for easy understanding and modification.

## Features
- **Screenshots:** See below for visual representations of the app's functionality.
- **Demo App:** Ideal for learning and understanding PUT API integration in React Native.
- **Fetch User Data:** Retrieve user data from a remote server.
- **Edit User Information:** Enable users to modify their name, age, and email.
- **Update User Data:** Utilize PUT requests to update user information on the server.
- **User Interface:** A clean and responsive user interface.

### Screenshots

| Home Screen | Loading Indicator | User Data| Edit User | Updated User Data  |
|-------------------|-------------------|-------------------|-------------------|-------------------|
| <img src="assets/home_screen.png" width="250"> | <img src="assets/screenshot_loading.png" width="250"> | <img src="assets/screenshot_userData.png" width="250"> | <img src="assets/screenshot_editUser.png" width="250"> | <img src="assets/screenshot_updatedUserData.png" width="250"> |

### Demo

| *Demo gif* |
|---------------|
| <img src="assets/demo.gif" width="250"> |

## Project Structure

The project is structured with the following key components:

| Component              | Description                                                                         |
|------------------------|-------------------------------------------------------------------------------------|
| App Component          | The main component that orchestrates the functionality.                             |
| User Data Fetching     | Utilizes the `fetchUserData` function to fetch user data from the server.             |
| Edit User Data         | Implements the ability for users to edit their information using PUT requests.        |
| Another Screen         | Another component or screen for additional functionality.                             |
| Styling                | Utilizes StyleSheet for consistent and visually appealing UI.                        |

## Technologies Used

- React Native
- TypeScript

## How to Use

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/amoltdhage/ReactNative-PutAPI_UpdateUserDataDemoApp.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd ReactNative-PutAPI-UpdateUserDataDemoApp
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    ```

4. **Run the App (Android):**
    ```bash
    npx react-native run-android
    ```

5. **Run the App (iOS):**
    ```bash
    npx react-native run-ios
    ```

6. **Explore and Learn:**
   - Fetch user data by tapping "Fetch User Data" and observe the delayed fetch.
   - Edit user information by tapping "Edit" next to a user and update the data.

This project provides a practical example of integrating PUT API functionality with React Native, making it an excellent resource for both learning and reference.









This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.

