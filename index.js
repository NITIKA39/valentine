const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const noBear = document.getElementById("bear");
const nomsg = document.getElementById("nomsg");
const yesgif = document.getElementById("yesgif");
const yesmsg = document.getElementById("yesmsg");


noBtn.addEventListener("click", () => {

  yesBtn.style.width = `${yesBtn.offsetWidth + 40}px`;
  yesBtn.style.height = `${yesBtn.offsetHeight + 40}px`;
  
  const msgs = ["pretty please","really no?","you breaking my heart.....", "dont you love me?"];
  const randomIdx = Math.floor(Math.random() * 4);
  noBtn.innerText = msgs[randomIdx];
});

yesBtn.addEventListener("click", () => {

  yesgif.style.display = "inline";
  yesmsg.style.display = "block";
  noBear.style.display = "none";
  nomsg.style.display = "none";
  noBtn.style.display = "none";
});