export default {
  datas: [
    { title: '導入', content: 'npx degit sveltejs/template [[アプリ名]]' },
    { title: '変数',
      content: 
        '<script>const name = "hogehoge"</script>\n\n' +
        '<main>{ name }</main>'
    },
    { title: 'if文',
      content:
        '<script>const hoge = 1;</script>\n\n' +
        '{#if hoge == 1}\n' +
        ' <p>hoge is 1.</p>\n' +
        '{#else}\n' +
        ' <p>hoge is not 1.\n' +
        '{/if}'
    },
    { title: 'for文',
      content:
      '<script>const hoge = [1, 2, 3];</script>\n\n' +
      '{#each hoge as h\n' +
      ' <li>{ h }</li>\n' +
      '{/each}'
    }
  ]
}

export const libs = [
  { title: 'ルーティング', content: 'svelte-spa-router' }
]