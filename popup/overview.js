browser.tabs.query({currentWindow: true})
  .then((tabs) => {
    const tabList = document.getElementById('tab-list');
    const tabIndex = {};

    for (let tab of tabs) {
      let item = document.createElement('div');
      const id = tab.id;
      item.classList.add('tab-list-item');

      const backgroundOverlay = 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.7))';

      if (tab.favIconUrl) {
        item.style.backgroundImage = backgroundOverlay + ', url(\'' + tab.favIconUrl + '\')';
      }

      const label = tab.title ? tab.title : tab.url;

      item.innerHTML = '<div class="tab-title">' + label + '</div>';
      item.addEventListener('click', (ev) => {
        browser.tabs.update(id, {active: true});
        window.close();
      });
      tabList.appendChild(item);
      tabIndex[id] = {
        tab: tab,
        el: item
      };
    }

    const searchField = document.getElementById('search-field');
    focusedItems = new Set();

    searchField.addEventListener('input', (ev) => {
      const lookup = ev.target.value.toLowerCase();

      for (let id in tabIndex) {
        const info = tabIndex[id];
        const matches = lookup === '' ||
          (info.tab.title && info.tab.title.toLowerCase().indexOf(lookup) !== -1) ||
          (info.tab.url && info.tab.url.toLowerCase().indexOf(lookup) !== -1);

        if (matches) {
          focusedItems.add(info);
          info.el.classList.remove('item-dimmed');
        } else {
          focusedItems.delete(info);
          info.el.classList.add('item-dimmed');
        }
      }

      return false;
    });

    searchField.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 13 && focusedItems.size === 1) {
        for (let info of focusedItems) {
          browser.tabs.update(info.tab.id, {active: true});
          window.close();
          return false;
        }
      }

      return true;
    });
  })
  .catch((err) => {
    const errorDiv = document.getElementById('error-message');
    errorDiv.setAttribute('class', '');
    errorDiv.innerHTML = 'An error occured: ' + err;
  });

window.setTimeout(function() { document.getElementById('search-field').focus(); }, 100);

// vim: set et ts=2 sw=2:
