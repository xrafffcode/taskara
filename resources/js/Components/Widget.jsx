import React from 'react'

export default function Widget({ className, ...props }) {
    const { bgColor, count, icon, title } = props

    return (
        <div
            className={fn(
                'relative overflow-hidden rounded-lg border bg-white px-4 pb-6 pt-5 sm:pt-6',
                className
            )}
        >
            <div>
                <div className={cn('absolute rounded-2xl p-3', bgColor)}>{icon}</div>
                <p className="ml-16 text-sm font-medium truncrate text-muted-foreground">{title}</p>
            </div>
            <div className="ml-16 flex items-baseline">
                <p className='text-foreground font-semibold text-2xl'>{count}</p>
            </div>
        </div>
    )
}
