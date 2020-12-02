export function betterCreateElement(tagName, options = null) {

    const element = document.createElement(tagName);

    if (typeof options === 'string') {
        const classNames = options;
        addClasses(element, classNames);
    } else if (options) {

        
        if (options.class) {
            addClasses(element, options.class);
        }

        if (options.innerText) {
            element.innerText = options.innerText;
        }

        if (options.attributes) {
            for (let attributeName in options.attributes) {
                element.setAttribute(attributeName, options.attributes[attributeName])
            }
        }
    }

    return element;
}

function addClasses(element, classNames) {
    const classList = classNames.split(' ');

    classList.forEach(className => {
        element.classList.add(className);
    });
}

export function appendMany(parent, children) {
    children.forEach(child => {
        parent.appendChild(child);
    });
}