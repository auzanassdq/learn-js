const names = ['Alpha avalon', 'Betty Brave', 'Gamme Gacurio']

const showNames = names => {
  for (i = 0; i < names.length; i++) {
    const name = names[i]

    console.log(`[${i+1}] ${name}`)
  }
}

showNames(names)