<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'card_id',
        'parent_id',
        'title',
        'is_completed',
    ];

    protected $with = ['card', 'children', 'user'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function card()
    {
        return $this->belongsTo(Card::class);
    }

    public function parent()
    {
        return $this->belongsTo(Task::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Task::class, 'parent_id');
    }
}
