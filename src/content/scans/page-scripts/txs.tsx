import { store } from '@src/store'
import { SCAN_PAGES } from '@common/constants'

import {
  genEnhancedLabels,
  genEnhancedSignatures,
  convertUTC2locale,
  genCopyAddressBtn
} from '../feat-scripts'

const initTxsPageScript = async (chain: string) => {
  const { enhancedLabels, enhancedSignatures, utc2locale, copyAddress } =
    await store.get('options')

  if (enhancedLabels) {
    genEnhancedLabels(chain)
  }
  if (enhancedSignatures) {
    genEnhancedSignatures(chain)
  }
  if (utc2locale) convertUTC2locale(SCAN_PAGES.TXS.name)

  if (copyAddress) genCopyAddressBtn(SCAN_PAGES.TXS.name)
}

export default initTxsPageScript
