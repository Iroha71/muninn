export default {
  datas: [
    { title: '導入', content: 'npx degit sveltejs/template [[アプリ名]]' },
    { title: '変数',
      content: 
        '<script>const name = "hogehoge"</script>\n\n' +
        '<main>{ name }</main>'
    },
    { title: 'バインド',
      content:
        '<script>let name</script>\n\n' +
        '<main>\n' +
        ' <input bind:value={ name } type="text" />\n' +
        '</main>'
    },
    { title: '算出プロパティ',
      content:
        '<script>\n' +
        ' const firstName = "hoge"\n' +
        ' const lastName = "piyo\n' +
        ' $: fullName = firstName + lastName\n' +
        '</script>\n\n' +
        '<main>{ fullName }</main>'
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
      '{#each hoge as h}\n' +
      ' <li>{ h }</li>\n' +
      '{/each}'
    }
  ]
}

export const libs = [
  { title: 'ルーティング-1-', content: 'yarn add svelte-spa-router' },
  { title: 'ルーティング-2-',
    content:
      '<script>\n'+
      ' import Router from \'svelte-spa-router\'\n' +
      ' import Home from \'./Home.svelte\'\n' +
      ' import Svelte from \'./Svelte.svelte\'\n' +
      ' const routes = { \'/\': Home, \'/svelte\': Svelte }\n' +
      '</script>\n\n' +
      '<main> <Router routes={routes}></Router> </main>\n',
    fileName: 'src/App.svelte'
  },
  { title: 'ルーティング-クリック時-',
    content:
      '<script> import { push } from \'svelte-spa-router\' </script>\n' +
      '<button on:click={ () => push(\'/svelte\') }>Svelteページへ</button>'
  }
]