const bcrypt = require('bcryptjs');
const { password } = require('pg/lib/defaults');


async function verifuPass() {
    const myPassword = 'admin.123/';
    const hash = '$2a$10$U2ri1My0apruMxkdPywWtOT4EL32rxcC7NNzKNqNqLpM.7dNxWKd2';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console.log(isMatch)
}

verifuPass();