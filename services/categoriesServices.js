const {categories} = require('../data/categories')

class CategoriesService {
    constructor() {
        this.categories = [];
        this.generate();
    }

    generateId() {
        // Genera in nuevo id para el producto segun el largo del arreglo
        return this.categories.length + 1
    }
    generate() {
        // Genera el arreglo de productos dentro de servicios trayendo del arreglo productos en data
        this.categories = this.categories.concat(categories)
    }

    async create(body) {
        // Crea una nueva categoria
        if (JSON.stringify(body) === '{}') {
            throw new Error('Error the category could not be created..!')
        }
        const newCategorie = {
            id: this.generateId(),
            name: body.name,
        }
        this.categories.push(newCategorie);
        return newCategorie;
    }

    async find() {
        // Busca todas las categorias
        return this.categories

    }

    async findOne(id) {
        // Busca una categoria por su id
        const index = this.categories.findIndex(item => item.id==id)
        if (index === -1) {
            throw new Error('Category not found..!')
        }  
        const category = this.categories[index]
        return category
    }

    async update(id, changes) {
        // Actualiza una categoria
        const index = this.categories.findIndex(item => item.id==id)
        if (index === -1) {
            throw new Error('Category not found..!')
        }  
        const category = this.categories[index]
        this.categories[index] = {
            ...category,
            ...changes
        };
        return this.categories[index];
    }

    async delete(id) {
        // Elimina una categoria
        const index = this.categories.findIndex(item => item.id==id)
        if (index === -1) {
            throw new Error('Category not found..!')
        }  
        const category = this.categories[index]
        this.categories.splice(index, 1)
        return {message: `Category ${category.name} has been succesfully deleted..!`}
    }

}

module.exports = CategoriesService;