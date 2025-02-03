<?php

namespace App\Models;

use App\Enum\WorkspaceVisibility;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workspace extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'slug',
        'cover',
        'logo',
        'visibility',
    ];

    public function casts()
    {
        return [
            'visibility' => WorkspaceVisibility::class,
        ];
    }
}
