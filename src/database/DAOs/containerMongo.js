import Messages from '../models/messages.model.js'
import Products from '../models/products.model.js'
import Users from '../models/user.model.js'

class ContainerMongo {
  constructor (coll) {
    this.coll = coll
  }

  async getAll () {
    if (this.coll === 'products') {
      return await Products.find({})
    } else if (this.coll === 'messages') {
      return await Messages.find({})
    } else if (this.coll === 'users') {
      return await Users.find({})
    }
  }

  async save (item) {
    if (this.coll === 'products') {
      const res = new Products(item)
      const saved = await res.save()
      return saved
    } else if (this.coll === 'messages') {
      const res = new Messages(item)
      const saved = await res.save()
      return saved
    } else if (this.coll === 'users') {
      const res = new Users(item)
      const saved = await res.save()
      return saved
    }
  }

  async getById (id) {
    if (this.coll === 'products') {
      return await Products.findById(id)
    } else if (this.coll === 'messages') {
      return await Messages.findById(id)
    }
  }

  async getByCategory (category) {
    return await Products.find({ category }).exec()
  }

  async deleteById (id) {
    if (this.coll === 'products') {
      await Products.deleteOne({ _id: id })
    } else if (this.coll === 'messages') {
      await Messages.deleteOne({ _id: id })
    } else if (this.coll === 'users') {
      await Users.deleteOne({ _id: id })
    }
  }

  async deleteAll () {
    if (this.coll === 'products') {
      await Products.deleteMany({})
    } else if (this.coll === 'messages') {
      await Messages.deleteMany({})
    } else if (this.coll === 'users') {
      await Users.deleteMany({})
    }
  }

  async updateById (id, title, description, features, thumbnail, category, price, stock) {
    await Products.findByIdAndUpdate(
      id,
      {
        title, description, features, thumbnail, category, price, stock
      }
    )
  }
}

export default ContainerMongo
