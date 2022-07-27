const modalForm = document.getElementById('input-form')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const cancel = document.getElementById('cancel')

function addElement(
  elementId: string,
  elementType: string,
  parentElement: HTMLElement
): HTMLElement {
  const child = document.createElement(elementType)
  child.className = 'form-name'
  child.setAttribute('id', elementId)
  parentElement.appendChild(child)
  return parentElement
}

export function addMultipleElement(
  numberOfElements: number,
  elementType: string,
  elementId,
  parentElement: HTMLElement
): HTMLElement {
  let htmlElements: HTMLElement = null
  for (let i = 0; i < numberOfElements; i++) {
    let id = i + 1
    htmlElements = addElement(elementId + id, elementType, parentElement)
  }
  return htmlElements
}

export function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

export function addParagraph(
  elementId: string,
  desc: string
): HTMLParagraphElement {
  let element = <HTMLParagraphElement>document.getElementById(elementId)
  element.innerText = desc
  return element
}

export function getInputValues(modalForm) {
  let values = []
  for (let i = 0; i < modalForm.length; i++) {
    if (modalForm[i].nodeName === 'INPUT') {
      values.push(modalForm[i].value)
    }
  }
  return values
}

close.addEventListener('click', () => {
  modal.style.display = 'none'
  removeAllChildren(modalForm)
})
cancel.addEventListener('click', () => {
  modal.style.display = 'none'
  removeAllChildren(modalForm)
})

export function displayModal(callBack, desc, numberInputBox, type?: string) {
  const description = document.getElementById('description')

  let CalculateBtn = document.getElementById('calculate'),
    result = document.createElement('p')
  result.setAttribute('id', 'result')
  addMultipleElement(numberInputBox, type ?? 'INPUT', 'formName', modalForm)
  addParagraph('description', ' Harmonic Series ')
  description.innerText = desc
  CalculateBtn.addEventListener('click', () => {
    let values = getInputValues(modalForm)
    let v = callBack(...values)
    if (Array.isArray(v)) {
      v = v.join()
    }
    result.innerText = v
  })
  modalForm.appendChild(result)

  modal.style.display = 'block'
}

/**
 *
 * @param id - an id for css
 * @param txt - a label for the button
 * @returns
 */
export function createButton({
  id,
  txt,
  desc = '',
  filename = '',
  status = 'Done',
}: {
  id: string
  txt: string
  desc?: string
  status?: 'Done' | 'progress' | 'failed'
  filename?: string
}) {
  let table = document.getElementById('table')
  let button: HTMLButtonElement = document.createElement('button')
  button.setAttribute('id', `${id}`)
  button.innerHTML = txt

  let tr: HTMLElement = document.createElement('tr')
  const tdButton: HTMLElement = document.createElement('td')
  tdButton.append(button)

  //description
  const tdDesc: HTMLElement = document.createElement('td')
  tdDesc.innerHTML = desc

  //status
  const tdStatus: HTMLElement = document.createElement('td')
  tdStatus.innerHTML = status

  //source
  const tdSource: HTMLElement = document.createElement('td')
  const link: HTMLAnchorElement = <HTMLAnchorElement>document.createElement('a')
  filename = filename !== '' ? filename + '.ts' : filename
  link.setAttribute(
    'href',
    `https://github.com/rhnh/apps/blob/master/src/app/${filename}`
    // `https://github.com/rhnh/typescript-basics-stuff/blob/master/src/app/${filename}`
  )
  link.innerHTML = 'Source Code'
  tdSource.append(link)

  tr.appendChild(tdButton)
  tr.appendChild(tdDesc)
  tr.appendChild(tdStatus)
  tr.appendChild(tdSource)
  table.appendChild(tr)
  return button
}
