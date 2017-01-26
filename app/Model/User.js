
//New version code does not work for Auth API, refer to legacy code belowS
/* 'use strict'

const Lucid = use('Lucid')
const Hash = use('Hash')

class User extends Lucid {

  static boot () {
    super.boot()


    this.addHook('beforeCreate', function * (next) {
      this.password = yield Hash.make(this.password)
      yield next
    })
  }

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User */

'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

  apiTokens () {
    return this.hasMany('App/Model/Token')
  }

}

module.exports = User
