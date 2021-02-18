<?php

use Illuminate\Database\Seeder;
use App\User;
use App\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Post::class, 20)
            ->make()
            ->each(function ($post) {
                $user = User::inRandomOrder()->first();

                $post->user()->associate($user); //associo l' user al post
                $post->save(); //salvo il post nel db
            });
    }
}
