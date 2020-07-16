export const languages = [
  { name: 'svelte',  desc: 'javascriptのフレームワーク', color: '#ff3e00' }
]

export const getLanguage = (targetName) => {
  const targetIndex = findLanguageIndex(targetName)
  return languages[targetIndex]
}

const findLanguageIndex = (targetName) => {
  let targetIndex = -1
  for (let count = 0; count < languages.length; count++) {
    if (languages[count].name === targetName) {
      targetIndex = count
      break;
    }
  }
  return targetIndex
}