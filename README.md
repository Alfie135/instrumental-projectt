# Instruments App 👋

This is an instruments app project which allows you to interact with a 7 key piano and drum kit. It has been created with [Expo](https://expo.dev/) and [React Native](https://reactnative.dev/).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

## Information if you want to further develop the application

#### Audio: 
- Instrument sounds were acquired from [freesound.org](https://freesound.org/).
#### Folder structure: 
- App contains all pages.
  - Tabs contains Piano and Drums pages.
#### Components
#### Helpers
- helpers.ts | Helper functions, specifically for playing audio
- notes | Audio files
#### Hooks
- useOrientation | Hook to manage the app orientation. Makes app only work if in landscape.


## Contribution rules
#### Icons
- All Icons should come from expo official documentation.
#### All React components should be declared as follows:
 ```
 export default function WhiteKey(props: WhiteKeyProps) {
   const {player} = props;
   /***
   * Rest of code
   */
}
```
#### New pages must go in the (tabs) folder.
#### Place components and hooks in their respective folders.
#### New helper functions may be added to the helpers.ts file and exported for use elsewhere.

## Dependencies
- [Expo Screen Orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)
- [Expo Audio](https://docs.expo.dev/versions/latest/sdk/audio/)


