import Image from 'next/image'
import React from 'react'

const UnderGroupcard = () => {
  return (
    <div class="max-w-xs rounded overflow-hidden shadow-lg">
    <Image src={"/icons/underMain.png"}width={260} height={146}/>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Badge</span>
      <p class="text-gray-700 text-base">
        Your description goes here. Customize this text with your own content. You can add more text or other elements as needed.
      </p>
    </div>
  </div>
  )
}

export default UnderGroupcard