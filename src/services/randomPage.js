const pages = ["MJA=", "NDA=", "NjA=", "ODA=", "MTAw", "MTQw", "MTYw", "MTgw", "MjAw", "MjIw", "MjQw", "MjYw", "Mjgw", "MzAw", "MzIw"]

export function randomPage() {
    return pages[Math.floor(Math.random() * pages.length)]
  }