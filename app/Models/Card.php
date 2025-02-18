<?php

namespace App\Models;

use App\Enum\CardPriority;
use App\Enum\CardStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'workspace_id',
        'title',
        'description',
        'deadline',
        'order',
        'status',
        'priority',
    ];

    protected function casts(): array
    {
        return [
            'status' => CardStatus::class,
            'priority' => CardPriority::class
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function workspace()
    {
        return $this->belongsTo(Workspace::class);
    }

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function members()
    {
        return $this->hasMany(Member::class, 'memberable');
    }
}
