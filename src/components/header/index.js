import React from 'react'

function Index({ className = "", title = "", number }) {
    return (
        <div className={`${className} flex items-center justify-between w-full`}>
            <p>
                <span className="text-lg text-black inter-600">{title}</span>{" "}
                {number !==0 && <span className="text-sm text-light">({number})</span>}
            </p>
            <img alt="svg icon" src="/images/invoice/svgs/option.svg" />
        </div>
    )
}

export default Index