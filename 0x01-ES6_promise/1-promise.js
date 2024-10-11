export default function getFullResponseFromAPI(success) {
  return new Promise((res) => {
    if (success === true) {
      res({
        status: 200,
        body: 'Success',
      });
    } else {
      throw new Error('The fake API is not working currently');
    }
  });
}
