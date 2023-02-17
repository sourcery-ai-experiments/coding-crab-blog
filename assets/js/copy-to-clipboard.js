// source: https://github.com/iBug/iBug-source/commit/eb0180ae9eaa2d3d90c25b9c49cfb0e82fcc5e84

$(document).ready(function () {
  const copyText = function (text, button) {
    navigator.clipboard.writeText(text).then(() => {
      button.classList.add("copied");
      setTimeout(function () {
        // wait until the animation is done
        button.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(function () {
          // wait until the animation is done
          button.classList.remove("copied");
          setTimeout(function () {
            // wait until the animation is done
            button.innerHTML = '<i class="far fa-copy"></i>';
          }, 250);
        }, 2000);
      }, 250);
    })
  };

  const copyButtonEventListener = function (event) {
    const thisButton = event.target;

    // Locate the <pre> element
    let codeBlock = thisButton.nextElementSibling.querySelector("td.rouge-code>pre");
    console.log("codeBlock", codeBlock);
    console.log(codeBlock.innerText);
    return copyText(codeBlock.innerText, thisButton);
  };

  $("table.rouge-table").each(function () {
    // Locate the <code> element
    var copyButton = document.createElement("button");
    copyButton.title = "Copy to clipboard";
    copyButton.className = "copy-button";
    copyButton.innerHTML = '<i class="far fa-copy"></i>';
    copyButton.addEventListener("click", copyButtonEventListener);
    $(this).prepend(copyButton);
  });
});