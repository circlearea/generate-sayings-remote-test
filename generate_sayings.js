function randomNumber(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}


function generateSayings(occupation) {

  // define variables for composition of sayings
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!occupation) {
    return 'ㄟ。。。你(妳)還沒有選擇幹話對象喔!'
  }

  // define an empty string, compose a string of task and phrase by use conditional sentence
  let sayings = ''
  sayings = '身為一個' + target[occupation] + ' , ' + randomNumber(task[occupation]) + ' , ' + randomNumber(phrase) + '吧!'

  // return 幹話
  return sayings

}

module.exports = generateSayings


// // invoke generateSayings
// generateSayings()