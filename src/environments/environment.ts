// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    // Add your project credentials
    // apiKey: '<your-key>',
    // authDomain: '<your-project-authdomain>',
    // databaseURL: '<your-database-URL>',
    // projectId: '<your-project-id>',
    // storageBucket: '<your-storage-bucket>',
    // messagingSenderId: '<your-messaging-sender-id>'

    
    apiKey: 'AIzaSyBWRISJCMt9q7tgT1nkNHE4DZXdDWuoE9U',
    authDomain: 'dev-env-1a3a6.firebaseapp.com',
    databaseURL: 'https://dev-env-1a3a6.firebaseio.com',
    projectId: 'dev-env-1a3a6',
    storageBucket: 'dev-env-1a3a6.appspot.com',
    messagingSenderId: '283816088223'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
