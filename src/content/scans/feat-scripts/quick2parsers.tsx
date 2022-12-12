import { createRoot } from 'react-dom/client'

import { isSupportParsers } from '@common/utils'

import ParsersBtn from '../components/ParsersBtn'

const genQuick2parsersBtn = (chain: string) => {
  const isSupport = isSupportParsers(chain)
  if (!isSupport) return
  const txHashEl = document.querySelector<HTMLElement>(
    '#ContentPlaceHolder1_maintable > div > div:nth-child(2)'
  )
  const rootEl = document.createElement('div')
  txHashEl?.classList.add('align-center')
  txHashEl?.appendChild(rootEl)
  createRoot(rootEl).render(<ParsersBtn chain={chain} />)
}

export default genQuick2parsersBtn
