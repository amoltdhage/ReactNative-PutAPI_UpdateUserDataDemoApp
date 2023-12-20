# React Native User Data Management App

This React Native project showcases a user data management system with robust integration of the PUT API method for updating user information. The application allows users to fetch data from a server, edit their details, and seamlessly update the server data. The code is structured for clarity and modularity, providing a practical example for learning and reference.

## Features

- **Screenshots:** Visual representations of the app's functionality.
- **Demo App:** Ideal for learning PUT API integration in React Native.
- **Fetch User Data:** Retrieve user data from a remote server.
- **Edit User Information:** Enable users to modify their name, age, and email.
- **Update User Data:** Utilize PUT requests to update user information on the server.
- **Validation:** Robust input validation to ensure data integrity during user editing.
  - Name: Validates that the name contains only alphabets and single spaces between words.
  - Age: Ensures that the age is a two-digit number between 10 and 99.
  - Email: Verifies the presence of a valid email address.
- **User Interface:** A clean and responsive user interface.

### Screenshots

| Home Screen | Loading Indicator | User Data | Edit User | Updated User Data |
|--------------|--------------------|-----------|-----------|-------------------|
| ![Home Screen](assets/home_screen.png) | ![Loading Indicator](assets/screenshot_loading.png) | ![User Data](assets/screenshot_userData.png) | ![Edit User](assets/screenshot_editUser.png) | ![Updated User Data](assets/screenshot_updatedUserData.png) |

### Demo

| *Demo gif* |
|-------------|
| ![Demo](assets/demo.gif) |

## Project Structure

The project is structured with the following key components:

| Component        | Description                                                      |
|------------------|------------------------------------------------------------------|
| App Component    | The main component orchestrating the app's functionality.        |
| User Data Fetch  | Utilizes the `fetchUserData` function to fetch user data.         |
| Edit User Data   | Allows users to edit information using PUT requests.             |
| Another Screen   | Additional component or screen for extended functionality.       |
| Styling          | Consistent and visually appealing UI with StyleSheet.             |

## Technologies Used

- React Native
- TypeScript

## How to Use

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/amoltdhage/ReactNative-UserDataManagementApp.git
    ```

2. **Navigate to the Project Directory:**
    ```bash
    cd ReactNative-UserDataManagementApp
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

This project serves as a practical example of integrating PUT API functionality in React Native, providing a valuable resource for learning and reference.


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
