const search_bit_bt = document.querySelector(".search-big-bt");
const with_this = document.querySelector(".with_this");
const this_word = document.querySelector(".this_word");
const any_word = document.querySelector(".any_word");
const none_word = document.querySelector(".none_word");

search_bit_bt.addEventListener("click", () => {
  window.open(
    `https://www.google.com/search?as_q=${with_this.value}&as_epq=${this_word.value}&as_oq=${any_word.value}&as_eq=${none_word.value}&as_nlo=&as_nhi=&lr=&cr=&as_qdr=all&as_sitesearch=&as_occt=any&as_filetype=&tbs=`
  );
});
