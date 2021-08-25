const contacts = require('./contacts');
const { tulisPertanyaan, simpanContact } = contacts;

const main = async () => {
  const nama = await tulisPertanyaan('Masukan nama anda : ');
  const email = await tulisPertanyaan('Masukan email anda : ');
  const noHP = await tulisPertanyaan('Masukan noHP anda : ');

  simpanContact(nama, email, noHP);
}
main();