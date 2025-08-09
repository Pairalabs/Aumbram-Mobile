# 📱 Aumbram

## Welcome to Aumbram

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/xxxxxxx/xxxxx.git

# Move to project directory
cd project-name

# Install dependencies
npm install

# Start the app
npm start

# Or for React Native CLI (Android)
npx react-native run-android

# Or for iOS (Mac only)
npx react-native run-ios
```

## 🏃‍♂️ Running the App

### **A. Using Android Studio Emulator**

> Use this method if you want to run the app on a virtual Android device.

**1. Install Android Studio**

- Download and install from [here](https://developer.android.com/studio).
- Install the required **SDK tools** during setup.

**2. Create & Start an Emulator**

- Open **Android Studio → Virtual Device Manager**.
- Create a new virtual device (select your preferred model and OS).
- Start the emulator.

**3. Run the App**  
In a separate terminal:

```bash
npx react-native run-android
```

#### **B. Using a Physical Android Device (USB Debugging)**

> Follow these steps if you want to run the app directly on your Android phone.

**This method still requires Android Studio to be installed for SDK tools and platform dependencies. Once that is done you can close the android studio**

**1. Enable Developer Options**

- Go to **Settings → About Phone**
- Tap **"Build number"** **7 times** until you see _"You are now a developer"_.

**2. Enable USB Debugging**

- Go to **Settings → Developer Options**
- Turn on **USB Debugging**.

**3. Connect Your Phone**

- Use a USB cable to connect your phone to your computer.

**4. Verify Device Connection**

```bash
adb devices
```

**5. Using adb reverse**

```bash
adb -s <device name> reverse tcp:8081 tcp:8081
```

**6. run app**

**_ terminal 1_**

```bash
npm start
```

**_ terminal 2_**

```bash
npm run android
```

**⏳ Note: The first build may take several minutes depending on your internet speed and system performance.\_**
