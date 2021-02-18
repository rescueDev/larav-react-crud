<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{

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
