let i = 0;

async function start() {
  let users = document.getElementsByClassName('reusable-search__result-container')

  if (i < users.length) {
    const element = users[i]

    if (String(element.innerHTML).includes('Bağlantı kur')) {
      element.querySelector('button').click()
      console.log('Bağlantı kur butonuna tıklandı.')

      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Modal oluştu.')

      let modalButtons = document.getElementsByClassName('artdeco-modal__actionbar ember-view text-align-right')
      modalButtons[0].getElementsByClassName('artdeco-button artdeco-button--2 artdeco-button--primary ember-view ml1')[0].click()

      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  i++;

  if (i < users.length) {
    await start()
  } else {
    const activePageElement = document.querySelector('.artdeco-pagination__indicator--number.active')
    const nextPageButton = activePageElement.nextElementSibling ? activePageElement.nextElementSibling.querySelector('button') : null
    
    if (nextPageButton) {
      nextPageButton.click()
      console.log('Sonraki sayfaya geçiliyor...')

      await new Promise(resolve => setTimeout(resolve, 2000))
      i = 0
      await start()
    } else {
      console.log('Tüm sayfalar işlendi.')
    }
  }
}

start()