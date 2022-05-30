const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tabs to -1
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
  }

  // if the right key is pushed, move to the next tabs on the right
  if (e.keyCode === keydownRight) {
    tabFocus++;
    if (tabFocus >= tabs.length) {
      tabFocus = 0;
    }
  }

  // if the left key is pushed, move to the next tabs on the left
  if (e.keyCode === keydownLeft) {
    tabFocus--;
    if (tabFocus < 0) {
      tabFocus = tabs.length - 1;
    }
  }

  tabs[tabFocus].setAttribute("tabindex", 0);
  tabs[tabFocus].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  console.log(targetTab);

  const targetPanel = targetTab.getAttribute("aria-controls");
  console.log(targetPanel);

  const targetImg = targetTab.getAttribute("data-image");

  const tabContainer = targetTab.parentNode; // taking parent of targetTab in html
  console.log(tabContainer);

  const mainContainer = tabContainer.parentNode;
  console.log(mainContainer);

  tabContainer
    .querySelector('[aria-selected="true"]')
    .setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  mainContainer.querySelector([`#${targetPanel}`]).removeAttribute("hidden");

  mainContainer.querySelectorAll("picture").forEach((picture) => {
    picture.setAttribute("hidden", true);
  });

  mainContainer.querySelector([`#${targetImg}`]).removeAttribute("hidden");
}
