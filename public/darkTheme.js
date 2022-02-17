// On page load or when changing themes, best to add inline in `head` to avoid FOUC
try {
  const theme = localStorage.getItem("theme");
  if (
    theme === "dark" ||
    (!theme && window.matchMedia("(prefers-color-scheme:dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
} catch(_){}