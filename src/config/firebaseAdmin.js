import * as admin from 'firebase-admin';

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export { admin };