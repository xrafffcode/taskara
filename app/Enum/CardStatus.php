<?php

namespace App\Enum;

enum CardStatus: string
{
    case TODO = 'To Do';
    case INPROGRESS = 'In Progress';
    case ONREVIEW = 'On Review';
    case DONE = 'Done';
    case UNKNOWN = 'Unknown';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label
        ])->values()->toArray();
    }
}
