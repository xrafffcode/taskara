<?php

namespace App\Enum;

enum WorkspaceVisibility: string
{
    case PRIVATE = 'private';
    case PUBLIC = 'public';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->label
        ])->values()->toArray();
    }
}
