import React from 'react'

function Index({ isExpanded, item, index, setExpandedItems, expandedItems }) {
    return (
        <div key={index} className="bg-white p-4 rounded-lg mt-4">
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-2">
                    <img className="mt-1" alt="box" src="/images/invoice/svgs/box.svg" />
                    <div className="w-full">
                        <div className="space-x-2 inter-600 text-lg text-black">
                            <span>{item.packageName}</span>
                            <span>{item.amount} SAR</span>
                        </div>
                        {isExpanded && (
                            <div className="flex gap-1 flex-col">
                                <p className="text-xs text-light">Due: {item.dueDate}</p>
                                <p className="text-xs text-light">Month: {item.month}</p>
                            </div>
                        )}
                        <span className="text-xs text-light">{item.packageName}</span>
                    </div>
                </div>

                <button
                    onClick={() =>
                        setExpandedItems((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                        }))
                    }
                >
                    <img
                        alt="chevron"
                        src="/images/invoice/svgs/chevrond.svg"
                        className={`transition-transform duration-300 ${expandedItems[index] ? 'rotate-180' : ''}`}
                    />
                </button>
            </div>
        </div>
    )
}

export default Index