import React from 'react'

export default function Button({type="button",content,className="",onClick=()=>{}}) {
  return (
    <div>
        <button type={type}
                className={`${className} min-w-min text-nowrap`}
                onClick={onClick}
                
        >
            {content}
        </button>
    </div>
  )
}
