export const env = 'dev'

// Config for firebase
export const firebase = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID
}

export const segmentId = process.env.GATSBY_SEGMENT_ID

export const publicVapidKey = process.env.GATSBY_PUBLIC_VAPID_KEY

export const sentryDsn = process.env.GATSBY_SENTRY_DSN
