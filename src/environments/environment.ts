// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBqs63oGz8-jZGA8lOJaj-Uzt5JHcOGsBA",
    authDomain: "ringlunchcalendar.firebaseapp.com",
    databaseURL: "https://ringlunchcalendar.firebaseio.com",
    projectId: "ringlunchcalendar",
    storageBucket: "ringlunchcalendar.appspot.com",
    messagingSenderId: "1087907328341"
  }
};
