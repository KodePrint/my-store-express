const bcrypt = require('bcryptjs')


async function hashPass() {
    const myPassword = 'admin.123/';
    const hash = await bcrypt.hash(myPassword, 10);
    console.log(hash);
}

hashPass();