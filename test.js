var DIR = require('./index')

var dir = new DIR({
  user: 'ignocide',
  repository: 'github-directory'
})

dir.contents()
  .then(function (result) {
    console.log(result.data)

  // [ { name: 'main.js',
  // path: 'lib/main.js',
  // sha: 'fea7cdbf48c0ffeb9905fc254568869f888b4655',
  // size: 1681,
  // url: 'https://api.github.com/repos/ignocide/github-directory/contents/lib/main.js?ref=master',
  // html_url: 'https://github.com/ignocide/github-directory/blob/master/lib/main.js',
  // git_url: 'https://api.github.com/repos/ignocide/github-directory/git/blobs/fea7cdbf48c0ffeb9905fc254568869f888b4655',
  // download_url: 'https://raw.githubusercontent.com/ignocide/github-directory/master/lib/main.js',
  // type: 'file',
  // _links:
  //   { self: 'https://api.github.com/repos/ignocide/github-directory/contents/lib/main.js?ref=master',
  //     git: 'https://api.github.com/repos/ignocide/github-directory/git/blobs/fea7cdbf48c0ffeb9905fc254568869f888b4655',
  //     html: 'https://github.com/ignocide/github-directory/blob/master/lib/main.js' } } ]
  })

dir.trees('7927b7dd5a16b347a69ab9bdbcc33dc5ecc44c75')
  .then(function (result) {
    console.log(result.data)

  // { sha: '7927b7dd5a16b347a69ab9bdbcc33dc5ecc44c75',
  //   url: 'https://api.github.com/repos/ignocide/github-directory/git/trees/7927b7dd5a16b347a69ab9bdbcc33dc5ecc44c75',
  //   tree:
  //   [ { path: 'main.js',
  //     mode: '100644',
  //     type: 'blob',
  //     sha: 'fea7cdbf48c0ffeb9905fc254568869f888b4655',
  //     size: 1681,
  //     url: 'https://api.github.com/repos/ignocide/github-directory/git/blobs/fea7cdbf48c0ffeb9905fc254568869f888b4655' } ],
  //     truncated: false }
  })
var searchObj = {
  in: 'file', // one of 'file','path','file,path'
  language: 'java',
  fork: false,
  size: '>10',
  path: 'lib',
  filename: 'test',
  extension: 'js',
  order: 'desc',
  sort: 'indexed',
  page: 1,
  per_page: 2
}

dir.search({
  order: 'desc',
  sort: 'indexed',
  page: 1,
  per_page: 2
})
  .then(function (result) {
    console.log('search', result.data)

  // { total_count: 1,
  //   incomplete_results: false,
  //   items:
  //   [ { name: 'main.js',
  //     path: 'lib/main.js',
  //     sha: 'fea7cdbf48c0ffeb9905fc254568869f888b4655',
  //     url: 'https://api.github.com/repositories/90511048/contents/lib/main.js?ref=246467cf67d4a4623c2f16095d62cae516caa10e',
  //     git_url: 'https://api.github.com/repositories/90511048/git/blobs/fea7cdbf48c0ffeb9905fc254568869f888b4655',
  //     html_url: 'https://github.com/ignocide/github-directory/blob/246467cf67d4a4623c2f16095d62cae516caa10e/lib/main.js',
  //     repository: [Object],
  //     score: 1,
  //     text_matches: [] } ] }
  })
  .catch(function (err) {
    console.log(err)
  })

dir.file('7cce552250a144a5eaaec05aa0c540efb6a47b6d')
  .then(function (result) {
    console.log(result.data)

  // # github-directory
  //     use a github as directory
  })
