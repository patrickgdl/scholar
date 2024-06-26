# Scholar

This application is purely a kitchen-sink demo of an PWA for a **fake** school application, with student classes and student unique card.

![printscreen](src/assets/img/printscreen.png)

## Table of Contents

- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)

## Getting Started

- [Download the installer](https://nodejs.org/) for Node LTS.
- Install the ionic CLI globally: `npm install -g ionic`
- Clone this repository: `git clone https://github.com/patrickgdl/scholar.git`.
- Run `npm install` from the project root.
- Run `ionic serve` in a terminal from the project root.
- Profit. :tada:

## Deploying

### Progressive Web App

1. Run `ionic build --prod`
2. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
