const locationSplitTest = location.href.split('/');

// load only in simulator
if (locationSplitTest.length >= 7 && locationSplitTest[6] === 'test') {


// Icons by Eleonor Wang - https://www.flaticon.com/authors/eleonor-wang
// <div>Icons made by <a href="https://www.flaticon.com/authors/eleonor-wang" title="Eleonor Wang">Eleonor Wang</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const redoImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI3NS42MjIgMjc1LjYyMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjc1LjYyMiAyNzUuNjIyIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yNzEuNDU5LDczLjQyNmMtMy40OC0xLjc0LTEwLjQ0MSwwLTEyLjE4MSwzLjQ4bC0xOS4xMDYsMzIuMjQ0Yy0xMi43Mi01My43NTItNjAuNC05My4xNDktMTE4LjM2My05My4xNDktNjcuODY1LDAuMDAxLTEyMS44MDksNTMuOTQ1LTEyMS44MDksMTIxLjgxczUzLjk0NCwxMjEuODA4IDEyMS44MDgsMTIxLjgwOGM1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40OC04LjcwMS04LjcwMS04LjcwMWMtNTcuNDI0LDAtMTA0LjQwNy00Ni45ODMtMTA0LjQwNy0xMDQuNDA3czQ2Ljk4NC0xMDQuNDA2IDEwNC40MDctMTA0LjQwNmM1MS4yODEsNy4xMDU0M2UtMTUgOTQuMTIzLDM3LjUgMTAyLjczNyw4Ni4zOTdsLTQwLjA5Mi0yMy43NTJjLTUuMjItMS43NC0xMC40NDEsMC0xMi4xODEsMy40OC0xLjc0LDUuMjIgMCwxMC40NDEgMy40OCwxMi4xODFsNTMuOTQ0LDMzLjA2MmMxLjc0LDEuNzQgMy40OCwxLjc0IDUuMjIsMS43NCAwLDAgMS43NCwwIDEuNzQtMy40OCAxLjc0LDAgMy40OC0xLjc0IDUuMjItMy40OGwxLjA2Mi0xLjc0aDAuNjc5YzAtMC4zNDgtMC4wNTItMC42NzktMC4wNTItMS4wMWwzMS4zNzUtNTEuMTk0YzEuNzM5LTUuMjIxLTAuMDAxLTEwLjQ0Mi0zLjQ4MS0xMi4xODJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;
const saveImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDIyNi4yMTYgMjI2LjIxNiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMjI2LjIxNiAyMjYuMjE2IiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KICA8Zz4KICAgIDxwYXRoIGQ9Im0yMTcuNTE1LDEwNC40MDdoLTk1LjcwN3YtOTUuNzA2YzAtNS4yMi0zLjQ4LTguNzAxLTguNzAxLTguNzAxcy04LjcwMSwzLjQ4LTguNzAxLDguNzAxdjk1LjcwN2gtOTUuNzA1Yy01LjIyLDAtOC43MDEsMy40OC04LjcwMSw4LjcwMXMzLjQ4LDguNzAxIDguNzAxLDguNzAxaDk1LjcwN3Y5NS43MDdjMCw1LjIyIDMuNDgsOC43MDEgOC43MDEsOC43MDFzOC43MDEtMy40OCA4LjcwMS04LjcwMXYtOTUuNzA3aDk1LjcwN2M1LjIyLDAgOC43MDEtMy40OCA4LjcwMS04LjcwMXMtMy40ODMtOC43MDItOC43MDMtOC43MDJ6IiBmaWxsPSIjMDAwMDAwIi8+CiAgPC9nPgo8L3N2Zz4K" />`;



const skillId = location.href.split('/')[7];
let localeButtons;
let locale = location.href.split('/')[9].substring(0, 2);
let historyIndex = -1;

$(document).ready(function () {

    draggableSideBar();

    initButtons();

    $('.askt-input div.astro-form-group-fields label:first-child input').on('change', function () {
        initButtons();
    });

    $("body").on('DOMSubtreeModified', ".askt-alexa-lang .Select-control .Select-value-label", function() {
        // workaround! there is always a delay
        setTimeout(() => {
            const newLocale = location.href.split('/')[9].substring(0, 2);
            if (newLocale !== locale) {
                locale = newLocale;
            }
            initButtons();
        }, 750);

    });

});


async function getStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get([skillId], function(result) {
            resolve(result);
        });
    })
}
async function setStorage() {
    return new Promise((resolve, reject) => {

        chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
            $('.request-buttons button[value="'+button+'"]').parent().remove();
            localeButtons = result[skillId].buttons[locale];


        });
    })
}

