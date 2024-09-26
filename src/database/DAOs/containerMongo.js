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

  async getByTitle (title) {
    return await Products.findOne({ title }).exec()
  }

  async getByCategory (category) {
    return await Products.findOne({ category }).exec()
  }

  async getByEmail (email) {
    return await Users.findOne({ email }).exec()
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

  async updateById (id, title, price, thumbnail) {
    await Products.findByIdAndUpdate(
      id,
      {
        title,
        price,
        thumbnail
      }
    )
  }
}

export default ContainerMongo
