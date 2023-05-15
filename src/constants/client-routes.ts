export enum ClientRoutes {
  Workout = '/',
  Tracking = '/tracking',
  TrackingById = '/tracking/:id',
  Complete = '/complete',
  SignIn = '/sign-in',
  Profile = '/profile',
  SignUp = '/sign-up',
  GoogleAuth = '/google-auth/:accessToken/:refreshToken',
}
