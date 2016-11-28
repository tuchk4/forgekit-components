export default {
  iterateParentsUntil(child, until) {
    let parent = child;

    while (!until(parent)) {
      parent = parent.parentNode;

      if (parent === null) {
        break;
      }
    }

    return parent;
  },

  isDescendant(parent, child) {
    let node = child.parentNode;

    while (node !== null) {
      if (node === parent) {
        return true;
      }

      node = node.parentNode;
    }

    return false;
  },

  offset(node) {
    const { top, left } = node.getBoundingClientRect();
    const { scrollTop, scrollLeft } = document.body;

    return {
      top: top + scrollTop,
      left: left + scrollLeft,
    };
  },
};
