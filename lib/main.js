'use strict'

const axios = require('axios')

const DIR = function (opts) {
  if (!opts.user || !opts.repository) {
    throw new Error('user and repository is required')
    return null
  }

  this.user = opts.user
  this.repository = opts.repository
  this.baseUrl = ['https://api.github.com/repos', opts.user, opts.repository].join('/')
  this.http = axios.create({
    baseURL: this.baseUrl
  })
}

DIR.prototype.qObject = function (obj) {
  let qs = '?q='
  const searchFields = ['in', 'language', 'fork', 'size', 'path', 'filename', 'extension']
  const queryFields = ['page', 'per_page', 'order', 'sort']
  if (obj.q && obj.q !== '') {
    qs += obj.q + '+'
  } else if (!obj.size) {
    obj.size = '>=0'
  }

  qs += ['repo', ':', this.user, '/', this.repository].join('')

  for (let key in obj) {
    if (searchFields.indexOf(key) != -1) {
      qs += ['+', key, ':', obj[key]].join('')
    }
  }

  for (let key in obj) {
    if (queryFields.indexOf(key) != -1) {
      qs += ['&', key, '=', obj[key]].join('')
    }
  }

  console.log(qs)
  return qs
}

DIR.prototype.contents = function (path) {
  return this.http.get(['/contents', path ? path : ''].join(''))
}

DIR.prototype.trees = function (sha) {
  return this.http.get(['/git/trees', sha ? '/' + sha : '/master'].join(''))
}

DIR.prototype.search = function (searchObj) {
  let qs = this.qObject(searchObj)
  return this.http.get(['https://api.github.com/search/code', qs].join(''), {
    headers: {
      'Accept': 'application/vnd.github.v3.text-match'
    }
  })
}

DIR.prototype.file = function (sha) {
  return this.http.get(['/git/blobs/', sha].join(''), {
    headers: {
      'Accept': 'application/vnd.github.v3.raw'
    }
  })
}

module.exports = DIR
