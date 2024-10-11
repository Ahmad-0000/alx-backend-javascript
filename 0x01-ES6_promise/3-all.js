import { uploadPhoto, createUserAccount } from './utils';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const account = createUserAccount();

  return Promise.all([photo, account]).then((array) => {
    console.log(`${array[0].body} ${array[1].firstName} ${array[1].lastName}`);
  }).then(undefined, () => console.log('Signup system offline'));
}
