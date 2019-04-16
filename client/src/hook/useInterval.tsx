import { useRef, useEffect } from 'react'

export default function useInterval(callback: any, delay: number) {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  })
  /**
   * @param {Function} callback
   * @param {Any[]} props, only the prop in props changed, useEffect will be call
   */
  useEffect(() => {
    console.log('set up interval with delay ', delay)
    function tick() {
      savedCallback.current()
    }

    if (delay) {
      // 如果进不来这里，setInterval 会被清理掉
      // 因为每次重复触发 useEffect 时，会调用清理逻辑
      // 把之前的 effect 清理掉
      // 所以每次更新时，会输出
      // clear interval
      // set up interval with delay {delay}
      // really setup
      console.log('really setup')
      const i = setInterval(tick, delay)
      return () => {
        console.log('clear interval')
        clearInterval(i)
      }
    }
  }, [delay])
}

// useEffect 何时调用清理逻辑？
// 1. unmount 2. repeat, effect 重复被调用时，会调用清理逻辑清理上次的effect
// useEffect 何时被调用，初次 render 和每次 update 都会被调用，可以传入第二个参数，[prop]，当 prop 改变时才触发更新调用
// 如果传 [] ,则表示不依赖 props 变更，只在 mount 和 clean up 时触发