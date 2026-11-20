import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { themeList, useTheme } from "~/hooks/useTheme"

function DarkToggle() {
  const { isDark, toggleDark } = useDark()
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])
  return (
    <button
      type="button"
      title={isDark ? "切换为浅色模式" : "切换为深色模式"}
      className={$("btn", isDark ? "i-ph:moon-stars-duotone" : "i-ph:sun-dim-duotone")}
      onClick={toggleDark}
    />
  )
}

function ThemePalette() {
  const { theme, setTheme } = useTheme()
  const [shown, show] = useState(false)
  return (
    <span
      className="relative"
      onMouseEnter={() => show(true)}
      onMouseLeave={() => show(false)}
    >
      <button
        type="button"
        title="切换主题配色"
        className="btn i-ph:palette-duotone"
        onClick={() => show(!shown)}
      />
      {shown && (
        <div className="absolute right-0 z-99 bg-transparent pt-4 top-4">
          <motion.div
            id="dropdown-theme"
            className={$([
              "w-160px",
              "bg-primary backdrop-blur-5 bg-op-70! rounded-lg shadow-xl",
            ])}
            initial={{
              scale: 0.9,
            }}
            animate={{
              scale: 1,
            }}
          >
            <ol className="bg-card backdrop-blur-md p-2 rounded-lg color-base text-base flex flex-col gap-1">
              {themeList.map(t => (
                <li
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name)
                    show(false)
                  }}
                  className="flex gap-2 items-center cursor-pointer [&_*]:cursor-pointer transition-all hover:bg-neutral-400/10 rounded-md p-1"
                >
                  <span
                    className="w-4 h-4 rounded-full inline-block border border-neutral-400/30 shadow-inner"
                    style={{ background: t.dot }}
                  />
                  <span className="text-sm">{t.label}</span>
                  {theme === t.name && <span className="i-ph:check-duotone ml-auto" />}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      )}
    </span>
  )
}

export function ThemeSwitcher() {
  return (
    <>
      <ThemePalette />
      <DarkToggle />
    </>
  )
}
