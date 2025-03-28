# Time Stream App

## Overview

This is a Node.js application that demonstrates the use of streams to log the current time to a file every second. The
app uses the Readable, Transform, and Writable streams from the stream module, along with the date-fns library to format
timestamps. The formatted timestamps (in the format yyyy-MM-dd HH:mm:ss) are written to a file named time-log.txt.

## Prerequisites

- [Node.js](https://nodejs.org/)
- npm

## Install Dependencies

Run the following command to install the required dependencies (listed in `package.json`):

### `npm install`

## Running the App

After installing the dependencies, run the following command to start the app:

### `npm start`

This will execute the start script defined in  `package.json`, which runs

```
node index.js
```

## Stop the App

To stop the app, press `Ctrl + C` in the terminal. The app will close the file stream and exit, printing:
```
Stopping the app...
```
