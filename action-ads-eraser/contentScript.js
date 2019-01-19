/**
 * Remove node from its parent.
 *
 * @param {Object} node - HTML element to remove
 */
function removeNode(node) {
  node.parentNode.removeChild(node);
}

/**
 * Remove elements contains the target class name.
 *
 * @param {string} className
 */
function removeByClassName(className) {
  var elements = document.getElementsByClassName(className);
  for (var element of elements) {
    removeNode(element);
  }
}

/**
 * Remove elements of the given name, if they have the target
 * attribute and the attribute includes the target value.
 *
 * @param {string} tagName - tag name
 * @param {string=} attrName - target attribute name
 * @param {string=} attrValue - target attribute value
 */
function removeByTagName(tagName, attrName, attrValue) {
  var elements = document.getElementsByTagName(tagName);
  for (var element of elements) {
    if (attrName) {
      if (element.hasAttribute(attrName)
          && element.getAttribute(attrName).includes(attrValue)) {
        removeNode(element);
      }
    } else {
      removeNode(element);
    }
  }
}

removeByClassName('adsbygoogle');
removeByTagName('iframe');
removeByTagName('div', 'data-type', 'ad');
console.log("done");
