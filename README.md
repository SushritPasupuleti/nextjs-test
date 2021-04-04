# Next Boilerplate with Next-Auth, Redux, Material-UI

## Auth

### Sign In Callback

Data is of the form

```js
user: {
  id: 5f563309ea0d4790e0317d98,
  name: 'Sushrit Pasupuleti',
  email: 'sushrit.pk21@gmail.com',
  image: 'https://lh3.googleusercontent.com/a-/AOh14Gihv8flVIb-P3AWIYLf0mkjIQYzu3iVpuGlrVzFT7U',
  createdAt: 2020-09-07T13:18:01.548Z,
  updatedAt: 2020-09-07T13:18:01.548Z
}, 

account: {
  provider: 'google',
  type: 'oauth',
  id: 'sameNumericID',
  refreshToken: undefined,
  accessToken: 'sometoken',
  accessTokenExpires: null
},

profile: {
  id: 'sameNumericID',
  email: 'sushrit.pk21@gmail.com',
  verified_email: true,
  name: 'Sushrit Pasupuleti',
  given_name: 'Sushrit',
  family_name: 'Pasupuleti',
  picture: 'https://lh3.googleusercontent.com/a-/AOh14Gihv8flVIb-P3AWIYLf0mkjIQYzu3iVpuGlrVzFT7U=s96-c',
  locale: 'en-GB'
}
```