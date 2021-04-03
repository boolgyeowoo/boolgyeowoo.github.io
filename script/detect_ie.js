function detectIE() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("msie") !== -1 || ua.indexOf("trident") !== -1) {
    window.alert("인터넷 익스플로러는 지원되지 않습니다.\nInternetExplorer is not supported.")
  }
}