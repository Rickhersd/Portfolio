import React from 'react'
import '../sass/_language-btn.scss'

export default function LanguageBtn() {
  return (
    <button className="language-btn" data-darkmode>
      <div className="language-EN">EN</div>
      <div className="language-ES">ES</div>
    </button>
  )
}