async function updateStorage() {
    let result = await getStorage();
    if (result && result[skillId] && result[skillId].buttons) {

        const buttonTextsArray = [];

        $('.asksos-button.post').each(function() {
            buttonTextsArray.push($(this).text().trim());
        });

        result[skillId].buttons[locale] = buttonTextsArray;

        chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
            localeButtons = result[skillId].buttons[locale];
        });


    }
}

/**
 * Gets buttons from storage and adds to container
 */
function initButtons() {
    if ($('div.request-buttons').length === 0) {
        $('<div class="request-buttons"></div>').insertAfter('.askt-simulator__input');
    }
    $('.request-buttons').html('');
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {

            localeButtons = result[skillId].buttons[locale];
            if (localeButtons) {
                localeButtons.forEach((button) => {
                    addButton(button);
                });
            }

            $( ".request-buttons" ).sortable({
                placeholder: "button-placeholder",
                stop: function( event, ui ) {
                    console.log('stop');
                    // console.log(event);
                    // $('.asksos-button.post').each(function(item) {
                    //     console.log($(this).text().trim());
                    // })

                    updateStorage();
                }
            });
            $( ".request-buttons" ).disableSelection();
        }
    });

    $('.request-buttons').off();
    $('.request-buttons').on('click','button.post', function() {
        postText($(this).val());
    });
    $('.request-buttons').on('click','button.remove', function() {
        removeButton($(this).val());
    });


    $(".askt-dialog").bind("DOMNodeInserted",function(el){
        if($(el.target).hasClass('askt-dialog__message') &&
            $(el.target).hasClass('askt-dialog__message--request')) {

            $(el.target).parent().find('.askt-dialog__icon--plus').remove();
            $(el.target).prepend(`<span class="asksos-action-icon repost" title="Repost">${redoImage}</span>`);

            // show, if it is not saved already
            if (!localeButtons || !localeButtons.includes($(el.target).parent().text())) {
                $(el.target).prepend(`<span class="asksos-action-icon save" title="Add request button">${saveImage}</span>`);
            }
            //add to history
            addToHistory($(el.target).parent().text());
        }
    });
    // $('.askt-dialog').off();
    $('.askt-dialog').on('click', '.repost', function() {
        const text = $(this).parent().text();
        postText(text);
    });

    $('.askt-dialog').on('click', '.save', function() {
        const text = $(this).parent().text();
        saveButton(text);
    });

    $(".askt-utterance__input").keydown(function(e) {
        chrome.storage.sync.get([skillId], function(result) {
            if (result && result[skillId] && result[skillId].history) {
                commandHistory = result[skillId].history[locale];
                if(commandHistory) {
                    switch(e.key) {
                        case "ArrowUp": historyIndex < commandHistory.length-1 ? historyIndex ++ : historyIndex = 0; break;
                        case "ArrowDown": historyIndex > 0 ? historyIndex-- : historyIndex = 0; break;
                        default: return;
                    }
                }

                // Trigger the change event on the input
                var ev = new Event('input', { bubbles: true});
                ev.simulated = true;
                $(".askt-utterance__input")[0].value = commandHistory[historyIndex];
                $(".askt-utterance__input")[0].dispatchEvent(ev);
            }
        });
    });

}

/**
 * Adds button to container
 * @param button
 */
function addButton(button) {
    $('.request-buttons').append(`<div class="button-container"><button class="asksos-button post" value="${button}" title="Post ${button}">${button}</button><button class="asksos-button remove" value="${button}"  title="Remove button">x</button></div>`);

}

/**
 * Removes button from storage and container
 * @param button
 */
function removeButton(button) {
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {
            result[skillId].buttons[locale] = result[skillId].buttons[locale].filter((text) => text !== button);

            chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
                $('.request-buttons button[value="'+button+'"]').parent().remove();
                localeButtons = result[skillId].buttons[locale];
            });
        }
    });
}

/**
 * Posts text
 * @param text
 */
function postText(text) {

    console.log('posting: ' + text);
    $('.react-autosuggest__input').val(text).change();

    // trigger input
    $('.react-autosuggest__input')[0].dispatchEvent(new Event("input", { 'bubbles': true,'cancelable': true }));
    $('.react-autosuggest__input').focus();

    // trigger press on enter
    const keypress = new KeyboardEvent("keypress", {
        bubbles: true, cancelable: true, keyCode: 13, key: 'Enter'
    });
    $('.react-autosuggest__input')[0].dispatchEvent(keypress);
}

/**
 * Saves button to synced chrome storage
 * @param text
 */
function saveButton(text) {

    // get object for given skill id
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {
            localeButtons = result[skillId].buttons[locale];

            // push to existing or create new
            if (localeButtons) {
                if (!localeButtons.includes(text)) {
                    localeButtons.push(text);
                }
            } else {
                result[skillId].buttons[locale] = [text];
            }
            chrome.storage.sync.set({[skillId]: result[skillId]}, function () {
                addButton(text);
            });
        } else if (result && result[skillId]) {
            result[skillId].buttons = {
                [locale]: [text]
            };
            chrome.storage.sync.set({[skillId]: result[skillId]}, function () {
                addButton(text);
            });
        } else { // create new object for given skill id
            const obj = {
                buttons: {
                    [locale]: [text]
                },
                history: {
                    [locale]: []
                },
            };
            chrome.storage.sync.set({[skillId]: obj}, function() {
                addButton(text);
            });
        }
    });
}
//
/**
 * Add new entry to history
 * @param text
 */
function addToHistory(text) {
    // Get object for given skill id
    chrome.storage.sync.get([skillId], function(result) {
        // Set index back to starting point
        historyIndex = -1;
        if (result && result[skillId] && result[skillId].history) {
            commandHistory = result[skillId].history[locale];
            // Add entry to front, and remove it if already exists
            if (commandHistory) {
                let index = commandHistory.indexOf(text);
                if (index >= 0) {
                    commandHistory.splice(index, 1);
                }
                // Cap length at 50 to prevent this from growing too large.
                if (commandHistory.length > 50) {
                    commandHistory.length = 50;
                }
                commandHistory.unshift(text);
            } else {
                result[skillId].history[locale] = [text];
            }
            chrome.storage.sync.set({[skillId]: result[skillId]});
        } else if (result && result[skillId]) { // create new object for given skill id

            result[skillId].history = {
                [locale]: [text]
            };

            chrome.storage.sync.set({[skillId]: result[skillId]});
        } else {
            const obj = {
                buttons: {
                    [locale]: []
                },
                history: {
                    [locale]: [text]
                },
            };
            chrome.storage.sync.set({[skillId]: obj})
        }
    });
}

function draggableSideBar() {
    $('.askt-input').append('<div id="dragbar"></div>');
    let dragging = false;
    $('#dragbar').on('mousedown', function(e) {
        e.preventDefault();
        dragging = true;
        $(document).on('mousemove', function(e){
            const percentage = (e.pageX / window.innerWidth) * 100;
            const mainPercentage = 100 - percentage;
            $('.askt-input').css("width", percentage + "%");
            $('.askt-output').css("width", mainPercentage + "%");
        });
    });

    $(document).on('mouseup', function(e){
        if (dragging) {
            $(document).unbind('mousemove');
            dragging = false;
        }
    });
}

}
