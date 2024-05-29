"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createButton = exports.displayModal = exports.getInputValues = exports.addParagraph = exports.removeAllChildren = exports.addMultipleElement = void 0;
var modalForm = document.getElementById('input-form');
var modal = document.getElementById('modal');
var close = document.getElementById('close');
var cancel = document.getElementById('cancel');
function addElement(elementId, elementType, parentElement, typeAtr) {
    var child = document.createElement(elementType);
    child.className = 'form-name';
    child.setAttribute('id', elementId);
    child.setAttribute('type', typeAtr);
    parentElement.appendChild(child);
    return parentElement;
}
function addMultipleElement(numberOfElements, elementType, elementId, parentElement, inputType) {
    var htmlElements = null;
    for (var i = 0; i < numberOfElements; i++) {
        var id = i + 1;
        htmlElements = addElement(elementId + id, elementType, parentElement, inputType);
    }
    return htmlElements;
}
exports.addMultipleElement = addMultipleElement;
function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
exports.removeAllChildren = removeAllChildren;
function addParagraph(elementId, desc) {
    var element = document.getElementById(elementId);
    element.innerText = desc;
    return element;
}
exports.addParagraph = addParagraph;
function getInputValues(modalForm) {
    var values = [];
    for (var i = 0; i < modalForm.length; i++) {
        if (modalForm[i].nodeName === 'INPUT') {
            values.push(modalForm[i].value);
        }
    }
    return values;
}
exports.getInputValues = getInputValues;
close.addEventListener('click', function () {
    modal.style.display = 'none';
    removeAllChildren(modalForm);
});
cancel.addEventListener('click', function () {
    modal.style.display = 'none';
    removeAllChildren(modalForm);
});
function displayModal(_a) {
    var desc = _a.desc, callBack = _a.callBack, numberInputBox = _a.numberOfInputBox, type = _a.type, inputType = _a.inputType;
    var description = document.getElementById('description');
    var CalculateBtn = document.getElementById('calculate'), result = document.createElement('p');
    result.setAttribute('id', 'result');
    addMultipleElement(numberInputBox, type !== null && type !== void 0 ? type : 'INPUT', 'formName', modalForm, inputType);
    addParagraph('description', ' Harmonic Series ');
    description.innerHTML = desc;
    CalculateBtn.addEventListener('click', function () {
        var values = getInputValues(modalForm);
        var v = callBack.apply(void 0, values);
        if (Array.isArray(v)) {
            v = v.join();
        }
        result.innerText = v;
    });
    modalForm.appendChild(result);
    modal.style.display = 'block';
}
exports.displayModal = displayModal;
/**
 *
 * @param id - an id for css
 * @param txt - a label for the button
 * @returns
 */
function createButton(_a) {
    var id = _a.id, txt = _a.txt, _b = _a.desc, desc = _b === void 0 ? '' : _b, _c = _a.filename, filename = _c === void 0 ? '' : _c, _d = _a.status, status = _d === void 0 ? 'Done' : _d;
    var table = document.getElementById('table');
    var button = document.createElement('button');
    button.setAttribute('id', "".concat(id));
    button.innerHTML = txt;
    var tr = document.createElement('tr');
    var tdButton = document.createElement('td');
    tdButton.append(button);
    //description
    var tdDesc = document.createElement('td');
    tdDesc.innerHTML = desc;
    //status
    var tdStatus = document.createElement('td');
    tdStatus.innerHTML = status;
    //source
    var tdSource = document.createElement('td');
    var link = document.createElement('a');
    filename = filename !== '' ? filename + '.ts' : filename;
    link.setAttribute('href', "https://github.com/rhnh/apps/blob/main/src/app/".concat(filename)
    // `https://github.com/rhnh/typescript-basics-stuff/blob/master/src/app/${filename}`
    );
    link.innerHTML = 'Source Code';
    tdSource.append(link);
    tr.appendChild(tdButton);
    tr.appendChild(tdDesc);
    tr.appendChild(tdStatus);
    tr.appendChild(tdSource);
    table.appendChild(tr);
    return button;
}
exports.createButton = createButton;
//# sourceMappingURL=render.js.map