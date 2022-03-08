const { users } = require('../data/users')
const bcryptjs = require('bcryptjs')

class UsersService {
    constructor() {
        this.users = [];
        this.generate();
    }

    generateId() {
        // Genera in nuevo id para el producto segun el largo del arreglo
        return this.users.length + 1
    }
    generate() {
        // Genera el arreglo de productos dentro de servicios trayendo del arreglo productos en data
        this.users = this.users.concat(users)
    }

    async create(body) {
        // Crea un nuevo usuario
        if (JSON.stringify(body) === '{}') {
            throw new Error('Error the User could not be created..!')
        }
        let password_hashed = await bcryptjs.hash(body.password, 8)
        const newUser = {
            id: this.generateId(),
            name: body.name,
            username: body.username,
            email: body.email,
            password: password_hashed
        }
        this.users.push(newUser);
        return newUser;
    }

    async find() {
        // Regresa la lista de usuarios
        return this.users
    }

    async findOne(id) {
        // Retorna un usuario especifico por id
        const index = this.users.findIndex(item => item.id == id);
        if (index === -1){
            throw new Error('User not foud..!')
        }
        const User = this.users[index];
        return User;
    }   

    async update(id, changes) {
        // Actualiza un Usuario por su id
        id = parseInt(id)
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1){
            throw new Error('User not foud')
        }
        const product = this.users[index];
        this.users[index] = {
            ...product,
            ...changes
        };
        return this.users[index];
    }

    async delete(id) {
        // Borra un producto de la lista
        id = parseInt(id)
        const index = this.users.findIndex(item => item.id === id);
        if (index === -1){
            throw new Error('User not foud')
        }
        let user = this.users[index]
        this.users.splice(index, 1);
        return {message: `Usuario: ${user.username} eliminado correctamente`}
    }

}

module.exports = UsersService;