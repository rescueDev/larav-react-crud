<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'title',
        'post_content',
        'likes',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
