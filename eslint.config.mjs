import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [".codacy/**", ".next/**", "out/**", "node_modules/**", "scripts/**"],
  },
]

export default eslintConfig
