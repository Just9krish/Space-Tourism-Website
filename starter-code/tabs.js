const tabList = document.querySelector('[role="tablist"]');
const tab = tabList.querySelectorAll('[role="tab"]');

let tabFocus = 0;

tabList.addEventListener("keydown", changeTab);

function changeTab(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tab to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tab[tabFocus].setAttribute("tabindex", -1);
  }

  // if the right key is pushed, move to the next tab on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tab.length) {
      tabFocus = 0;
    }
  }

  // if the left key is pushed, move to the next tab on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tab.length - 1;
    }
  }

  tab[tabFocus].setAttribute("tabindex", 0);
  tab[tabFocus].focus();
}
