import { useEffect } from "react"

export type ThemeName = "sky" | "warm" | "mint" | "dusk" | "ink" | "sakura" | "classic"

export const themeList: {
  name: ThemeName
  label: string
  /** 主题预览小圆点的颜色，取该主题浅色模式的背景色 */
  dot: string
}[] = [
  { name: "sky", label: "云青", dot: "#dcebf9" },
  { name: "warm", label: "暖沙", dot: "#f3ead9" },
  { name: "mint", label: "青瓷", dot: "#dceeda" },
  { name: "dusk", label: "暮紫", dot: "#e6e0f5" },
  { name: "ink", label: "水墨", dot: "#eceff1" },
  { name: "sakura", label: "樱粉", dot: "#f7e3ea" },
  { name: "classic", label: "原味", dot: "#e4e4e7" },
]

const themeAtom = atomWithStorage<ThemeName>("nn-theme", "sky")

export function useTheme() {
  const [theme, setTheme] = useAtom(themeAtom)

  useEffect(() => {
    document.documentElement.dataset.nnTheme = theme
  }, [theme])

  return { theme, setTheme }
}
