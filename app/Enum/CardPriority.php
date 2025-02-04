<?php

namespace App\Enum;

enum CardPriority: string
{
    case URGENT = 'urgent';
    case HIGH = 'high';
    case MEDIUM = 'medium';
    case LOW = 'low';
    case UNKNOWN = 'unknown';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label
        ])->values()->toArray();
    }
}
