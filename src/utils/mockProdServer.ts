import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 获取mock目录下所有的 .ts文件
const modules: Record<string, any> = import.meta.glob('../../mock/**/*.ts', {
  import: 'default',
  eager: true
})

const mockModules = Object.keys(modules).reduce((pre, key) => {
  pre.push(...modules[key])
  return pre
}, [] as any[])
console.log('mockModules', mockModules)
/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupProdMockServer() {
  createProdMockServer(mockModules)
}
